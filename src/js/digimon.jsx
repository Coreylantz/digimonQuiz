import React from 'react';
import {render} from 'react-dom';
import DigimonImage from './digimonImage.jsx';
import DigimonInfo from './digimonInfo.jsx';
import DigimonTitle from './digimonTitle.jsx';

export default class Digimon extends React.Component{
  render(){
    return(
      <div className="digimon">
        <DigimonTitle />
        <DigimonImage />
        <DigimonInfo />
      </div>
    );
  }
}
