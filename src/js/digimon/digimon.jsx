import React from 'react';
import DigimonImage from './digimon-image.jsx';
import DigimonInfo from './digimon-info.jsx';
import DigimonTitle from './digimon-title.jsx';

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
