import React from 'react';
import PropTypes from 'prop-types';
import AnswerPosition from './answer-position.jsx';
import AnswerArrowLeft from './answer-arrow-left.jsx';
import AnswerArrowRight from './answer-arrow-right.jsx';

class Answers extends React.Component {

  render() {
    return (
      <div className="answers">
        <AnswerPosition />
        <div className="answerFlex">
          <AnswerArrowLeft onClick={this.props.onClickLeft} />
          <p className="answer">{this.props.answerText}</p>
          <AnswerArrowRight onClick={this.props.onClickRight} />
        </div>
        <button onClick={this.props.onAnswerSubmit}>Submit</button>
      </div>
    );
  }
}

Answers.propTypes = {
  answerText: PropTypes.string,
  onAnswerSubmit: PropTypes.func,
  onClickRight: PropTypes.func,
  onClickLeft: PropTypes.func
};

export default Answers;
