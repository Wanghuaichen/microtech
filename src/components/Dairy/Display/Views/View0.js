import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

import Slide1 from '../../../../assets/Photos/MicroWeigh/Slide1.jpg';
import Slide2 from '../../../../assets/Photos/MicroWeigh/Slide2.jpg';
import Slide3 from '../../../../assets/Photos/MicroWeigh/Slide3.jpg';
import Slide4 from '../../../../assets/Photos/MicroWeigh/Slide4.jpg';



export default class View0 extends Component {
    render() {
        return (
            <div className="moreinfo-display">
                <h4 className="moreinfo-display-header"> MICRO WEIGH<sup>&reg;</sup> SYSTEM MICRO INGREDIENT DELIVERY SYSTEM</h4>
                <h6>FLEXIBLE, CUSTOMIZED & CONSISTENT DIETS</h6>
                <li className="moreinfo-list">
                    Accurately measure and deliver micro feed ingredients, ensuring consistency in every batch of feed</li>
                <li className="moreinfo-list">
                    Flexibility to customize diets to the nutritionist’s specifications</li>
                <li className="moreinfo-list">
                    Access accurate reports to ensure accountability efficient inventory management</li>
                <li className="moreinfo-list2">
                    Minimize shrink through a closed micro feed ingredient delivery system</li>

                <div className="slideshow-display">
                    <Carousel decorators={Carousel.getDefaultProps().decorators.slice(0, 2)} autoplay={true} wrapAround={true} speed={600} >
                        <img src={Slide1} alt="slide show" onLoad={() => { window.dispatchEvent(new Event('resize')); }} />
                        <img src={Slide2} alt="slide show" onLoad={() => { window.dispatchEvent(new Event('resize')); }} />
                        <img src={Slide3} alt="slide show" onLoad={() => { window.dispatchEvent(new Event('resize')); }} />
                        <img src={Slide4} alt="slide show" onLoad={() => { window.dispatchEvent(new Event('resize')); }} />
                    </Carousel >
                </div>


                {/* <div className="slideshow-display-mobile">
                    <Carousel width={200} decorators={Carousel.getDefaultProps().decorators.slice(0, 2)} autoplay={true} wrapAround={true} speed={600} >
                        <img src={Slide1} alt="slide show" width="200px" onLoad={() => { window.dispatchEvent(new Event('resize')); }} />
                        <img src={Slide2} alt="slide show" width="200px" onLoad={() => { window.dispatchEvent(new Event('resize')); }} />
                        <img src={Slide3} alt="slide show" width="200px" onLoad={() => { window.dispatchEvent(new Event('resize')); }} />
                        <img src={Slide4} alt="slide show" width="200px" onLoad={() => { window.dispatchEvent(new Event('resize')); }} />
                    </Carousel >
                </div> */}


            </div>
        )
    }
}
