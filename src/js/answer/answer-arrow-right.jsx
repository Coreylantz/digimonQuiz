import React from 'react';
import PropTypes from 'prop-types';

class AnswerArrowRight extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <button className="nextArrow arrow" onClick={this.props.onClick} />
    );
  }
}

AnswerArrowRight.propTypes = {
  onClick: PropTypes.func
};

export default AnswerArrowRight;
