import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import MWILogo from '../../assets/Logos/MWI_Animal_Health_White.png';
import MTLogo from '../../assets/Logos/Micro_Technologies_White.png';
import ABLogo from '../../assets/Logos/AmerisourceBergen_White.png';

export default class About extends Component {
  render() {
    return (
      <section className="about-container">
        <Header />

        <main className="about-main">
          <div className="about-cover"></div>

          <section className="bluebanner-box about">
            <div className="bluebanner-left">
              <h4 className="left">OUR COMPANY</h4>
              <h1 className="bluebanner-header left">HISTORY</h1>
            </div>
            <div className="bluebanner-est">
              <h4>EST.</h4>
            </div>
            <div className="bluebanner-right">
              <p className="bluebanner-text bannerabout">
                DECADES OF UNWAVERING COMMITMENT TO REPEATED INNOVATION</p>
            </div>
          </section>

          <section className="history-circles">
            <h3>1971</h3>
            <p>Micro Technologies was founded in 1971 as Micro Chemical by Bill Pratt who recognized a need for revolutionary technology within the feedlot industry; a spark that fueled 46 years of continued innovation. Today, Micro serves the majority of the feedyard industry and has expanded into the dairy industry.</p>
          </section>

          <section className="bluebanner-column about columnbanner">
            <div className="bluebanner-left ">
              <h1 className="bluebanner-header left lead">LEADERSHIP</h1>
            </div>
            <div className="leadership-bottom">
              <p className="leadership-text left lead">
                By combining deep experience in agriculture, science and technology, we aim to create superior value and contribute to the on going success of our customer every day.</p>
            </div>
          </section>

          <section className="history-circles">
            <h3>1971</h3>
            <p>Micro Technologies was founded in 1971 as Micro Chemical by Bill Pratt who recognized a need for revolutionary technology within the feedlot industry; a spark that fueled 46 years of continued innovation. Today, Micro serves the majority of the feedyard industry and has expanded into the dairy industry.</p>
          </section>

          <section className="bluebanner-column about columnbanner">
            <div className="bluebanner-left ">
              <h1 className="bluebanner-header left lead">PARTNERSHIP</h1>
            </div>
            <div className="leadership-bottom">
              <div className="partnership-logos">
                <img className="part-icon" src={MWILogo} alt="MWI Animal Health" />
                <img className="part-icon" src={MTLogo} alt="MWI Animal Health" />
                <img className="part-icon" src={ABLogo} alt="MWI Animal Health" />
                </div>
            </div>
          </section>

        </main>

        <Footer />
      </section>
    )
  }
}
