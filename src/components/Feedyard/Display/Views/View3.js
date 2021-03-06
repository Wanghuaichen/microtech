import React, { Component } from 'react';
import Carousel from 'nuka-carousel'


import Infographic from '../../../../assets/Photos/Cubex/Cubex_Graphic.jpg';
import Slide1 from '../../../../assets/Photos/Cubex/Slide1.jpg';
import Slide2 from '../../../../assets/Photos/Cubex/Slide2.jpg';
import Slide3 from '../../../../assets/Photos/Cubex/Slide3.jpg';
import Slide4 from '../../../../assets/Photos/Cubex/Slide4.jpg';
import Slide5 from '../../../../assets/Photos/Cubex/Slide5.jpg';
import Slide6 from '../../../../assets/Photos/Cubex/Slide6.jpg';
import Slide7 from '../../../../assets/Photos/Cubex/Slide7.jpg';
import Slide8 from '../../../../assets/Photos/Cubex/Slide8.jpg';
import Slide9 from '../../../../assets/Photos/Cubex/Slide9.jpg';
import Slide10 from '../../../../assets/Photos/Cubex/Slide10.jpg';

export default class View2 extends Component {
  render() {
    return (
      <div className="moreinfo-display">
        <h4 className="moreinfo-display-header">CUBEX<sup>&reg;</sup> QBUD - HEALTH INVENTORY MANAGEMENT</h4>
        <li className="moreinfo-list">Digital, wireless inventory system for animal health products</li>
        <li className="moreinfo-list">
          Simple to use and more secure</li>
        <li className="moreinfo-list">Automates reordering and receiving</li>
        <li className="moreinfo-list">Reduces inventory on hand and eliminates emergency stock-outs</li>
        <div className="img-view2-box">
          <img className="steps" src={Infographic} alt="infographic" width="500px" />

          
          <Carousel width={700} decorators={Carousel.getDefaultProps().decorators.slice(0, 2)} autoplay={true} wrapAround={true} speed={600} >
            <img className="slideshow-box" src={Slide1} alt="slide show" onLoad={() => {window.dispatchEvent(new Event('resize'));}}  />
            <img className="slideshow-box" src={Slide2} alt="slide show" onLoad={() => {window.dispatchEvent(new Event('resize'));}}  />
            <img className="slideshow-box" src={Slide3} alt="slide show" onLoad={() => {window.dispatchEvent(new Event('resize'));}}  />
            <img className="slideshow-box" src={Slide4} alt="slide show" onLoad={() => {window.dispatchEvent(new Event('resize'));}}  />
            <img className="slideshow-box" src={Slide5} alt="slide show" onLoad={() => {window.dispatchEvent(new Event('resize'));}}  />
            <img className="slideshow-box" src={Slide6} alt="slide show" onLoad={() => {window.dispatchEvent(new Event('resize'));}}  />
            <img className="slideshow-box" src={Slide7} alt="slide show" onLoad={() => {window.dispatchEvent(new Event('resize'));}}  />
            <img className="slideshow-box" src={Slide8} alt="slide show" onLoad={() => {window.dispatchEvent(new Event('resize'));}}  />
            <img className="slideshow-box" src={Slide9} alt="slide show" onLoad={() => {window.dispatchEvent(new Event('resize'));}}  />
            <img className="slideshow-box" src={Slide10} alt="slide show" onLoad={() => {window.dispatchEvent(new Event('resize'));}}  />
          </Carousel>



        </div>
        <div className="click-bottom-box">
          <div className="click-left-text">
            <h6 className="click-left-header">ONLINE ORDERING</h6>
            <p className="click-left-para">Login to reorder or to set up an online account</p>
          </div>
          <a href="https://store.mwiah.com/sign-in?page=%2F" rel="noopener noreferrer" target="_blank">
            <div className="click-me-btn"><h5>CLICK HERE</h5></div></a>
        </div>
      </div>

    )
  }
}
