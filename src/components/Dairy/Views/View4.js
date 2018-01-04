import React, { Component } from 'react';

import TVParlor from '../../../assets/Photos/Parlor/Tv.png';
import ParlorPhone from '../../../assets/Photos/Parlor/Phone.png';

export default class View4 extends Component {
    render() {
        return (
            <div className="moreinfo-display">
                <h4 className="moreinfo-display-header">  PRO-CONTROL® PARLOR</h4>
                <p className="view2-text">Pro-Control® Parlor is a revolutionary system offering milk quality solutions to ensure consistency of quality CIP, VIP and milking equipment processes through complete automation.</p>
                <div className="list-flex">
                    <div className="list-left">
                        <li className="moreinfo-list">	Milking equipment process vacuums</li>
                        <li className="moreinfo-list">
                        Temperature</li>
                        <li className="moreinfo-list">
                        Water Levels</li>
                        <li className="moreinfo-list">Filter Pressure</li>
                        <li className="moreinfo-list">Conductivity</li>
                    </div>
                    <img className="tv-screen" src={TVParlor} alt="slide show" height="275px" />
                </div>
                <div className="phone-container">
                  <img className="iphone" src={ParlorPhone} alt="iphone display" height="279px"/>
                  <div className="iphone-text-box">
                  <h5 className="iphone-header">24/7 REAL-TIME MONITORING & ALERT</h5>
                  <p className="iphone-text">Remote control access to real-time reporting that monitors CIP and milking processes delivering you accurate data in order to gain more control over and manage your operation from anywhere. </p>
                  <p className="iphone-text">When alarm thresholds are met an alert is sent to you so that you are able to make adjustments in real-time. </p>
                  <p className="iphone-text">Our technical service team also receives notification of the alert to respond and ensure your business is running optimally and efficiently at all times.</p>
                  </div>
                </div>
            </div>
        )
    }
}

