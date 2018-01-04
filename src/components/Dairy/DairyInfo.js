import React, { Component } from 'react';

import Display0 from './Display/Display0';
import Display1 from './Display/Display1';
import Display2 from './Display/Display2';
import Display3 from './Display/Display3';


export default class DairyInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: 0
        }
        this.showDisplay0 = this.showDisplay0.bind(this);
        this.showDisplay1 = this.showDisplay1.bind(this);
        this.showDisplay2 = this.showDisplay2.bind(this);
        this.showDisplay3 = this.showDisplay3.bind(this);
    };

    showDisplay0() {
        this.setState({ show: 0 })
    }

    showDisplay1() {
        this.setState({ show: 1 })
    }

    showDisplay2() {
        this.setState({ show: 2 })
    }

    showDisplay3() {
        this.setState({ show: 3 })
    }


    render() {
        return (
            <main className="moreinfo-container">

                <section className="moreinfo-full">
                    <section className="moreinfo-side">
                        <div className="nav-side-box">
                        <div onClick={() => this.showDisplay0()} className="nav-side-btn">
                                <div className={this.state.view === 0 || this.state.view === 1 ? "active-side" : null}></div>
                                <h6 className="nav-side-label">INTEGRATED FEED</h6>
                                <h6 className="nav-side-label">MANAGEMENT SOLUTIONS</h6>
                            </div>


                            <div onClick={() => this.showDisplay1()} className="nav-side-btn">
                                <div className={this.state.view === 2 ? "active-side" : null}></div>
                                <h6 className="nav-side-label">ANIMAL HEALTH</h6>
                                <h6 className="nav-side-label">INVENTORY SOLUTIONS</h6>
                            </div>


                            <div onClick={() => this.showDisplay2()} className="nav-side-btn">
                                <div className={this.state.view === 3 || this.state.view === 4 ? "active-side" : null}></div>
                                <h6 className="nav-side-label">MILK QUALITY</h6>
                                <h6 className="nav-side-label">SOLUTIONS</h6>
                            </div>


                            <div onClick={() => this.showDisplay3()} className="nav-side-btn">
                                <div className={this.state.view === 5 ? "active-side" : null}></div>
                                <h6 className="nav-side-label">COW INTELLIGENCE</h6>
                            </div>

                        </div>
                    </section>

                    <section className="moreinfo-right">

                    {this.state.show === 0 && <Display0 />}
                    {this.state.show === 1 && <Display1 />}
                    {this.state.show === 2 && <Display2 />}
                    {this.state.show === 3 && <Display3 />}
                    
                    </section>

                    </section>

            </main >
        )
    }
}

//  // {this.state.show === 0 && <Display0 />}
                    // {this.state.show === 1 && <Display1 />}
                    // {this.state.show === 2 && <Display2 />}
                    // {this.state.show === 3 && <Display3 />}
