import React from 'react';
import request from 'superagent';
import questionData from './question-data';
import QuestionContainer from './question/question-container.jsx';
import AnswerContainer from './answer/answer-container.jsx';
import DigimonContainer from './digimon/digimon-container.jsx';
import baseUser from './user';

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {currentQuestion: 0,
      currentAnswer: 0,
      currentStage: 0,
      currentDigimon: {
        name: 'egg',
        prettyName: '',
        stats: {},
        type: '',
        number: -1,
        nextEvos: []}
    };

    this.possibleEvos = []; // Array of possible evoltions

    // Create a non import copy of question data so we can modify the reference
    // so poping the old stage works.
    this.questions = questionData;

    this.user = baseUser;

    // bind so that we may use these as props
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickLeft = this.handleClickLeft.bind(this);
    this.handleClickRight = this.handleClickRight.bind(this);

    this.findFirstDigimon();
  }

  findFirstDigimon() {
    if (this.state.currentDigimon.number === -1) {
      request
       .get(`digimon/${this.state.currentDigimon.name}.json`)
       .end((err, data) => {
         if (err || !data.ok) {
           console.error(err);
         } else {
           this.setState({currentDigimon: JSON.parse(data.text)});
         }
       });
    }
  }

  findDigimonEvolution() {
    this.state.currentDigimon.nextEvos.forEach(digimonName => {
      request
       .get(`digimon/${digimonName}.json`)
       .end((err, data) => {
         if (err || !data.ok) {
           console.error(err);
         } else {
           this.possibleEvos.push(JSON.parse(data.text));
         }
       });
    });
  }

  findDigimonMatch() {
    let matchedNumber;
    let digivolution;

    this.possibleEvos.forEach(nextDigimon => {
      let matchedStats = 0;
      const digimonStatName = Object.keys(nextDigimon.stats);
      digimonStatName.forEach(stat => {
        const userStat = this.user.get(stat);
        const nextDigimonStat = nextDigimon.stats[stat];
        const matchedStat = userStat / nextDigimonStat;

        matchedStats += matchedStat;
      });

      matchedStats -= digimonStatName.length;
      const finalMatch = Math.abs(matchedStats);
        // console.log(finalMatch);

      if (!isNaN(matchedNumber) && matchedNumber < finalMatch) {
          // matchedNumber = finalMatch;
          // console.log(`WhateverOne Number ${matchedNumber} ${nextDigimon}`);
      } else {
        matchedNumber = finalMatch;
        // console.log(nextDigimon);
        digivolution = nextDigimon;
      }
    });

    this.setState({currentDigimon: digivolution});
  }

  getCurrentStage() {
    return this.questions.get(this.state.currentStage);
  }

  getCurrentQuestion() {
    return this.getCurrentStage().get(this.state.currentQuestion);
  }

  getCurrentQuestionText() {
    return this.getCurrentQuestion().get('question');
  }

  getAnswers() {
    return this.getCurrentQuestion().get('answers');
  }

  getCurrentAnswer() {
    return this.getCurrentQuestion().get('answers').get(this.state.currentAnswer);
  }

  handleClickLeft() {
    if (this.state.currentAnswer === 0) {
      this.setState({currentAnswer: this.getAnswers().size - 1});
    } else {
      this.setState({currentAnswer: this.state.currentAnswer - 1});
    }
  }

  handleClickRight() {
    if (this.state.currentAnswer === this.getAnswers().size - 1) {
      this.setState({currentAnswer: 0});
    } else {
      this.setState({currentAnswer: this.state.currentAnswer + 1});
    }
  }

  updateUser(stats) {
    return this.user.map((value, key) => {
      if (stats.has(key)) {
        value += stats.get(key);
      }

      return value;
    });
  }

  handleSubmit() {
    this.user = this.updateUser(this.getCurrentAnswer());

    if (this.state.currentQuestion === this.getCurrentStage().size - 1) {
      this.setState({currentStage: this.state.currentStage + 1,
        currentQuestion: 0});
      // this.setState({currentDigimon: possibleEvos[0]});
      this.findDigimonMatch();
    } else {
      // find the next possible eveolutions on the 2nd last question
      if (this.state.currentQuestion === this.getCurrentStage().size - 2) {
        this.findDigimonEvolution();
      } else {
        this.possibleEvos = [];
      }
      this.setState({currentQuestion: this.state.currentQuestion + 1});
    }
  }

  render() {
    return (
      <div className="wrapper">
        <DigimonContainer digimon={this.state.currentDigimon} />
        <QuestionContainer question={this.getCurrentQuestionText()} />
        <AnswerContainer
          onClickLeft={this.handleClickLeft}
          onClickRight={this.handleClickRight}
          answerText={this.getCurrentAnswer().get('text')}
          onAnswerSubmit={this.handleSubmit}
          />
      </div>
    );
  }
}
