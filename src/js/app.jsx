import React from 'react';
import questionData from './question-data';
import QuestionContainer from './question/question-container.jsx';
import AnswerContainer from './answer/answer-container.jsx';
import DigimonContainer from './digimon/digimon-container.jsx';

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {currentQuestion: 0};

    // Create a non import copy of question data so we can modify the reference
    // so poping the old stage works.
    this.questions = questionData;
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

  render() {
    return (
      <div className="wrapper">
        <DigimonContainer />
        <QuestionContainer question={this.getCurrentQuestionText()} />
        <AnswerContainer
          answers={this.getAnswerText()}
          />
      </div>
    );
  }
}
