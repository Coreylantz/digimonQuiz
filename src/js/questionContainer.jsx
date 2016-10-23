import React from 'react';
import {render} from 'react-dom';
import Question from './question.jsx';

export default class QuestionContainer extends React.Component {
	render() {
		return( 
      <div className="questionContainer">
  		  <Question />	
  		</div>
    );
	}
}
