import React from 'react';
import {Seq} from 'immutable';
import questionData from './question-data';
import QuestionContainer from './question/question-container.jsx';
import AnswerContainer from './answer/answer-container.jsx';
import DigimonContainer from './digimon/digimon-container.jsx';

export default class App extends React.Component {
  getCurrentQuestion(n) {
    console.log(questionData);

    let currentQuestion = questionData[0].question;
    return currentQuestion;
  }

  getAnswers(n) {
    let answersArray = questionData[n].answers;
    let answerSeq = [];
    for (var i = 0; i < answersArray.length; i++) {
      let currentAnswer = answersArray[i];
      answerSeq.push(currentAnswer.answerString);
    }
    console.log(answerSeq);
    answerSeq = new Seq(answerSeq);
    console.log(answerSeq);
    return answerSeq;
    // console.log(currentAnswer[0].answerString);

    // return new Seq([
    //   'Test 0',
    //   'Test 1',
    //   'Test 2',
    //   'Test 3',
    //   'Test 4',
    //   'Test 5',
    //   'Test 6',
    //   'Test 7'
    // ]);
  }

  render() {
    return (
      <div className="wrapper">
        <DigimonContainer />
        <QuestionContainer question={this.getCurrentQuestion()} />
        <AnswerContainer
          question={this.getCurrentQuestion(0)}
          answers={this.getAnswers(0)}
          />
      </div>);
  }
}
