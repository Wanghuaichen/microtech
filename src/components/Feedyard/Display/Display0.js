import React, { Component } from 'react';
import View0 from './Views/View0';
import View2 from './Views/View2';
import View4 from './Views/View4';
import View6 from './Views/View6';

export default class Display0 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 0,
            show: 0
        }
        this.handleView0 = this.handleView0.bind(this);
        this.handleView2 = this.handleView2.bind(this);
        this.handleView4 = this.handleView4.bind(this);
        this.handleView6 = this.handleView6.bind(this);

    };

    handleView0 = () => {
        this.setState({ view: 0, show: 0 })
    }

    handleView2 = () => {
        this.setState({ view: 2, show: 2 })
    }

    handleView4 = () => {
        this.setState({ view: 4, show: 4 })
    }

    handleView6 = () => {
        this.setState({ view: 6, show: 6 })
    }

    render() {
        return (

            <section className="moreinfo-full">
              <section className="moreinfo-side">
                <div className="nav-side-box">
                  <div onClick={() => this.handleView0()} className="nav-side-btn">
                    <div className={this.state.view === 0 || this.state.view === 1 ? "active-side" : null}></div>
                    <h6 className="nav-side-label">MICRO WEIGH® SYSTEM</h6>
                  </div>
  
                  <div onClick={() => this.handleView2()} className="nav-side-btn">
                    <div className={this.state.view === 2 || this.state.view === 3 ? "active-side" : null}></div>
                    <h6 className="nav-side-label">PRO-CONTROL PLUS® FEED</h6>
                    <h6 className="nav-side-label">BATCHING SYSTEM</h6>
                  </div>
  
                  <div onClick={() => this.handleView4()} className="nav-side-btn">
                    <div className={this.state.view === 4 || this.state.view === 5 ? "active-side" : null}></div>
                    <h6 className="nav-side-label">READ-N-FEED®</h6>
                    <h6 className="nav-side-label">BUNK READING SYSTEM</h6>
                  </div>
  
                  <div onClick={() => this.handleView6()} className="nav-side-btn">
                    <div className={this.state.view === 6 ? "active-side" : null}></div>
                    <h6 className="nav-side-label">READ-N-FEED®</h6>
                    <h6 className="nav-side-label">GPS FEED TRUCK SYSTEM</h6>
                  </div>
  
                </div>
              </section>
  
              <section className="moreinfo-right">
  
                {this.state.show === 0 && <View0 />}
                {this.state.show === 2 && <View2 />}
                {this.state.show === 4 && <View4 />}
                {this.state.show === 6 && <View6 />}
  
              </section>
            </section>
        )
    }
}
