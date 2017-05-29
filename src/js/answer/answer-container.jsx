import React from 'react';
import IPropTypes from 'immutable-props';
import Answer from './answer.jsx';

class AnswerContainer extends React.Component {
  render() {
    return (
      <div className="answerContainer">
        <Answer answers={this.props.answers}
        		answer={this.props.answer}
                answerSubmit={this.props.answerSubmit}
                handleClickLeft={this.props.handleClickLeft}
          		handleClickRight={this.props.handleClickRight}
                />
      </div>
    );
  }
}

AnswerContainer.propTypes = {
  answers: IPropTypes.Seq
};

export default AnswerContainer;
