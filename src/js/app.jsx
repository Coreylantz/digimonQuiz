import React from 'react';
import questionData from './question-data';
import QuestionContainer from './question/question-container.jsx';
import AnswerContainer from './answer/answer-container.jsx';
import DigimonContainer from './digimon/digimon-container.jsx';
import user from './user.js';

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {currentQuestion: 0};

    // Create a non import copy of question data so we can modify the reference
    // so poping the old stage works.
    this.questions = questionData;

    // bind so that we may use these as props
    this.handleSubmit = this.handleSubmit.bind(this);

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




  handleSubmit() {
    const obj = this.getCurrentQuestion().get('answers');
    obj.toJS().map(item => {console.log(item)});
    // console.log(obj);

    this.setState({currentQuestion: this.state.currentQuestion + 1})
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
          answers={this.getAnswerText()}
          answerSubmit={this.handleSubmit}
          />
      </div>
    );
  }
}
