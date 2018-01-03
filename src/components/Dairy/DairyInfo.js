import React, { Component } from 'react';
import Slide2 from '../../assets/Photos/MicroWeigh/Slide2.png';

export default class DairyInfo extends Component {
    render() {
        return (
            <main className="moreinfo-container">

                <section className="moreinfo-full">
                    <section className="moreinfo-side">
                        <div className="nav-side-box">
                            <div className="nav-side-btn">
                                <h6 className="nav-side-label">MICRO WEIGH® SYSTEM</h6>
                            </div>
                            <div className="nav-side-btn">
                                <h6 className="nav-side-label"> Pro-Control Plus® Feed</h6>
                                <h6 className="nav-side-label"> Batching System</h6>
                            </div>
                            <div className="nav-side-btn">
                                <h6 className="nav-side-label">READ-N-FEED®</h6>
                                <h6 className="nav-side-label">BUNK READING SYSTEM</h6>
                            </div>
                            <div className="nav-side-btn">
                                <h6 className="nav-side-label">READ-N-FEED®</h6>
                                <h6 className="nav-side-label">GPS FEED TRUCK SYSTEM</h6>
                            </div>
                        </div>
                    </section>



                    <section className="moreinfo-right">
                        <div className="dairy-top-nav">
                            <div className="dairy-btn dairyactive">
                                <h6 className="dairy-btn-text">MICRO WEIGH SYSTEM®</h6></div>
                            <div className="dairy-btn">
                                <h6 className="dairy-btn-text">Pro-Control® Plus Batching System</h6>
                            </div>
                        </div>
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
                    </section>
                </section>
            </main >
        )
    }
}
