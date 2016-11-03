import React from 'react';

class AnswerArrowLeft extends React.Component {
  render() {
    return (
      <button className="previousArrow arrow" onClick={this.props.onClick} />
    );
  }
}

AnswerArrowLeft.propTypes = {
  onClick: React.PropTypes.func
};

export default AnswerArrowLeft;
