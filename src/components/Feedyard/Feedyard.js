import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

import FeedyardCover from '../../assets/Pics/Feedyard_cover.png';
import Accutrac from '../../assets/Icons/accutrac.png';
import CowboyTestimony from '../../assets/Pics/VideoPhoto2.jpg';
import Comprehensive from '../../assets/Pics/Comprehensive.png';
import Quotes from '../../assets/Icons/quote.png';


export default class Feedyard extends Component {
  render() {
    return (
      <section className="feedyard-container">
        <Header />

        <main className="feedyard-main">

          <section className="feedyard-top">
            <div className="transparent-stocker">
              <h3 className="feedyard-cover-title-one">What does</h3>
              <h3 className="feedyard-cover-title-two">Precision Animal Agriculture</h3>
              <h3 className="feedyard-cover-title-three">on a feedyard look like?</h3>
              <h6 className="feedyard-subtitle">Flexible and Accurate Feed Production</h6>
              <h6 className="feedyard-subtitle">Increased Efficiencies</h6>
              <h6 className="feedyard-subtitle">Data Driven Decisions</h6>
              <h6 className="feedyard-subtitle">Optimal Animal Health</h6>
              <h6 className="feedyard-subtitle">Safe, Wholesome Food Supply</h6>
            </div>
            <img className="stocker-cover" src={FeedyardCover} alt="Stocker Cover" />
          </section>

          <section className="blue-banner-flex">
            <h6 className="blue-left-text">ADVANCED COMPREHENSIVE & INTEREGRATED</h6>
            <div className="line-break-banner"></div>
            <h6 className="blue-right-text">FEEDYARD MANAGEMENT SOLUTIONS</h6>
          </section>

          <section className="accutrac-container">
            <h3 className="accutrac-header">ACCU-TRAC</h3>
            <h6 className="accutrac-subheader">A complete, truly integrated feedyard management solution</h6>
            <div className="accutrac-line"></div>
            <p className="accutrac-para">Gain access to real time information and statistics from feed, health, and animal data in a single inventory system. </p>
            <img className="accutrac-wheel" src={Accutrac} alt="accu-trac wheel" width="620px" />
          </section>








          <section className="blue-banner-flex">
            <div className="blue-left-box">
              <h6 className="blue-left-text-two">INTERESTED IN A</h6>
              <h6 className="blue-left-bold">CUSTOMIZED SOLUTION</h6>
              <h6 className="blue-left-text-two">FOR YOUR BUSINESS?</h6>
            </div>
            <div className="line-break-banner"></div>
            <div className="blue-right-contact">CONTACT US</div>
          </section>

          <section className="hear-customers-container">
            <img className="cowboy-testimony" src={CowboyTestimony} alt="Customer Headshot" />
            <div className="customer-lightblue">
              <h6 className="customer-header">HEAR FROM OUR CUSTOMERS</h6>
              <h6 className="customer-watchvideo">WATCH VIDEO NOW</h6>
            </div>
          </section>


          <section className="transparent-banner-flex">
            <div classname="transparent-banner-box">
              <h3 className="transparent-left-text">Comprehensive Solutions</h3>
              <h6 className="transparent-left-subtext">THAT WORK FOR YOU</h6>
            </div>
            <div className="transparent-line-break-banner"></div>
            <p className="transparent-right-text">Alongside your team, we help to resolve issues that are affecting your operation. We strive to understand the challenges in a feedyard industry to create solutions through innovative technologies and processes; all to increase operational efficiencies and support your long term success.</p>
          </section>

          <img className="comprehensive-solutions" src={Comprehensive} alt="herd of cows" height="528px" />

          <section className="bluebanner-box quotebox marginup">
            <div className="bluebanner-left">
              <img className="quotes" src={Quotes} alt="quotes icon" width="60px" />
            </div>
            <div className="slanted-line"></div>
            <div className="bluebanner-right">
              <p className="operations-quote">“Micro’s technology gives us the flexibility we need to manage cattle on an individual or group basis.  If we were using any other technology  we would have to make a decision thirty days or forty-five days out. Today, with the technology that we have from Micro, we can make those decisions hour by hour, day by day, and incorporate that into better decisions for our operation.”</p>
              <div className="operations-box">
                <h5 className="operations-name">- Walt Garrison</h5>
                <p className="operations-title"> DIRECTOR OF OPERATIONS 
              </p>
                <p className="operations-title">CACTUS FEEDERS  AMARILLO, TEXAS</p>
              </div>
            </div>
          </section>

          <section className="white-banner-flex">
            <div classname="transparent-banner-box">
              <h3 className="transparent-left-text">Dedicated Technical</h3>
              <h6 className="transparent-left-subtext">SERVICE & SUPPORT</h6>
            </div>
            <div className="transparent-line-break-banner"></div>
            <p className="transparent-right-text">We understand that your business runs constantly and issues can arrive anytime. That’s why we are dedicated to providing exceptional customer service through a highly committed and expert technical force, providing same-day service, 365 days of the year.</p>
          </section>


          <section className="watch-video-stocker-footer">
            <div className="stocker-contact-line"></div>
            <div className="customized-box">
              <h6 className="stocker-footer-text">INTERESTED IN A</h6>
              <h6 className="stocker-footer-text">CUSTOMIZED SOLUTION FOR YOUR BUSINESS?</h6>
            </div>
            <Link to="/contact">
              <div className="stocker-video-box">CONTACT US </div></Link>
          </section>

        </main>



        <Footer />
      </section>
    )
  }
}
