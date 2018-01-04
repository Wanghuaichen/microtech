import React, { Component } from 'react';
import View5 from './Views/View5';


export default class Display3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        view: 5,
    }
    this.handleView5 = this.handleView5.bind(this);
};

handleView5 = () => {
    this.setState({ view: 5 })
}

  render() {
    return (
      <section className="display3">
        <div className="dairy-top-nav">
          <div onClick={() => this.handleView5()} className={this.state.view === 5 ? "dairyactive" : "dairy-btn"} >
            <h6 className="dairy-btn-text">SCR HEATIME®</h6></div>
          <div className="dairy-btn-null" >
          </div>
        </div>

        {this.state.view === 5 && <View5 />}

      </section>
    )
  }
}
