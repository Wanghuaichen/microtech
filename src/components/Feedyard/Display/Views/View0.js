import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

import Slide4 from '../../../../assets/Photos/MicroWeigh/Slide4.jpg';
import Slide5 from '../../../../assets/Photos/MicroWeigh/Slide5.jpg';
import Slide6 from '../../../../assets/Photos/MicroWeigh/Slide6.jpg';


export default class View0 extends Component {
    render() {
        return (
            <div className="moreinfo-display">
                <h4 className="moreinfo-display-header">MICRO WEIGH<sup>&reg;</sup>SYSTEM MICRO INGREDIENT DELIVERY SYSTEM</h4>
                <li className="moreinfo-list">
                Accurately measure and deliver micro feed ingredients, ensuring consistency in every batch of feed</li>
                <li className="moreinfo-list">
                Flexibility to customize rations to the nutritionist’s specifications</li>
                <li className="moreinfo-list">
                Access accurate reports to ensure accountability and efficient inventory management</li>
                <li className="moreinfo-list2">
                Minimize shrink through a closed micro feed ingredient delivery system</li>

                <div className="slideshow-display">
                <Carousel className="slider-carousel" decorators={Carousel.getDefaultProps().decorators.slice(0, 2)} autoplay={true} wrapAround={true} speed={600} >
                    <img src={Slide6} alt="slide show" onLoad={() => {window.dispatchEvent(new Event('resize'));}}  />
                    <img src={Slide5} alt="slide show" onLoad={() => {window.dispatchEvent(new Event('resize'));}}  />
                    <img src={Slide4} alt="slide show" onLoad={() => {window.dispatchEvent(new Event('resize'));}}  />
                </Carousel >
                </div>

                <div className="slide-nav"></div>
            </div>
        )
    }
}
