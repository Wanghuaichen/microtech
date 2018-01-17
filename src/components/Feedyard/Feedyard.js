import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'nuka-carousel';
import ModalVideo from 'react-modal-video';
import {Helmet} from "react-helmet";

import Header from '../Header/Header';
import MobileHeader from '../Header/MobileHeader';
import Footer from '../Footer/Footer';
import Display0 from './Display/Display0';
import Display1 from './Display/Display1';

import FeedyardCover from '../../assets/Pics/Feedyard_cover.png';
import Accutrac from '../../assets/Icons/accutrac.png';
import CowboyTestimony from '../../assets/Pics/VideoPhoto2.png';
import Comprehensive from '../../assets/Pics/Comprehensive.png';
import Quotes from '../../assets/Icons/quote.png';
import FeedyardMobile from '../../assets/Mobile/FeedyardMobile.png';

export default class Feedyard extends Component {
  constructor() {
    super();
    this.state = {
      show: 0,
      view: 0,
      isOpen: false
    }
    this.showDisplay0 = this.showDisplay0.bind(this);
    this.showDisplay1 = this.showDisplay1.bind(this);
    this.openModal = this.openModal.bind(this)
  };

  showDisplay0() {
    this.setState({ show: 0, view: 0 })
  }

  showDisplay1() {
    this.setState({ show: 1, view: 2 })
  }

  openModal() {
    this.setState({ isOpen: true })
  }

