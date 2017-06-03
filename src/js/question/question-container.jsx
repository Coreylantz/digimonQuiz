import React from 'react';
import PropTypes from 'prop-types';
import Question from './question.jsx';

class QuestionContainer extends React.Component {
  render() {
    return (
      <div className={`questionContainer ${this.props.mega ? 'megaStage' : ''}`}>
        <Question question={this.props.question} />
      </div>
    );
  }
}

QuestionContainer.propTypes = {
  question: PropTypes.string.isRequired,
  mega: PropTypes.bool.isRequired
};

export default QuestionContainer;
