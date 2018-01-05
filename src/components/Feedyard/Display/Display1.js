import React, { Component } from 'react';
import View2 from './Views/View2';
import View3 from './Views/View3';

export default class Display1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 2,
        }
        this.handleView2 = this.handleView2.bind(this);
        this.handleView3 = this.handleView3.bind(this);
    };

    handleView2 = () => {
        this.setState({ view: 2 })
    }

    handleView3 = () => {
        this.setState({ view: 3 })
    }


    render() {
        return (
            <section className="display1">
                <div className="dairy-top-nav">
                    <div onClick={() => this.handleView2()} className={this.state.view === 2 ? "dairyactive" : "dairy-btn"} >
                        <h6 className="dairy-btn-text">Precision Feed Management Solutions</h6></div>
                    <div onClick={() => this.handleView3()} className={this.state.view === 3 ? "dairyactive" : "dairy-btn"}  >
                        <h6 className="dairy-btn-text">Animal
                        Health Solutions</h6>
                    </div>
                </div>

                {this.state.view === 2 && <View2 />}
                {this.state.view === 3 && <View3 />}

            </section>
        )
    }
}
