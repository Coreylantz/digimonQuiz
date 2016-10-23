import React from 'react';
import {render} from 'react-dom';
import Answer from './answer.jsx';

export default class AnswerContainer extends React.Component {
  render(){
    return(
      <div className="answerContainer">
        <Answer />
      </div>
    );
  }
} 
