import React from 'react';
import Digimon from './digimon.jsx';

export default class DigimonContainer extends React.Component {
  render() {
    return (
      <div className="digimonContainer">
        <Digimon digimon={this.props.digimon} />
      </div>
    );
  }
}
