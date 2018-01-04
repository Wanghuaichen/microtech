import React, { Component } from 'react';
import Slide2 from '../../../../assets/Photos/MicroWeigh/Slide2.png';

export default class View0 extends Component {
    render() {
        return (            
            <div className="moreinfo-display">
                <h4 className="moreinfo-display-header"> MICRO WEIGH® SYSTEM MICRO INGREDIENT DELIVERY SYSTEM</h4>
                <h6>FLEXIBLE, CUSTOMIZED & CONSISTENT DIETS</h6>
                <li className="moreinfo-list">
                    Accurately measure and deliver micro feed ingredients, ensuring consistency in every batch of feed</li>
                <li className="moreinfo-list">
                    Flexibility to customize diets to the nutritionist’s specifications</li>
                <li className="moreinfo-list">
                    Access accurate reports to ensure accountability efficient inventory management</li>
                <li className="moreinfo-list">
                    Minimize shrink through a closed micro feed ingredient delivery system</li>
                <img className="tv-batcher" src={Slide2} alt="slide show" width="673px" />
            </div>
        )
    }
}
