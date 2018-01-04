import React, { Component } from 'react';
import View0 from './Views/View0';
import View1 from './Views/View1';
import View2 from './Views/View2';
import View3 from './Views/View3';
import View4 from './Views/View4';
import View5 from './Views/View5';


export default class DairyInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 0,
        }
        this.handleView0 = this.handleView0.bind(this);
        this.handleView1 = this.handleView1.bind(this);
        this.handleView2 = this.handleView2.bind(this);
        this.handleView3 = this.handleView3.bind(this);
        this.handleView4 = this.handleView4.bind(this);
        this.handleView5 = this.handleView5.bind(this);
    };

    handleView0 = () => {
        this.setState({ view: 0 })
    }

    handleView1 = () => {
        this.setState({ view: 1 })
    }

    handleView2 = () => {
        this.setState({ view: 2 })
    }

    handleView3 = () => {
        this.setState({ view: 3 })
    }

    handleView4 = () => {
        this.setState({ view: 4 })
    }

    handleView5 = () => {
        this.setState({ view: 5 })
    }





    render() {
        return (
            <main className="moreinfo-container">

                <section className="moreinfo-full">
                    <section className="moreinfo-side">
                        <div className="nav-side-box">
                            <div onClick={() => this.handleView0()} className="nav-side-btn">
                                <div className={this.state.view === 0 || this.state.view === 1 ? "active-side" : null}></div>
                                <h6 className="nav-side-label">INTEGRATED FEED</h6>
                                <h6 className="nav-side-label">MANAGEMENT SOLUTIONS</h6>
                            </div>
                            <div onClick={() => this.handleView2()} className="nav-side-btn">
                                <div className={this.state.view === 2 ? "active-side" : null}></div>
                                <h6 className="nav-side-label">ANIMAL HEALTH</h6>
                                <h6 className="nav-side-label">INVENTORY SOLUTIONS</h6>
                            </div>
                            <div onClick={() => this.handleView3()} className="nav-side-btn">
                                <div className={this.state.view === 3 ? "active-side" : null}></div>
                                <h6 className="nav-side-label">MILK QUALITY</h6>
                                <h6 className="nav-side-label">SOLUTIONS</h6>
                            </div>
                            <div onClick={() => this.handleView5()} className="nav-side-btn">
                                <div className={this.state.view === 5 ? "active-side" : null}></div>
                                <h6 className="nav-side-label">COW INTELLIGENCE</h6>
                            </div>
                        </div>
                    </section>



                    <section className="moreinfo-right">
                        <div className="dairy-top-nav">
                            <div onClick={() => this.handleView0()} className={this.state.view === 0 ? "dairyactive" : "dairy-btn"} >
                                <h6 className="dairy-btn-text">MICRO WEIGH SYSTEM®</h6></div>
                            <div onClick={() => this.handleView1()} className={this.state.view === 1 ? "dairyactive" : "dairy-btn"}  >
                                <h6 className="dairy-btn-text">Pro-Control® Plus Batching System</h6>
                            </div>
                        </div>

                        {this.state.view === 0 && <View0 />}
                        {this.state.view === 1 && <View1 />}
                        {this.state.view === 2 && <View2 />}
                        {this.state.view === 3 && <View3 />}
                        {this.state.view === 4 && <View4 />}
                        {this.state.view === 5 && <View5 />}

                    </section>




                </section>
            </main >
        )
    }
}

