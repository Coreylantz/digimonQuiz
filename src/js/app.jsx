import React from 'react';
import {render} from 'react-dom';
import QuestionContainer from './questionContainer.jsx';
import AnswerContainer from './answerContainer.jsx';
import DigimonContainer from './digimonContainer.jsx';

export default class App extends React.Component {
  render () {
    return (
    <div className="wrapper">
      <DigimonContainer />
      <QuestionContainer />
      <AnswerContainer />
    </div>);
  }
}
