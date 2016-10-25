import React from 'react';
import {render} from 'react-dom';

export default class DigimonImage extends React.Component{
  render(){
    return(
      <img id="currentDigimon" src="dist/images/digimon/guardromon.jpg" />
    );
  }
}