  render() {
    return (
      <section className="feedyard-container">

        <Helmet>
          <title>Feedyard</title>
          <meta name="description" content="A complete, truly integrated feedyard management solution" />
        </Helmet>

        <Header />
        <MobileHeader />

        <img className="feedyard-cover-mobile" src={FeedyardMobile} alt="Feedyard Cover" />

        <main className="feedyard-main">

          <section className="feedyard-top">
            <div className="transparent-stocker white-text">
              <h3 className="feedyard-cover-title-one">What does</h3>
              <h3 className="feedyard-cover-title-two">Precision Animal Agriculture</h3>
              <h3 className="feedyard-cover-title-three">on a feedyard look like?</h3>
              <h6 className="feedyard-subtitle">Flexible and Accurate Feed Production</h6>
              <h6 className="feedyard-subtitle">Increased Efficiencies</h6>
              <h6 className="feedyard-subtitle">Data Driven Decisions</h6>
              <h6 className="feedyard-subtitle">Optimal Animal Health</h6>
              <h6 className="feedyard-subtitle">Safe, Wholesome Food Supply</h6>
            </div>
            <img className="stocker-cover" src={FeedyardCover} alt="Feedyard Cover" />
          </section>

          <div className="off">
          <section className="blue-banner-flex advanced">
            <h6 className="blue-left-text">ADVANCED COMPREHENSIVE & INTEREGRATED</h6>
            <div className="line-break-banner"></div>
            <h6 className="blue-right-text">FEEDYARD MANAGEMENT SOLUTIONS</h6>
          </section>
          </div>

          <section className="accutrac-container">
            <div className="accutrac-header-box">
              <h3 className="accutrac-header">ACCU-TRAC</h3>
              <h4 className="accutrac-header-small">®</h4>
            </div>
            <h6 className="accutrac-subheader">A complete, truly integrated feedyard management solution</h6>
            <div className="accutrac-line"></div>
            <p className="accutrac-para">Gain access to real time information and statistics from feed, health, and animal data in a single inventory system. </p>
            <img className="accutrac-wheel" src={Accutrac} alt="accu-trac wheel" width="620px" />
          </section>

          <div className="on">
          <section className="blue-banner-flex advanced">
            <h6 className="blue-left-text">ADVANCED COMPREHENSIVE & INTEREGRATED</h6>
            <div className="line-break-banner"></div>
            <h6 className="blue-right-text">FEEDYARD MANAGEMENT SOLUTIONS</h6>
          </section>
          </div>


          <main className="moreinfo-container">
            <section className="moreinfo-top">
              <div className="moreinfo-top-btns">
                <div onClick={() => this.showDisplay0()} className="moreinfo-top-nav">
                  <h4 className="moreinfo-top-nav-header">Precision Feed</h4>
                  <h4 className="moreinfo-top-nav-header">Management Solutions</h4>
                  <div className={this.state.show === 0 ? "feedyard-blueactive" : null}></div>
                </div>
                <div onClick={() => this.showDisplay1()} className="moreinfo-top-nav">
                  <h4 className="moreinfo-top-nav-header">Animal</h4>
                  <h4 className="moreinfo-top-nav-header">Health Solutions</h4>
                  <div className={this.state.show === 1 ? "feedyard-blueactive" : null}></div>
                </div>
              </div>
              <div className="moreinfo-top-textbox">
                <p className="moreinfo-top-text">Our precision feed management solutions help optimize animal performance potential. We ensure consistency, accuracy, ration flexibility and verification, real-time data and accountability. Each system is custom configured to fit your feed processes allowing you more control over inventory and shrink.</p>
              </div>
            </section>
          </main>

          <main className="moreinfo-container">

            {this.state.show === 0 && <Display0 />}
            {this.state.show === 1 && <Display1 />}

          </main>


          <section className="blue-banner-flex-m">
            <div className="blue-left-box">
              <h6 className="blue-left-text-two">INTERESTED IN A</h6>
              <h6 className="blue-left-bold">CUSTOMIZED SOLUTION</h6>
              <h6 className="blue-left-text-two">FOR YOUR BUSINESS?</h6>
            </div>
            <div className="line-break-banner"></div>
            <Link to="/contact">
              <div className="blue-right-contact">CONTACT US</div>
            </Link>
          </section>

          <section className="hear-customers-container">
            <img className="cowboy-testimony" src={CowboyTestimony} alt="Customer Headshot" />
            <div className="customer-lightblue">
              <h6 className="customer-header">HEAR FROM OUR CUSTOMERS</h6>
              <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='i4wzef1I-Kk' onClose={() => this.setState({ isOpen: false })} />
              <h6 className="customer-watchvideo" onClick={this.openModal}>WATCH VIDEO NOW</h6>
            </div>
          </section>


          <section className="transparent-banner-flex">
            <div className="transparent-banner-box">
              <h3 className="transparent-left-text">Comprehensive Solutions</h3>
              <h6 className="transparent-left-subtext">THAT WORK FOR YOU</h6>
            </div>
            <div className="transparent-line-break-banner"></div>
            <p className="transparent-right-text2">Alongside your team, we help to resolve issues that are affecting your operation. We strive to understand the challenges in a feedyard industry to create solutions through innovative technologies and processes; all to increase operational efficiencies and support your long term success.</p>
          </section>

          <img className="comprehensive-solutions" src={Comprehensive} alt="herd of cows" height="528px" />

          <Carousel decorators={false} autoplay={true}
            wrapAround={true} speed={600} className="carousel-frame">

            <section className="bluebanner-box quotebox">
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

            <section className="bluebanner-box quotebox">
              <div className="bluebanner-left">
                <img className="quotes" src={Quotes} alt="quotes icon" width="60px" />
              </div>
              <div className="slanted-line"></div>
              <div className="bluebanner-right">
                <p className="operations-quote">“It takes the commitment of the entire feedyard to be invested in providing a product that is safe and wholesome that you can feed your children. When you have partners like Micro that have the same philosophy, it allows everything to align and to get the job done right.”</p>
                <div className="operations-box">
                  <h5 className="operations-name">-  Robby Kirkland</h5>
                  <p className="operations-title"> VICE PRESIDENT OF OPERATIONS
              </p>
                  <p className="operations-title">KIRKLAND FEEDYARD | VEGA, TEXAS</p>
                </div>
              </div>
            </section>
          </Carousel>



          <section className="white-banner-flex">
            <div className="transparent-banner-box">
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
