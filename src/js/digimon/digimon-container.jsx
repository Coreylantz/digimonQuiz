import React from 'react';
import PropTypes from 'prop-types';
import Digimon from './digimon.jsx';

export default class DigimonContainer extends React.Component {
  render() {
    return (
      <div className={`digimonContainer ${this.props.mega ? 'megaStage' : ''}`}>
        <Digimon digimon={this.props.digimon} />
      </div>
    );
  }
}

DigimonContainer.propTypes = {
  digimon: PropTypes.object,
  mega: PropTypes.bool
};
