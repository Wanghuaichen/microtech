import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AnimatedNumber from 'react-animated-number';
import {Helmet} from "react-helmet";

import Header from '../Header/Header';
import MobileHeader from '../Header/MobileHeader';
import Footer from '../Footer/Footer';

import IntegratorCover from '../../assets/Pics/Integrator_cover.png';
import AppSolutions from '../../assets/Pics/App_solutions.png';
import Wheel from '../../assets/Icons/IntegratorWheel.png';
import WeighFlex from '../../assets/Pics/WeighFlex.png';
import WeighPro from '../../assets/Pics/WeighPro.png';
import Enzyme from '../../assets/Pics/Enzyme_Batching_unit_Copy.png';
import ProControl from '../../assets/Pics/Pro-Control-Plus.png';
import ArrowRight from '../../assets/Icons/→.png';

export default class Integrator extends Component {
  constructor() {
    super();

    this.state = {
      smallValue: 0,
      bigValue: 0,
      updates: 0
    };
    this.update = this.update.bind(this);
    this.mountUnmount = this.mountUnmount.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => this.update(), 4000);
    this.interval = setInterval(() => this.mountUnmount(), 500000);
  }

  update() {
    const { updates } = this.state;

    this.setState({
      smallValue: 20,
      mediumValue: 300,
      bigValue: 500,
      updates: updates + 1
    });
  }

  mountUnmount() {
    const { updates } = this.state;

    this.setState({
      updates: updates + 1
    });
  }

  render() {

    const { smallValue, mediumValue, bigValue } = this.state;

    return (
      <section className="integrator-container">

        <Helmet>
            <title>Integrator</title>
            <meta name="description" content="We provide innovative feed additive dosing systems that improve performance and profitability and ensure the success of our partners by providing unparalleled service and support." />
        </Helmet>

        <Header />
        <MobileHeader />

        <main className="integrator-main">
          <section className="bluecover-top">
            <div className="bluecover-text-box">
              <h3 className="integrator-top-text">Looking to increase the</h3>
              <h3 className='text-animated' id="fadeout">
                effectiveness of your feed additive ingredients?</h3>
              <h3 className="fadeinlast">efficiency of your production processes?</h3>
              <p className="integrator-top-subtitle">We provide innovative feed additive dosing systems that improve performance and profitability and ensure the success of our partners by providing unparalleled service and support.</p>
            </div>
            <div className="bluecover-container">
              <div className="bluecover-banner-left">
                <h3 className="bluecover-title-left">Feed Additive Suppliers</h3>
                <p>Feed ingredient manufacturers are constantly striving to develop innovative new products to make poultry and livestock production more efficient and to keep our food supply safe. Many of these products require specialized application methods. We act as a partner to manufacturers to develop innovative solutions and provide the service and support their customers need to ensure long-term success.</p>
              </div>
              <div className="bluecover-banner-right">
                <h3 className="bluecover-title-right">Poultry & Pork Producers</h3>
                <p>Poultry and livestock producers need to maximize production efficiencies to be successful. Optimizing the nutritional value of feedstuffs and maintaining animal health are musts. Feed additives such as enzymes, probiotics, and organic acids are key to achieving these goals but often feed mills do not have the application technology to utilize them. We consult with our customers to develop a customized solution and provide the service and support required to ensure their success.</p>
              </div>
            </div>
            <img className="blog-cover" src={IntegratorCover} alt="Blog Cover" />
          </section>

          <section className="team-container">
            <div className="team-box">
              <div className="president">
                <h3 className="pres-name">Experienced Partnership</h3>
              </div>
              <p className="experience-text">Experience and versatility are paramount in finding the right partner to assist you with your feed additive application project.</p>
              <p className="experience-text-two">With over 20 years of experience with feed additive application, we have installations in over 300 feed mills in more than 20 countries around the world. We have been recognized as the feed industry’s leader in accurately measuring and applying liquid and dry products. We are proud to have partnered with many leading ingredient suppliers in all segments of the industry.</p>
            </div>

            <div className="four-circles-container">
              <div className="four-column">
                <div className="circle-num">
                  <AnimatedNumber
                    style={{
                      transition: '0.8s ease-out',
                      transitionProperty:
                        'background-color, color'
                    }}
                    frameStyle={perc => (
                      perc === 100 ? {} : { backgroundColor: '#ffffff' }
                    )}
                    stepPrecision={0}
                    value={smallValue}
                    duration={4000}
                    formatValue={n => `${n}+`} />
                </div>
                <p className="circle-num-text">20+ years of experience with feed additive application</p>
              </div>
              <div className="four-column">
                <div className="circle-num">
                  <AnimatedNumber
                    style={{
                      transition: '0.8s ease-out',
                      transitionProperty:
                        'background-color, color'
                    }}
                    frameStyle={perc => (
                      perc === 100 ? {} : { backgroundColor: '#ffffff' }
                    )}
                    stepPrecision={0}
                    value={mediumValue}
                    duration={4000}
                    formatValue={n => `${n}`} />
                </div>
                <p className="circle-num-text">300+ Feedmill installations</p>
              </div>
              <div className="four-column">
                <div className="circle-num">
                  <AnimatedNumber
                    style={{
                      transition: '0.8s ease-out',
                      transitionProperty:
                        'background-color, color'
                    }}
                    frameStyle={perc => (
                      perc === 100 ? {} : { backgroundColor: '#ffffff' }
                    )}
                    stepPrecision={0}
                    value={smallValue}
                    duration={4000}
                    formatValue={n => `${n}+`} />
                </div>
                <p className="circle-num-text">20+ Countries</p>
              </div>
              <div className="four-column">
                <div className="circle-num">
                  <AnimatedNumber
                    style={{
                      transition: '0.8s ease-out',
                      transitionProperty:
                        'background-color, color'
                    }}
                    frameStyle={perc => (
                      perc === 100 ? {} : { backgroundColor: '#ffffff' }
                    )}
                    stepPrecision={0}
                    value={bigValue}
                    duration={4000}
                    formatValue={n => `${n}`} />
                </div>
                <p className="circle-num-text">500+ pellet line start ups for post-pellet liquid enzyme systems</p>
              </div>
            </div>
          </section>

          <section className="int-wheel-container">
            <div className="app-solutions-box">
              <img className="app-solutions-image" src={AppSolutions} alt="Complete Applications Solutions" />
              <div className="app-solutions-wrapper">
                <h3 className="app-solutions-header">Complete Application Solutions:</h3>
                <p className="app-solutions-text">Micro provides a complete solution including equipment, software, documentation, training, and support ensuring maximized efficiencies and minimized downtime.</p>

                <p className="app-solutions-text-subheader">Project Management</p>

                <p className="app-solutions-text">Our  results-focused project management style delivers on time and budget while keeping you fully informed on progress.</p>

                <p className="app-solutions-text-subheader">Service and Support</p>

                <p className="app-solutions-text">We know that preventive and corrective maintenance of the equipment makes it less vulnerable to unscheduled interruptions. It increases the reliability and ensures that the downtime of your production line is minimized. That is why we are committed to providing unparalleled service and support through our extensive U.S. teams and by also offering remote access technical assistance in order to protect your investment even further.</p>

                <p className="app-solutions-text-last">In addition to our extensive U.S. service and support team we have expanded our international partner network to ensure the success of our systems.</p>
              </div>
            </div>

            <img className="wheel" src={Wheel} alt="Integrator Wheel" />
          </section>

          {/* <section className="liquid-container">
            <div className="liquid-box">
              <div className="liquid-left">
                <h3 className="liquid-name">Liquid Applications</h3>
                <h6 className="liquid-subtitle">Accurate, Efficient, Reliable</h6>
              </div>
              <div className="liquid-line"></div>
              <div className="liquid-right">
                <p className="liquid-text-one">Accuracy and reliability are the most important parts of a system. Downtime must be minimized to meet production targets. All aspects of our liquid solutions are designed with these factors in mind.</p>
                <p className="liquid-text-two">We offer customized solutions to apply liquids at the mixer or other application points, and have testing facilities for assisting manufacturers with application requirements on new to market product testing.</p>
              </div>
            </div>
          </section> */}

          <section className="watch-video-container">
            <div className="pelleting-box">
              <h3 className="pelleting-header">Post-Pelleting Liquid Application</h3>
              <p className="pelleting-subtitle">Complete solution for post-pelleting liquid application of enzymes, fats, oils and other heat sensitive ingredients</p>
            </div>
            <div className="pelleting-video-box">WATCH VIDEO</div>
          </section>

          <section className="triangle-container">
            <div className="triangle-down"></div>
          </section>

          <section className="liquimatic-container">
            <div className="liquidmatic-flex">
              <div className="liquimatic-box-left"><h3 className="liquimatic-header-left">Liquimatic SE</h3>
                <p className="liquimatic-text-left">1 pellet line with up to 4 liquid products per line</p>
              </div>
              <div className="liquimatic-box-left"><h3 className="liquimatic-header-left">Liquimatic Pro</h3>
                <p className="liquimatic-text-left">3 pellet lines with up to 5 liquid products per line</p>
              </div>
              <div className="liquimatic-box-left"><h3 className="liquimatic-header-left">Liquimatic Elite</h3>
                <p className="liquimatic-text-left">3+ pellet lines and up to 7 liquid products per line</p>
              </div>
            </div>
            <div className="liquidmatic-flex">
              <div className="liquimatic-box-right">
                <p className="liquimatic-text-right">WeighFlex DF</p>
                <p className="liquimatic-text-right">Dry Flow Control & Measurement Device</p>
              </div>
              <div className="liquimatic-box-right">
                <p className="liquimatic-text-right">Specification and Supply of</p>
                <p className="liquimatic-text-right">required liquid dosing equipment</p>
              </div>
              <div className="liquimatic-box-right">
                <p className="liquimatic-text-right">PC operation specifically designed for post-pelleting application</p>
                <p className="liquimatic-text-right">via Micro Technologies software.</p>
                <p className="liquimatic-text-right">PLC cabinet design/build with required I/O & professional</p><p className="liquimatic-text-right">electrical drawings.</p>
              </div>
            </div>
          </section>

          <section className="options-container">
            <div className="options-info">
              <h3 className="procontrol-header">Customized Options</h3>
              <h6 className="procontrol-subheader">per feed mill requirements</h6>
              <li className="procontrol-list">HMI touchscreen based control options for more basic requirements</li>
              <li className="procontrol-list">Integration with central plant control systems and existing liquid or dry flow equipment</li>
              <li className="procontrol-list">IBC handling & automated refill options </li>
            </div>
            <div className="weighpro-box">
              <img className="weighpro-screen" src={WeighPro} alt="Pro Control Plus Software Screen" />
              <div className="weigh-btn-container">
                <div className="weigh-btn"><p className="weigh-text">Enhanced Reporting -  View  >  Print  >  Export</p></div>
                <div className="weigh-btn"><p className="weigh-text">Remote Support Login Capability</p></div>
                <div className="weigh-btn"><p className="weigh-text">Detailed alarm, settings, calibration, and formula entry screens</p></div>
              </div>
            </div>
          </section>

          <section className="weigh-flex-container">
            <div className="weigh-flex-info color5">
              <h3 className="weigh-flex-header">WeighFlex</h3>
              <p className="weigh-flex-text">The WeighFlex DF is an In-Line dry material feeding and measurement device. The innovative design measures the force, due to material flow, against a curved deflection chute. The WeighFlex DF can be used for many types of products including animal feed, oilseeds, pulses, & cereal grains.</p>
              <div className="weigh-flex-video-box">WATCH VIDEO</div>
            </div>
            <div className="weigh-flex-machine-box">
              <img className="weigh-flex-machine" src={WeighFlex} alt="Weigh Flex Machine" />
            </div>
          </section>

          <section className="batching-container">
            <div className="batching-unit-four color1">
              <h4 className="batching-header">Accuracy</h4>
              <li className="batching-list">Typical accuracy is +-2 % or better through full scale</li>
              <li className="batching-list">Adjusts flow rate to desired output for accurate liquid application</li>
              <li className="batching-list">True “in-line” measurement</li>
              <div className="arrow-circle">
                <img className="arrow-right" src={ArrowRight} alt="arrow right" width="15px" />
              </div>
            </div>
            <div className="batching-unit-four color2">
              <h4 className="batching-header">Flexibility</h4>
              <li className="batching-list">Remote control panel can be mounted up to 500 feet from the body depending on requirements</li>
              <li className="batching-list">Compact Size allows for easy integration into plant process</li>
              <li className="batching-list">Models available for applications from 4 - 120 metric tonnes per hour</li>
              <li className="batching-list">Feeder and Monitor Versions- Feeder controls and measures with automated gate control and the monitor measures the dry material flow across the chute</li>
              <div className="arrow-circle">
                <img className="arrow-right" src={ArrowRight} alt="arrow right" width="15px" />
              </div>
            </div>
            <div className="batching-unit-four color3">
              <h4 className="batching-header">Automation</h4>
              <li className="batching-list">Complete standalone operation via provided PLC control panel</li>
              <li className="batching-list">Remote Support functions</li>
              <li className="batching-list">Communication with central PLC control systems</li>
              <div className="arrow-circle">
                <img className="arrow-right" src={ArrowRight} alt="arrow right" width="15px" />
              </div>
            </div>
            <div className="batching-unit-four color4">
              <h4 className="batching-header">Automation</h4>
              <li className="batching-list">Easy calibration and configuration procedure</li>
              <li className="batching-list">Touch Screen for easy operation</li>

            </div>
          </section>

          <section className="enzyme-container">
            <div className="enzyme-machine-box">
              <img className="enzyme-machine" src={Enzyme} alt="Enzyme Batching Unit Machine" width="317px" />
            </div>
            <div className="enzyme-info color1">
              <h3 className="enzyme-header">The Enzyme Batching Unit</h3>
              <p className="enzyme-text">Reconstitute highly concentrated powdered enzymes into liquid for either mixer or post-pelleting application.</p>
              <div className="enzyme-video-box">WATCH VIDEO</div>
            </div>
          </section>

          <section className="batching-container">
            <div className="batching-unit-three color1">
              <h4 className="batching-header">Accuracy</h4>
              <li className="batching-list">Flexible Formulation</li>
              <li className="batching-list">Fresher Product</li>
              <li className="batching-list">Ensures Accuracy </li>
              <li className="batching-list">Safer</li>
              <div className="arrow-circle">
                <img className="arrow-right" src={ArrowRight} alt="arrow right" width="15px" />
              </div>
            </div>
            <div className="batching-unit-three color2">
              <h4 className="batching-header">Flexibility</h4>
              <li className="batching-list">Improve Production Efficiencies</li>
              <li className="batching-list">Eliminate IBC Disposal Process</li>
              <li className="batching-list">Reduce Shipping and Storage Costs</li>
              <li className="batching-list">Reduce Feed Costs</li>
              <div className="arrow-circle">
                <img className="arrow-right" src={ArrowRight} alt="arrow right" width="15px" />
              </div>
            </div>
            <div className="batching-unit-three color3">
              <h4 className="batching-header">Automation</h4>
              <li className="batching-list">Fully Automatic Operation</li>
            </div>
          </section>

          <section className="procontrol-container">
            <img className="procontrol-screen" src={ProControl} alt="Pro Control Plus Software Screen" />
            <div className="procontrol-info">
              <h3 className="procontrol-header">Pro-Control  Plus  Software</h3>
              <li className="procontrol-list">Easy to use graphic interface</li>
              <li className="procontrol-list">Remote access via internet for technical support</li>
              <li className="procontrol-list">Alarms can be forwarded to mill staff and Micro support staff</li>
              <li className="procontrol-list">	Enhanced reporting </li>
              <li className="procontrol-list">PC-based control system</li>
              <li className="procontrol-list">System can be monitored from control room</li>
            </div>
          </section>

          <section className="watch-video-container-footer">
            <div className="customized-box">
              <h3 className="customized-header">INTERESTED IN A</h3>
              <h3 className="customized-header">CUSTOMIZED SOLUTION?</h3>
            </div>
            <div className="customized-line"></div>
            <Link to="/contact">
              <div className="contact-video-box">CONTACT US </div></Link>
          </section>

        </main>

        <Footer />
      </section>
    )
  }
}
