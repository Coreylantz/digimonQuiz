import React from 'react';
import PropTypes from 'prop-types';

class Question extends React.Component {
  render() {
    return (
      <p className="question">{this.props.question}</p>
    );
  }
}

Question.propTypes = {
  question: PropTypes.string.isRequired
};

export default Question;
