import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

// import Slide1 from '../../../../assets/Photos/MicroWeigh/Slide1.png';
// import Slide2 from '../../../../assets/Photos/MicroWeigh/Slide2.png';
// import Slide3 from '../../../../assets/Photos/MicroWeigh/Slide3.png';
import Slide4 from '../../../../assets/Photos/MicroWeigh/Slide4.png';
import Slide5 from '../../../../assets/Photos/MicroWeigh/Slide5.png';
import Slide6 from '../../../../assets/Photos/MicroWeigh/Slide6.png';


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

                <Carousel width={700} decorators={Carousel.getDefaultProps().decorators.slice(0, 2)} autoplay={true} wrapAround={true} speed={600} >
                     {/* <img src={Slide1} alt="slide show" width="673px" onLoad={() => {window.dispatchEvent(new Event('resize'));}}  />
                    <img src={Slide2} alt="slide show" width="673px" onLoad={() => {window.dispatchEvent(new Event('resize'));}}  />
                    <img src={Slide3} alt="slide show" width="673px" onLoad={() => {window.dispatchEvent(new Event('resize'));}}  /> */}
                    
                    <img src={Slide6} alt="slide show" width="673px" onLoad={() => {window.dispatchEvent(new Event('resize'));}}  />
                    <img src={Slide5} alt="slide show" width="673px" onLoad={() => {window.dispatchEvent(new Event('resize'));}}  />
                    <img src={Slide4} alt="slide show" width="673px" onLoad={() => {window.dispatchEvent(new Event('resize'));}}  />
                </Carousel >
                <div className="slide-nav"></div>
            </div>
        )
    }
}
