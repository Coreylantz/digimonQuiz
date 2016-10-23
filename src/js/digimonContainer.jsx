import React from 'react';
import {render} from 'react-dom';
import Digimon from './digimon.jsx';

export default class DigimonContainer extends React.Component {
  render(){
    return(
      <div className="digimonContainer">
        <Digimon />
      </div>
    );
  }
} 
