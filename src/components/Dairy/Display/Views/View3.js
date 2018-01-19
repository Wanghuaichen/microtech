import React, { Component } from 'react';

import TVParlor from '../../../../assets/Photos/Mixer/TvScreen.png';
import iPhone from '../../../../assets/Photos/Mixer/PhoneScreen.png';


export default class View3 extends Component {
    render() {
        return (
            <div className="moreinfo-display">
                <h4 className="moreinfo-display-header">  PRO-CONTROL<sup>&reg;</sup> MIXER</h4>
                <p className="view2-text">Pro-Control<sup>&reg;</sup> Mixer is a weight based blending system that allows flexible and accurate on-site blending and delivery of udder hygiene solutions. Remote access to real-time data and automatically generated reports offers critical information that can provide you operational efficiencies, more control and increased profitability. </p>
                <div className="list-flex">
                    <div className="list-left">
                        <li className="moreinfo-list">	Allows for flexibility to utilize endless product mixing capabilities, can utilize multiple concentrates</li>
                        <li className="moreinfo-list">
                            Ensures accurate blending and delivery helping you maintain compliance</li>
                        <li className="moreinfo-list">
                            Ensures correct formulation and usage of udder hygiene products</li>
                        <li className="moreinfo-list"> On-site mixing capabilities reduce costs of transportation, storage and product waste due to the degree of accuracy</li>
                    </div>
                    <img className="tv-screen-frame" src={TVParlor} alt="slide show" height="275px" />
                </div>
                <div className="phone-container3">
                    <img className="iphone" src={iPhone} alt="iphone display" height="279px" />
                    <div className="iphone-text-box">
                        <h5 className="iphone-header">24/7 REAL-TIME MONITORING & ALERT</h5>
                        <p className="iphone-text">Access to real-time data from any mobile device allows you the flexibility to remotely adjust dip types and formulations based on current conditions from anywhere.</p>
                        <p className="iphone-text">When alarm thresholds are met an alert is sent to you so that you are able to make adjustments in real-time.</p>
                        <p className="iphone-text">Our technical service team also receives notifications of the alert to respond and ensure your business is running optimally and efficiently at all times.</p>
                    </div>
                </div>
            </div>
        )
    }
}

