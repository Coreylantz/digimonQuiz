import React from 'react';
import PropTypes from 'prop-types';

export default class Digimon extends React.Component {
  render() {
    return (
      <div className="digimon">
        <h3 className="digimonTitle">{this.props.digimon.prettyName}</h3>
        <img id="currentDigimon" src={`/images/digimon/${this.props.digimon.name}.jpg`} />
        <p>{this.props.digimon.type}</p>
      </div>
    );
  }
}

Digimon.propTypes = {
  digimon: PropTypes.object
};
