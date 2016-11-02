import React from 'react';
import IPropTypes from 'immutable-props';
import AnswerPosition from './answer-position.jsx';
import AnswerArrowLeft from './answer-arrow-left.jsx';
import AnswerText from './answer-text.jsx';
import AnswerArrowRight from './answer-arrow-right.jsx';
import AnswerSubmit from './answer-submit.jsx';

class Answers extends React.Component {
  componentWillMount() {
    this.setState({currentAnswer: parseInt(this.props.answers.size / 2, 10)});
  }

  getCurrentAnswer() {
    return this.props.answers.get(this.state.currentAnswer);
  }

  handleClickLeft() {
    if (this.state.currentAnswer === 0) {
      this.setState({currentAnswer: this.props.answers.size - 1});
    } else {
      this.setState({currentAnswer: this.state.currentAnswer - 1});
    }
  }

  handleClickRight() {
    if (this.state.currentAnswer === this.props.answers.size - 1) {
      this.setState({currentAnswer: 0});
    } else {
      this.setState({currentAnswer: this.state.currentAnswer + 1});
    }
  }

  render() {
    return (
      <div className="answers">
        <AnswerPosition />
        <div className="answerFlex">
          <AnswerArrowLeft onClick={() => this.handleClickLeft()} />
          <AnswerText answer={this.getCurrentAnswer()} />
          <AnswerArrowRight onClick={() => this.handleClickRight()} />
        </div>
        <AnswerSubmit />
      </div>
    );
  }
}

Answers.propTypes = {
  answers: IPropTypes.Seq
};

export default Answers;
