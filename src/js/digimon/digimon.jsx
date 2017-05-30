import React from 'react';
import DigimonImage from './digimon-image.jsx';
import DigimonInfo from './digimon-info.jsx';
import DigimonTitle from './digimon-title.jsx';

export default class Digimon extends React.Component {
  render() {
    return (
      <div className="digimon">
        <h3 className="digimonTitle">Digi-Egg</h3>
        <img id="currentDigimon" src={`dist/images/digimon/${this.props.digimon.name}.jpg`} />
        <p>Digimon info goes here</p>
      </div>
    );
  }
}
