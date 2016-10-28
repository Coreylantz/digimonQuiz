import React from 'react';
import QuestionContainer from './question/question-container.jsx';
import AnswerContainer from './answer/answer-container.jsx';
import DigimonContainer from './digimon/digimon-container.jsx';

export default class App extends React.Component {
  getCurrentQuestion() {
    return 'What is your name?';
  }

  render() {
    return (
      <div className="wrapper">
        <DigimonContainer />
        <QuestionContainer question={this.getCurrentQuestion()} />
        <AnswerContainer question={this.getCurrentQuestion()} />
      </div>);
  }
}
