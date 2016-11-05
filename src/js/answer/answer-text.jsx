import React from 'react';

class AnswerText extends React.PureComponent {
  render() {
    return (
      <p className="answer">{this.props.answer}</p>
    );
  }
}

AnswerText.propTypes = {
  answer: React.PropTypes.string.isRequired
};

export default AnswerText;
