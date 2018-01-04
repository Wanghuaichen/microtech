import React, { Component } from 'react';
import View2 from './Views/View2';

export default class Display2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 2,
        }
        this.handleView2 = this.handleView2.bind(this);
    };

    handleView2 = () => {
        this.setState({ view: 0 })
    }


    render() {
        return (
            <section className="moreinfo-right">
                <div className="dairy-top-nav">
                    <div onClick={() => this.handleView2()} className={this.state.view === 2 ? "dairyactive" : "dairy-btn"} >
                        <h6 className="dairy-btn-text">MICRO WEIGH SYSTEM®</h6></div>
                    <div className="dairy-btn-null" >
                    </div>
                </div>

                {this.state.view === 2 && <View2 />}

            </section>
        )
    }
}
