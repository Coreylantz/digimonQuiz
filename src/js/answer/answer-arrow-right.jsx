import React from 'react';

class AnswerArrowRight extends React.Component {
  render() {
    return (
      <button className="nextArrow arrow" onClick={this.props.onClick} />
    );
  }
}

AnswerArrowRight.propTypes = {
  onClick: React.PropTypes.func
};

export default AnswerArrowRight;
