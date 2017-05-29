import React from 'react';
import questionData from './question-data';
import QuestionContainer from './question/question-container.jsx';
import AnswerContainer from './answer/answer-container.jsx';
import DigimonContainer from './digimon/digimon-container.jsx';
import user from './user.js';

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {currentQuestion: 0,
                  currentAnswer: 0};

    // Create a non import copy of question data so we can modify the reference
    // so poping the old stage works.
    this.questions = questionData;

    // bind so that we may use these as props
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickLeft = this.handleClickLeft.bind(this);
    this.handleClickRight = this.handleClickRight.bind(this);
    this.getCurrentAnswer = this.getCurrentAnswer.bind(this);

  }

  getCurrentQuestion() {
    return this.questions.peek().get(this.state.currentQuestion);
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

        user[statValue[i]] += stats.get(statValue[i])
        console.log(user);
      }
    }
  }

  handleSubmit() {
    const stats = this.getAnswerStats();
    for(var stat in stats) {
      if(stats.hasOwnProperty(stat)) {
        const statValue = stats[stat];
        this.updateUser(statValue, stats)
      }
    }

    // console.log(stats.size);
    this.setState({currentQuestion: this.state.currentQuestion + 1});
  }

  // getAnswerStat() {
  //   return this.getCurrentQuestion().get('answers').map(answer (answer, i) => {
  //     return answer.get('hp');
  //   });
  // }

  render() {
    return (
      <div className="wrapper">
        <DigimonContainer />
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
