import React, { Component } from 'react';
// import View5 from './Views/View5';
import View6 from './Views/View6';


export default class Display3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 6,
    }
    this.handleView5 = this.handleView5.bind(this);
    this.handleView6 = this.handleView6.bind(this);
  };

  handleView5 = () => {
    this.setState({ view: 5 })
  }

  handleView6 = () => {
    this.setState({ view: 6 })
  }

  render() {
    return (
      <section className="display3">
        <div className="dairy-top-nav">
          <div onClick={() => this.handleView6()} className={this.state.view === 6 ? "dairyactive" : "dairy-btn"} >
            <h6 className="dairy-btn-text">Precision Feed Management Solutions</h6></div>
          <div onClick={() => this.handleView6()} className={this.state.view === 5 ? "dairyactive" : "dairy-btn"}  >
            <h6 className="dairy-btn-text">Animal
Health Solutions</h6>
          </div>
        </div>

        {this.state.view === 6 && <View6 />}

      </section>
    )
  }
}
