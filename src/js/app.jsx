import React from 'react';
// const request = require('superagent');
import request from 'superagent';
import questionData from './question-data';
import QuestionContainer from './question/question-container.jsx';
import AnswerContainer from './answer/answer-container.jsx';
import DigimonContainer from './digimon/digimon-container.jsx';
import user from './user.js';

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {currentQuestion: 0,
                  currentAnswer: 0,
                  currentStage: 0,
                  currentDigimon: {
                    name:"egg", 
                    prettyName:"", 
                    stats:{},
                    type:"",
                    number:-1,
                    nextEvos:[]}
                  };

    // Create a non import copy of question data so we can modify the reference
    // so poping the old stage works.
    this.questions = questionData;

    // bind so that we may use these as props
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickLeft = this.handleClickLeft.bind(this);
    this.handleClickRight = this.handleClickRight.bind(this);
    this.getCurrentAnswer = this.getCurrentAnswer.bind(this);

    this.findFirstDigimon();

  }

  findFirstDigimon() {
    if (this.state.currentDigimon.number !== -1) {
      return this.state.currentDigimon; 
    } else {
       request
       .get(`digimon/${this.state.currentDigimon.name}.json`)
       .end( (err, data) => {
        if (err || !data.ok) {
        alert('Oh no! error');
     } else {

       this.setState({currentDigimon: JSON.parse(data.text)});
       console.log(JSON.parse(data.text))
     }
       });
    }
  }

  findDigimonEvolution() {
    this.state.currentDigimon.nextEvos.forEach((digimonName)  => {
       request
       .get(`digimon/${digimonName}.json`)
       .end( (err, data) => {
        if (err || !data.ok) {
        alert('Oh no! error');
     } else {

       this.setState({currentDigimon: JSON.parse(data.text)});
       console.log(JSON.parse(data.text))
     }
       });
    })
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

  getAnswerText() {
    return this.getCurrentQuestion().get('answers').map(answer => {
      return answer.get('text');
    });
  }

  handleClickLeft() {
    if (this.state.currentAnswer === 0) {
      this.setState({currentAnswer: this.getAnswerText().size - 1});
    } else {
      this.setState({currentAnswer: this.state.currentAnswer - 1});
    }
    // console.log(this.state.currentAnswer);
  }

  handleClickRight() {
    if (this.state.currentAnswer === this.getAnswerText().size - 1) {
      this.setState({currentAnswer: 0});
    } else {
      this.setState({currentAnswer: this.state.currentAnswer + 1});
    }
    // console.log(this.state.currentAnswer);
  }

  getAnswerStats() {
    return this.getCurrentQuestion().get('answers').get(this.state.currentAnswer);
  }

  getCurrentAnswer() {
    return this.getAnswerText().get(this.state.currentAnswer);
  }

  updateUser(statValue, stats) {
    for (var i = 0; i < statValue.length; i++) {
      if (statValue[i] !== 'text') {
        // console.log(user[statValue[i]])
        // console.log(stats.get(statValue[i]));

        user[statValue[i]] += stats.get(statValue[i]);
        console.log(user);
      }
    }
  }

  handleSubmit() {
    const stats = this.getAnswerStats();
    for (var stat in stats) {
      if (stats.hasOwnProperty(stat)) {
        const statValue = stats[stat];
        this.updateUser(statValue, stats);
      }
    }

    if (this.state.currentQuestion === this.getCurrentStage().size - 1) {
      this.setState({currentStage: this.state.currentStage + 1,
        currentQuestion: 0});
    } else {
      this.setState({currentQuestion: this.state.currentQuestion + 1});
    }

    // console.log(stats.size);
    console.log(this.getCurrentStage().size);
    this.findDigimonEvolution();
  }

  // getAnswerStat() {
  //   return this.getCurrentQuestion().get('answers').map(answer (answer, i) => {
  //     return answer.get('hp');
  //   });
  // }

  render() {
    return (
      <div className="wrapper">
        <DigimonContainer digimon={this.state.currentDigimon} />
        <QuestionContainer question={this.getCurrentQuestionText()} />
        <AnswerContainer
          handleClickLeft={this.handleClickLeft}
          handleClickRight={this.handleClickRight}
          answers={this.getAnswerText()}
          answer={this.getCurrentAnswer()}
          answerSubmit={this.handleSubmit}
          />
      </div>
    );
  }
}
