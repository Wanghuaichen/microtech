import React, { Component } from 'react';
import View4 from './Views/View4';
import View5 from './Views/View5';

export default class Display2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 4,
        }
        this.handleView4 = this.handleView4.bind(this);
        this.handleView5 = this.handleView5.bind(this);
    };

    handleView4 = () => {
        this.setState({ view: 4 })
    }

    handleView5 = () => {
        this.setState({ view: 5 })
    }

    render() {
        return (
            <section className="display2">
                <div className="dairy-top-nav">
                    <div onClick={() => this.handleView4()} className={this.state.view === 4 ? "dairyactive" : "dairy-btn"} >
                        <h6 className="dairy-btn-text">Precision Feed Management Solutions</h6></div>
                    <div onClick={() => this.handleView5()} className={this.state.view === 5 ? "dairyactive" : "dairy-btn"}  >
                        <h6 className="dairy-btn-text">Animal
Health Solutions</h6>
                    </div>
                </div>

                {this.state.view === 4 && <View4 />}
                {this.state.view === 5 && <View5 />}

            </section>
        )
    }
}
