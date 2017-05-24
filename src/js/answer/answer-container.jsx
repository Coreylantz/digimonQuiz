import React from 'react';
import IPropTypes from 'immutable-props';
import Answer from './answer.jsx';

class AnswerContainer extends React.Component {
  render() {
    return (
      <div className="answerContainer">
        <Answer answers={this.props.answers}
                answerSubmit={this.props.answerSubmit}/>
      </div>
    );
  }
}

AnswerContainer.propTypes = {
  answers: IPropTypes.Seq
};

export default AnswerContainer;
