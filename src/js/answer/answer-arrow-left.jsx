import React from 'react';
import PropTypes from 'prop-types';

class AnswerArrowLeft extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <button className="previousArrow arrow" onClick={this.props.onClick} />
    );
  }
}

AnswerArrowLeft.propTypes = {
  onClick: PropTypes.func
};

export default AnswerArrowLeft;
