import React from 'react';
import {render} from 'react-dom';
import {QuestionContainer} from './questionContainer.jsx';

export class App extends React.Component {
  render () {
    return (<div className="wrapper">
    	<QuestionContainer />
    </div>);
  }
}
