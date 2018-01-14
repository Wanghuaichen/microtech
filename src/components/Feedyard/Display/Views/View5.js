import React, { Component } from 'react';

import Doctor from '../../../../assets/Pics/Whisper.jpg';
import ColorPallete from '../../../../assets/Pics/WhisperScale.jpg';

export default class View5 extends Component {
  render() {
    return (
      <div className="moreinfo-display">
        <h4 className="moreinfo-display-header"> Whisper® Veterinarian Stethoscope System by merck animal health</h4>
        <div className="list-flex">
          <div className="list-left">
            <li className="moreinfo-list">Simple, quick, non-invasive, precision instrument system comprised of an electronic stethoscope and software used to detect lung health</li>
            <li className="moreinfo-list">
            Digital stethoscope with built-in capability to record lung sound and converts it into an objective score</li>
            <li className="moreinfo-list">
            Robust wireless transmission of lung score to computer</li>
            <li className="moreinfo-list">Specialized integrated software which analyzes sounds and provides a platform which supports diagnosis and treatment</li>
            <p className="view2-text">Measures 5 different levels of lung health and provides for a visual assessment that is clear and objective:</p>
            <img className="color-pallete" src={ColorPallete} alt="pain scale" width="700px"/>
            <img className="stethoscope" src={Doctor} alt="doctor" width="700px" />
          </div>
        </div>
      </div>
    )
  }
}


