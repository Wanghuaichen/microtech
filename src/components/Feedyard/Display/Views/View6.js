import React, { Component } from 'react';

import GPS from '../../../../assets/Pics/Read-N-Feed-GPS.jpg';


export default class View6 extends Component {
  render() {
    return (
      <div className="moreinfo-display">
        <h4 className="moreinfo-display-header">READ-N-FEED<sup>&reg;</sup> GPS FEED TRUCK SYSTEM</h4>
        <div className="list-flex">
          <div className="list-left">
            <li className="moreinfo-list">Right Pen</li>
            <li className="moreinfo-list">
            Right Ration</li>
            <li className="moreinfo-list">
            Right Time</li>
            <img className="gps" src={GPS} alt="GPS"  />
            </div> 
        </div>
      </div>
    )
  }
}


