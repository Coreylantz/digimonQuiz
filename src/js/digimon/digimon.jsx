import React from 'react';
import DigimonImage from './digimon-image.jsx';
import DigimonInfo from './digimon-info.jsx';
import DigimonTitle from './digimon-title.jsx';

export default class Digimon extends React.Component {
  render() {
    return (
      <div className="digimon">
        <DigimonTitle />
        <DigimonImage />
        <DigimonInfo />
      </div>
    );
  }
}
