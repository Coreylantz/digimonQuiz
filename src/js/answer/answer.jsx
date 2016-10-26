import React from 'react';
import AnswerPosition from './answer-position.jsx';
import AnswerArrowLeft from './answer-arrow-left.jsx';
import AnswerText from './answer-text.jsx';
import AnswerArrowRight from './answer-arrow-right.jsx';
import AnswerSubmit from './answer-submit.jsx';

export default class Answers extends React.Component {
  render() {
    return (
      <div className="answers">
        <AnswerPosition />
        <div className="answerFlex">
          <AnswerArrowLeft />
          <AnswerText />
          <AnswerArrowRight />
        </div>
        <AnswerSubmit />
      </div>
    );
  }
}
