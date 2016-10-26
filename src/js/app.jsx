import React from 'react';
import QuestionContainer from './question/question-container.jsx';
import AnswerContainer from './answer/answer-container.jsx';
import DigimonContainer from './digimon/digimon-container.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <DigimonContainer />
        <QuestionContainer />
        <AnswerContainer />
      </div>);
  }
}
