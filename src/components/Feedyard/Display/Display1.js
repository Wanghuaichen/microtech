import React, { Component } from 'react';
import View1 from './Views/View1';
import View3 from './Views/View3';
import View5 from './Views/View5';

export default class Display0 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 1,
            show: 1
        }
        this.handleView1 = this.handleView1.bind(this);
        this.handleView3 = this.handleView3.bind(this);
        this.handleView5 = this.handleView5.bind(this);
    };

    handleView1 = () => {
        this.setState({ view: 1, show: 1 })
    }

    handleView3 = () => {
        this.setState({ view: 3, show: 3 })
    }

    handleView5 = () => {
        this.setState({ view: 5, show: 5 })
    }


    render() {
        return (
            <section className="moreinfo-full">
              <section className="moreinfo-side">
                <div className="nav-side-box">
                  <div onClick={() => this.handleView1()} className="nav-side-btn">
                    <div className={this.state.view === 0 || this.state.view === 1 ? "active-side" : null}></div>
                    <h6 className="nav-side-label">DRUG TRAC® ANIMAL HEALTH</h6>
                  </div>
  
                  <div onClick={() => this.handleView3()} className="nav-side-btn">
                    <div className={this.state.view === 2 || this.state.view === 3 ? "active-side" : null}></div>
                    <h6 className="nav-side-label">CUBEX DIGITAL</h6>
                    <h6 className="nav-side-label">INVENTORY MANAGEMENT</h6>
                  </div>
  
                  <div onClick={() => this.handleView5()} className="nav-side-btn">
                    <div className={this.state.view === 4 || this.state.view === 5 ? "active-side" : null}></div>
                    <h6 className="nav-side-label">DIAGNOSTIC</h6>
                    <h6 className="nav-side-label">TECHNOLOGIES</h6>
                  </div>
  
                </div>
              </section>
  
              <section className="moreinfo-right">
  
              {this.state.view === 1 && <View1 />}
              {this.state.view === 3 && <View3 />}
              {this.state.view === 5 && <View5 />}
  
              </section>
            </section>
        )
    }
}
