import React from 'react';
import Question from './question.jsx';

class QuestionContainer extends React.Component {
  render() {
    return (
      <div className="questionContainer">
        <Question question={this.props.question} />
      </div>
    );
  }
}

QuestionContainer.propTypes = {
  question: React.PropTypes.string.isRequired
};

export default QuestionContainer;
