import React from 'react';
import {render} from 'react-dom';
import DigimonImage from './digimonImage.jsx';
import DigimonInfo from './digimonInfo.jsx';

export default class Digimon extends React.Component{
  render(){
    return(
      <div className="digimon">
        <DigimonImage />
        <DigimonInfo />
      </div>
    );
  }
}
