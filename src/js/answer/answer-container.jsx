import React from 'react';
import PropTypes from 'prop-types';
import Answer from './answer.jsx';

class AnswerContainer extends React.Component {
  render() {
    return (
      <div className={`answerContainer ${this.props.mega ? 'megaStage' : ''}`}>
        <Answer
          answerText={this.props.answerText}
          onAnswerSubmit={this.props.onAnswerSubmit}
          onClickLeft={this.props.onClickLeft}
          onClickRight={this.props.onClickRight}
          />
      </div>
    );
  }
}

AnswerContainer.propTypes = {
  answerText: PropTypes.string,
  mega: PropTypes.bool,
  onAnswerSubmit: PropTypes.func,
  onClickRight: PropTypes.func,
  onClickLeft: PropTypes.func
};

export default AnswerContainer;
