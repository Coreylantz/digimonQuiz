import React from 'react';
import IPropTypes from 'immutable-props';
import AnswerPosition from './answer-position.jsx';
import AnswerArrowLeft from './answer-arrow-left.jsx';
import AnswerArrowRight from './answer-arrow-right.jsx';
import AnswerSubmit from './answer-submit.jsx';

class Answers extends React.Component {

  render() {
    return (
      <div className="answers">
        <AnswerPosition />
        <div className="answerFlex">
          <AnswerArrowLeft onClick={this.props.handleClickLeft} />
          <p>{this.props.answer}</p>
          <AnswerArrowRight onClick={this.props.handleClickRight} />
        </div>
        <button onClick={this.props.answerSubmit}>Submit</button>
      </div>
    );
  }
}

class AnswerText extends React.PureComponent {
  render() {
    return (
      <p className="answer">{this.props.answer}</p>
    );
  }
}

Answers.propTypes = {
  answers: IPropTypes.Seq
};

export default Answers;
