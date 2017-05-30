#!/usr/bin/env node

const fs = require('fs');
const request = require('superagent');
const jquery = require('jquery');
const jsdom = require('jsdom');

// Regexes
const evoRegex = /(Ultra|Armor|Digivolution Chart Tables|Skill Listings|All Digimon's Inherited Skills)/i;
const jpRegex = /[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|\u203B/g;
const cleanRegex = /[^a-z0-9]/gi;
const numberRegex = /\d\d\d/;
const typeRegex = /Type: [a-z]*/i;
const statRegex = /[a-z]+\d+/gi;
const ignoreDigivolutionRegex = /(egg|mon)/i;

var pageNumber = 14;
var currentStage = '';
var digimon = digiInit();
var doingEvo = true;

function digiInit() {
  return {
    name: '',
    prettyName: '',
    jpName: '',
    stats: {
      hp: 0,
      sp: 0,
      atk: 0,
      int: 0,
      def: 0,
      spd: 0
    },
    type: '',
    number: 0,
    nextEvos: []
  };
}

function start() {
  fs.access('./digimon', e => {
    if (e) {
      fs.mkdir('./digimon', e => {
        if (e) {
          console.error(e); process.exit(0);
        }
        parsePage();
      });
    } else {
      parsePage();
    }
  });
}

function parsePage() {
  request
    .get('gamefaqs.com/vita/757436-digimon-story-cyber-sleuth/faqs/71778')
    .query({page: pageNumber++})
    .end((e, response) => {
      if (e) {
        console.error(e); process.exit(0);
      }
      jsdom.env(response.text, (e, window) => {
        if (e) {
          console.error(e); process.exit(0);
        }
        let $ = jquery(window);

        let startPoint = $('h2:contains(\'Digimon Encyclopedia\')');

        if (startPoint.length > 0) {
          crawlDOM(startPoint, $);

          // Call new parsePage async
          setTimeout(parsePage, 10);
        } else {
          // End of the Digimon Encyclopedia
          console.log('End of Encyclopedia.');
          process.exit(0);
        }
      });
    }
  );
}

function crawlDOM(node, $) {
  while (node.length > 0) {
    // New evolution stage
    if ($(node).next('h3').length > 0) {
      handleNewStage(node.next());
    }

    // Do nothing if not doing these evolutions
    else if (!doingEvo) {}

    // New digimon
    else if ($(node).next('h4').length > 0) {
      handleNewMon(node.next());
    }

    // Type and number
    else if ($(node).next('p:contains(\'Attribute\')').length > 0) {
      handleTypeNumber(node.next());
    }

    // lvl99 stat table
    else if ($(node).next('table:contains(\'Level 99\')').length > 0) {
      handleStats(node.next());
    }

    // Digivolves Into table
    else if ($(node).next('table:contains(\'Digivolves Into\')').length > 0) {
      handleEvo(node.next(), $);
    }

    // Advance to the next node
    node = node.next();
  }
}

function handleNewStage(node) {
  currentStage = node.text();

  if (evoRegex.test(currentStage)) {
    doingEvo = false;

    // Write the old mon to json
    if (digimon.name.length > 0) {
      console.log(`Writing ${digimon.prettyName} to file...`);
      fs.writeFile(`./digimon/${digimon.name}.json`, JSON.stringify(digimon), e => {
        if (e) {
          console.error(e); process.exit(0);
        }
      });
      digimon = digiInit();
    }
  } else {
    doingEvo = true;
  }

  console.log('\nNew evolution stage: ' + currentStage);
}

function handleNewMon(node) {
  // Write the old mon to json
  if (digimon.name.length > 0) {
    console.log(`Writing ${digimon.prettyName} to file...`);
    fs.writeFile(`./digimon/${digimon.name}.json`, JSON.stringify(digimon), e => {
      if (e) {
        console.error(e); process.exit(0);
      }
    });
  }

  console.log('\nStarting new digimon...');
  digimon = digiInit();

  digimon.prettyName = node.text().substring(0, node.text().search(jpRegex) - 1);
  digimon.name = digimon.prettyName.replace(cleanRegex, '').toLowerCase();
  digimon.jpName = node.text().substring(node.text().search(jpRegex));

  console.log('Named: ' + digimon.prettyName);
  console.log('jp Name: ' + digimon.jpName);
}

function handleTypeNumber(node) {
  digimon.number = parseInt(node.text().match(numberRegex)[0]);
  console.log('Numbered: ' + digimon.number);

  digimon.type = node.text().match(typeRegex)[0].substring(6);
  console.log('Typed: ' + digimon.type);
}

function handleStats(node) {
  let res = '';
  let text = node.text().replace(',', '');

  while ((res = statRegex.exec(text)) !== null) {
    res = res[0].split(/(\d+)/);

    digimon.stats[res[0].toLowerCase()] = parseInt(res[1]);

    console.log(`${res[0].toLowerCase()}: ${digimon.stats[res[0].toLowerCase()]}`);
  }
}

function handleEvo(node, $) {
  for (let a of node.find('td:first-child > a')) {
    // Check for armor or DNA
    if (ignoreDigivolutionRegex.test(
      $(a).parents('tr').children(':last-child').text())) {
      continue;
    }

    // Verifiy it's a mon and not a link out
    digimon.nextEvos.push($(a).text().replace(cleanRegex, '').toLowerCase());
  }

  console.log('Digivolutions: ' + digimon.nextEvos.join(', '));
}

start();
