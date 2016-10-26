import React from 'react';
import {render} from 'react-dom';
import AnswerPosition from './answerPosition.jsx';
import AnswerArrowLeft from './answerArrowLeft.jsx';
import AnswerText from './answerText.jsx';
import AnswerArrowRight from './answerArrowRight.jsx';
import AnswerSubmit from './answerSubmit.jsx';

export default class Answers extends React.Component {
  render(){
    return(
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
