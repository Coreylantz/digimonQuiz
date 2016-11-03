import React from 'react';
import {Seq} from 'immutable';
import QuestionContainer from './question/question-container.jsx';
import AnswerContainer from './answer/answer-container.jsx';
import DigimonContainer from './digimon/digimon-container.jsx';

export default class App extends React.Component {
  getCurrentQuestion() {
    return 'What is your name?';
  }

  getAnswers() {
    return new Seq([
      'Test 0',
      'Test 1',
      'Test 2',
      'Test 3',
      'Test 4',
      'Test 5',
      'Test 6'
    ]);
  }

  render() {
    return (
      <div className="wrapper">
        <DigimonContainer />
        <QuestionContainer question={this.getCurrentQuestion()} />
        <AnswerContainer
          question={this.getCurrentQuestion()}
          answers={this.getAnswers()}
          />
      </div>);
  }
}
