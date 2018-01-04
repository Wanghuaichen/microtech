import React, { Component } from 'react';
import ToggleDisplay from 'react-toggle-display';

import Display1 from './Display/Display1';
import Display2 from './Display/Display2';
import Display3 from './Display/Display3';
import Display4 from './Display/Display4';


export default class DairyInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: 0
        }
        this.showDisplay = this.showDisplay.bind(this);
    };


    showDisplay() {
        this.setState({
            show: !this.state.show
        });
    }


    render() {
        return (
            <main className="moreinfo-container">

                <section className="moreinfo-full">
                    <section className="moreinfo-side">
                        <div className="nav-side-box">
                        <ToggleDisplay if={this.state.show} tag="display1">
                        <div onClick={() => this.showDisplay()} className="nav-side-btn">
                                <div className={this.state.view === 0 || this.state.view === 1 ? "active-side" : null}></div>
                                <h6 className="nav-side-label">INTEGRATED FEED</h6>
                                <h6 className="nav-side-label">MANAGEMENT SOLUTIONS</h6>
                            </div>
                            </ToggleDisplay>


                            <ToggleDisplay if={this.state.show} tag="display2">
                            <div onClick={() => this.showDisplay()} className="nav-side-btn">
                                <div className={this.state.view === 2 ? "active-side" : null}></div>
                                <h6 className="nav-side-label">ANIMAL HEALTH</h6>
                                <h6 className="nav-side-label">INVENTORY SOLUTIONS</h6>
                            </div>
                            </ToggleDisplay>


                            <ToggleDisplay if={this.state.show} tag="display3">
                            <div onClick={() => this.showDisplay()} className="nav-side-btn">
                                <div className={this.state.view === 3 || this.state.view === 4 ? "active-side" : null}></div>
                                <h6 className="nav-side-label">MILK QUALITY</h6>
                                <h6 className="nav-side-label">SOLUTIONS</h6>
                            </div>
                            </ToggleDisplay>


                            <ToggleDisplay if={this.state.show} tag="display4">
                            <div onClick={() => this.showDisplay()} className="nav-side-btn">
                                <div className={this.state.view === 5 ? "active-side" : null}></div>
                                <h6 className="nav-side-label">COW INTELLIGENCE</h6>
                            </div>
                            </ToggleDisplay>

                        </div>
                    </section>


                    <Display1 />
                    {/* <Display2 /> */}
                    {/* <Display3 /> */}
                    {/* <Display4 /> */}


                    </section>

            </main >
        )
    }
}

