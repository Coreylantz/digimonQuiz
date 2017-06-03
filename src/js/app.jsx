import React from 'react';
import request from 'superagent';
import {List} from 'immutable';

import questionData from './question-data';
import baseUser from './user';
import QuestionContainer from './question/question-container.jsx';
import AnswerContainer from './answer/answer-container.jsx';
import DigimonContainer from './digimon/digimon-container.jsx';

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {currentQuestion: 0,
      currentAnswer: 0,
      currentDigimon: {
        name: 'egg',
        prettyName: '',
        stats: {},
        type: '',
        number: -1,
        nextEvos: []
      }
    };

    this.possibleEvos = new List(); // Array of possible evoltions

    // Create a non import copy of question data so we can modify the reference
    // so poping the old stage works.
    this.allQuestions = questionData;

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
            const digimon = JSON.parse(data.text);
            this.setState({currentDigimon: digimon});
            this.findDigimonEvolution(digimon);
          }
        });
    }
  }

  findDigimonEvolution(digimon) {
    this.possibleEvos = this.possibleEvos.clear();
    digimon.nextEvos.forEach(digimonName => {
      request
        .get(`digimon/${digimonName}.json`)
        .end((err, data) => {
          if (err || !data.ok) {
            console.error(err);
          } else {
            this.possibleEvos = this.possibleEvos.push(JSON.parse(data.text));
          }
        });
    });
  }

  findDigimonMatch() {
    let digivolution = this.possibleEvos.map(digimon => {
      return {
        difference: this.user.map((stat, statName) => {
          if (!(statName in digimon.stats)) {
            return 0;
          }

          return (digimon.stats[statName] / stat) - 1;
        }).reduce((total, value) => {
          return total + value;
        }),
        digimon: digimon
      };
    }).min((a, b) => {
      if (a.difference < b.difference) {
        return -1;
      } else if (a.difference > b.difference) {
        return 1;
      }

      return 0;
    });

    this.user = this.user.set('digimon',
      this.user.get('digimon').push(digivolution.digimon)
    );
    this.setState({currentDigimon: digivolution.digimon});
    this.findDigimonEvolution(digivolution.digimon);
  }

  getQuestions() {
    return this.allQuestions.peek();
  }

  getCurrentQuestion() {
    let questions = this.getQuestions();

    if (this.state.currentQuestion > questions.size - 1) {
      return questions.get(0);
    }

    return questions.get(this.state.currentQuestion);
  }

  getCurrentQuestionText() {
    return this.getCurrentQuestion().get('question');
  }

  getAnswers() {
    return this.getCurrentQuestion().get('answers');
  }

  getCurrentAnswer() {
    return this.getAnswers().get(this.state.currentAnswer);
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

    this.setState({currentQuestion: this.state.currentQuestion + 1});

    if (this.state.currentQuestion + 1 === this.getQuestions().size) {
      this.allQuestions = this.allQuestions.pop();

      this.setState({currentQuestion: 0});

      if (this.state.currentAnswer >= this.getAnswers().size - 1) {
        this.setState({currentAnswer: this.getAnswers().size - 1});
      }

      this.findDigimonMatch();
    }
  }

  render() {
    return (
      <div className="wrapper">
        <DigimonContainer
          digimon={this.state.currentDigimon}
          mega={this.allQuestions.size === 1}
          // digivolve={}
          />
        <QuestionContainer
          question={this.getCurrentQuestionText()}
          mega={this.allQuestions.size === 1}
          />
        <AnswerContainer
          answerText={this.getCurrentAnswer().get('text')}
          mega={this.allQuestions.size === 1}
          onClickLeft={this.handleClickLeft}
          onClickRight={this.handleClickRight}
          onAnswerSubmit={this.handleSubmit}
          />
      </div>
    );
  }
}
