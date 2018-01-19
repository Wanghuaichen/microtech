import React, { Component } from 'react';
import View0 from './Views/View0';
import View1 from './Views/View1';

export default class Display0 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 0,
        }
        this.handleView0 = this.handleView0.bind(this);
        this.handleView1 = this.handleView1.bind(this);
    };

    handleView0 = () => {
        this.setState({ view: 0 })
    }

    handleView1 = () => {
        this.setState({ view: 1 })
    }

    render() {
        return (
            <section className="display0">
                <div className="dairy-top-nav">
                    <div onClick={() => this.handleView0()} className={this.state.view === 0 ? "dairyactive" : "dairy-btn"} >
                        <h6 className="dairy-btn-text">MICRO WEIGH® SYSTEM</h6></div>
                    <div onClick={() => this.handleView1()} className={this.state.view === 1 ? "dairyactive" : "dairy-btn"}  >
                        <h6 className="dairy-btn-text">Pro-Control Plus® Batching System</h6>
                    </div>
                </div>

                {this.state.view === 0 && <View0 />}
                {this.state.view === 1 && <View1 />}
            </section>
        )
    }
}
