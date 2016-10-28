import React from 'react';

class Question extends React.Component {
  render() {
    return (
      <p className="question">{this.props.question}</p>
    );
  }
}

Question.propTypes = {
  question: React.PropTypes.string.isRequired
};

export default Question;
