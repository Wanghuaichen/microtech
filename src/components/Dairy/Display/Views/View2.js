import React, { Component } from 'react';
import Infographic from '../../../../assets/Photos/Cubex/Cubex_Graphic.jpg';
import Supplies from '../../../../assets/Photos/Cubex/CUBEX_1st_image.jpeg';

export default class View2 extends Component {
  render() {
    return (
      <div className="moreinfo-display">
        <h4 className="moreinfo-display-header">CUBEX® QBUD - HEALTH INVENTORY MANAGEMENT</h4>
        <li className="moreinfo-list">Digital, wireless inventory system for animal health products</li>
        <li className="moreinfo-list">
          Simple to use and more secure</li>
        <li className="moreinfo-list">Automates reordering and receiving</li>
        <li className="moreinfo-list">Reduces inventory on hand and eliminates emergency stock-outs</li>
        <div className="img-view2-box">
          <img className="tv-screen" src={Infographic} alt="infographic" width="400px" />
          <img className="slideshow-box" src={Supplies} alt="slide show" width="400px" />
        </div>
        <div className="click-bottom-box">
          <div className="click-left-text">
            <h6 className="click-left-header">ONLINE ORDERING</h6>
            <p className="click-left-para">Login to reorder or to set up an online account</p>
          </div>
          <div className="click-me-btn"><h5>CLICK ME</h5></div>
        </div>
      </div>

    )
  }
}
