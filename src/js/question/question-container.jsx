import React from 'react';
import Question from './question.jsx';

export default class QuestionContainer extends React.Component {
  render() {
    return (
      <div className="questionContainer">
        <Question />
      </div>
    );
  }
}
