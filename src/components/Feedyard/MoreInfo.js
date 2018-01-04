import React, { Component } from 'react';
import TVbatcher from '../../assets/Pics/Pro-Control-Plus.png';

export default class MoreInfo extends Component {
    render() {
        return (
            <main className="moreinfo-container">
                <section className="moreinfo-top">
                    <div className="moreinfo-top-btns">
                        <div className="moreinfo-top-nav">
                            <h4 className="moreinfo-top-nav-header">Precision Feed</h4>
                            <h4 className="moreinfo-top-nav-header">Management Solutions</h4>
                        </div>
                        <div className="moreinfo-top-nav">
                            <h4 className="moreinfo-top-nav-header">Animal</h4>
                            <h4 className="moreinfo-top-nav-header">Health Solutions</h4>
                        </div>
                    </div>
                    <div className="moreinfo-top-textbox">
                        <p className="moreinfo-top-text">Our precision feed management solutions help optimize animal performance potential. We ensure consistency, accuracy, ration flexibility and verification, real-time data and accountability. Each system is custom configured to fit your feed processes allowing you more control over inventory and shrink.</p>
                    </div>
                </section>
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
                        <div className="moreinfo-display">
                            <h4 className="moreinfo-display-header"> Pro-Control Plus® Feed Batching System</h4>
                            <li className="moreinfo-list">
                                Manages individual macro ingredients in the production of rations.</li>
                            <li className="moreinfo-list">
                                Improves the accuracy and speed of ration composition</li>
                            <li className="moreinfo-list">
                                Simple user interface, intuitive and multi-lingual</li>
                            <img className="tv-batcher" src={TVbatcher} alt="Pro-Control-Plus" width="673px" />
                        </div>
                    </section>
                    
                </section>
            </main>
        )
    }
}
