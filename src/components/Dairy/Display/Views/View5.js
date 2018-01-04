import React, { Component } from 'react';

import TVParlor from '../../../../assets/Photos/Parlor/Tv.png';
import Heat from '../../../../assets/New/HeattimeInterface.jpg';
import SCRPhone from '../../../../assets/Photos/SCR/phone.png';

export default class View5 extends Component {
  render() {
    return (
      <div className="moreinfo-display">
        <h4 className="moreinfo-display-header">SCR HEATIME®</h4>
        <p className="view2-text">With the combination of activity and rumination monitoring, the system provides real-time and actionable insights about individual cows, groups, and the whole herd without having to disturb them. The system alerts farmers which cows need to be checked based on heat and health reports. Cows that do not show up on those reports are left alone to eat and rest. The less disruption of their routines, the more comfortable they will be and the more profitable milk they will make.</p>
        <div className="list-flex">
          <div className="list-left">
            <h5 className="monitor-header2">MONITORS AND IDENTIFIES ALL ASPECTS OF YOUR HERD THROUGH THE USE OF EAR TAGS OR COLLAR</h5>
            <li className="moreinfo-list">Heat Detection</li>
            <li className="moreinfo-list">
              Health</li>
            <li className="moreinfo-list">
              Rumination</li>
            <li className="moreinfo-list">Heat Stress</li>
          </div>
          <div className="tv-box">
            <img className="tv-screen-frame" src={TVParlor} alt="slide show" height="275px" />
            <img className="tv-display" src={Heat} alt="SCR Heat Display" height="250px" />
          </div>
        </div>
        <div className="phone-container2">
          <img className="iphone" src={SCRPhone} alt="iphone display" height="279px" />
          <div className="iphone-text-box">
            <h5 className="iphone-header">HEALTHY COW 24 APP</h5>
            <p className="iphone-text2">The SCR® cloud-based  service supports Heatime users with mobile and web applications. It enables  seamless connectivity with third-party systems and data backup capabilities.</p>
          </div>
        </div>
      </div>
    )
  }
}


