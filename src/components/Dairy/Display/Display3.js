import React, { Component } from 'react';
import View3 from './Views/View3';
import View4 from './Views/View4';

export default class Display3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 3,
        }
        this.handleView3 = this.handleView3.bind(this);
        this.handleView4 = this.handleView4.bind(this);
    };

    handleView3 = () => {
        this.setState({ view: 3 })
    }

    handleView4 = () => {
        this.setState({ view: 4 })
    }

    render() {
        return (
            <section className="moreinfo-right">
                <div className="dairy-top-nav">
                    <div onClick={() => this.handleView3()} className={this.state.view === 3 ? "dairyactive" : "dairy-btn"} >
                        <h6 className="dairy-btn-text">PRO-CONTROL MIXER</h6></div>
                    <div onClick={() => this.handleView4()} className={this.state.view === 4 ? "dairyactive" : "dairy-btn"}  >
                        <h6 className="dairy-btn-text">Pro-Control® Parlor</h6>
                    </div>
                </div>

                {this.state.view === 3 && <View3 />}
                {this.state.view === 4 && <View4 />}

            </section>
        )
    }
}
