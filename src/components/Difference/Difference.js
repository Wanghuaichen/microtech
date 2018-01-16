import React, { Component } from 'react';
import AnimatedNumber from 'react-animated-number';
import {Helmet} from "react-helmet";

import Header from '../Header/Header';
import MobileHeader from '../Header/MobileHeader';
import Footer from '../Footer/Footer';

import DifferenceCover from '../../assets/Pics/Difference_Cover.png';
import Quotes from '../../assets/Icons/quote.png';
import ThirdCover from '../../assets/Pics/3rdSection-Background.jpg';
import Associates from '../../assets/Pics/Associates.png';
import Customers from '../../assets/Pics/Customers.png';
import Animals from '../../assets/Pics/Animals.png';
import Family from '../../assets/Pics/Family.png';
import ArrowDown from '../../assets/Pics/ArrowDown.svg';
import DifferenceMobile from '../../assets/Mobile/DifferenceMobile.png';

export default class Difference extends Component {
  constructor() {
    super();

    this.state = {
      smallValue: 0,
      mediumValue: 0,
      updates: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.update(), 2000);
    this.interval = setInterval(() => this.mountUnmount(), 12000);
  }

  update() {
    const { updates } = this.state;

    this.setState({
      smallValue: 20,
      mediumValue: 25,
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

    const { smallValue, mediumValue } = this.state;

    return (
      <section className="difference-container">

        <Helmet>
          <title>The Micro Difference</title>
          <meta name="description" content="We are passionate about making a difference in the lives of our associates, customers, animals and the food supply we consume." />
        </Helmet>

        <Header />
        <MobileHeader />

        <img className="difference-cover-mobile" src={DifferenceMobile} alt="Difference Cover" />

        <main className="difference-main">

          <section className="difference-top">
            <div className="transparent-white">
              <div className="center-difference-box">
                <h4 className="differce-cover-title">Since 1971</h4>
                <h6 className="difference-subheader">we have delivered a commitment based upon a business philosophy centered around three key principles;
              Innovation, Value Creation and Service.</h6>
              </div>
            </div>
            <img className="difference-cover" src={DifferenceCover} alt="Difference Cover" />
          </section>


          <section className="white-banner-box">
            <div className="values-box">
              <div className="diff-box">
                <h4 className="values-header">INNOVATION</h4>
                <p className="values-numbers">

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
                    duration={1200}
                    formatValue={n => `${n}%`} />

                </p>
                <div className="val-line"></div>
                <p className="values-para">20% of every dollar earned is reinvested in research + development</p>
              </div>
              <div className="diff-box">
                <h4 className="values-header">VALUE CREATION</h4>
                <p className="values-numbers">

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
                    duration={1200}
                    formatValue={n => `${n}`} />

                </p>
                <div className="val-line"></div>
                <p className="values-para">More than 20 useful inventions for animal agriculture</p>
              </div>
              <div className="diff-box">
                <h4 className="values-header">SERVICE</h4>
                <p className="values-numbers">

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
                    duration={1200}
                    formatValue={n => `${n}%`} />

                </p>
                <div className="val-line"></div>
                <p className="values-para">The average length of our customer relationship is 25 years and growing</p>
              </div>
            </div>
          </section>

          <section className="bluebanner-box quotebox">
            <div className="bluebanner-left">
              <img className="quotes" src={Quotes} alt="quotes icon" width="60px" />
            </div>
            <div className="slanted-line"></div>
            <div className="bluebanner-right">
              <p className="operations-quote">“Micro is a business partner of ours, not a vendor. When we have a problem and it’s late, they aren’t clocking out at five. They’re right there with us.  They are really in it to make sure that we are successful and really act like part of our team- always willing to help solve any problem we have at any time!”</p>
              <div className="operations-box">
                <h5 className="operations-name">- Nick Strehle</h5>
                <p className="operations-title"> OPERATIONS AND HR MANAGER
              </p>
                <p className="operations-title">RITTER FEEDYARDS, BEEMER, NEBRASKA</p>
              </div>
            </div>
          </section>

          <section className="white-bar">
          </section>


          <section className="third-diff-section">
            <div className="ourpeople-box">
              <div className="ourpeople-text">
                <center>
                  <h3 className="threePs-title">Our people, partnership and passion are what makes the difference.</h3>
                </center>
              </div>
              <div className="ourpeople-text">
                <center>
                  <h3 className="threePs-title2">Our People</h3>
                  <p className="threePs-para">Our associates are our greatest asset and the cornerstone on which we have built our success. We realize that our customers have a multitude of things to manage every day to run their feedyards and dairies and our goal is to provide technologies, systems and people that allow them the peace of mind to know that certain components of their business “just work”. Many of our associates have a deep understanding of the challenges our customers face every day because of their backgrounds in agriculture.</p>
                </center>
              </div>
            </div>
            <img className="third-cover" src={ThirdCover} alt="conveyor belt cover" />
          </section>

          <section className="partnership-container">
            <h2 className="passion-h2">Partnership</h2>
            <p className="partnership-para">We pride ourselves on the long standing partnerships we have built within the industry. We work hand in hand with nutritionists, veterinarians and consultants to support the implementation of individualized programs created for each customer. While also providing national distribution and full support services to our manufacturer partners, large and small. The valued history we have in those partnerships allow  us to collaborate and solve for the issues food producers face today and better anticipate the challenges tomorrow.</p>
          </section>

          <section className="nutrition-wide">
            <section className="nutrition-container">
              <h4 className="nutrition-header">Nutritionists  /  Veterinarians  / Consultants</h4>
              <div className="nutrition-box">
                <img className="arrow-down" src={ArrowDown} alt="drop down arrow" />
                <h6 className="nutrition-subtitle">DATA DRIVEN DECISIONS</h6>
              </div>
              <p className="nutrition-para">Aligned goals of ensuring animal health, accuracy in nutrition, offering flexibility, accountability, access to real-time data and ability to adjust to any customers needs from virtually anywhere. Allowing optimization of your time and efficiencies in your business.</p>
              <div className="nutrition-box">
                <img className="arrow-down" src={ArrowDown} alt="drop down arrow" />
                <h6 className="nutrition-subtitle">RESPONSIBLE ANIMAL PRODUCTION</h6>
              </div>
              <p className="nutrition-para">Our technologies offer the opportunity to utilize health and nutrition products in flexible ways that really make sense for the animal. They provide assurance that products are properly given to target animals through precision delivery along with substantiating records. Gain access to historical records of product usage with corresponding animal health and performance data to accurately determination of relative value of products under actual use conditions.</p>
              <div className="nutrition-box">
                <img className="arrow-down" src={ArrowDown} alt="drop down arrow" />
                <h6 className="nutrition-subtitle">REGULATORY COMPLIANCE SUPPORT</h6>
              </div>
              <p className="nutrition-para">We act as your partner in regulatory compliance and offer unparalleled technical service and support for all of our technologies.</p>
            </section>


            <section className="nutrition-container">
              <h4 className="nutrition-header">Manufacturer Partners</h4>
              <div className="nutrition-box">
                <img className="arrow-down" src={ArrowDown} alt="drop down arrow" />
                <h6 className="nutrition-subtitle">ENSURING OPTIMAL PRODUCT RESULTS</h6>
              </div>
              <p className="nutrition-para">Match product levels more accurately to target animals based upon days on feed, animal size and type, daily intake, animal health condition, nutritional content of the ration, performance level, animal genetics, and other criteria to achieve optimal performance rather than one level for all animals.</p>
              <div className="nutrition-box">
                <img className="arrow-down" src={ArrowDown} alt="drop down arrow" />
                <h6 className="nutrition-subtitle">ACCURATE DELIVERY & VERIFICATION</h6>
              </div>
              <p className="nutrition-para">Our technology supports our customers in accurately delivering the products you manufacture to ensure responsible animal production while maintaining product identity all the way to the bunk.</p>
              <div className="nutrition-box">
                <img className="arrow-down" src={ArrowDown} alt="drop down arrow" />
                <h6 className="nutrition-subtitle">END USER TRAINING, SERVICE & SUPPORT</h6>
              </div>
              <p className="nutrition-para">We strive to ensure a safe food supply and our customers’ long term success, as such, we are committed to providing exceptional end user training, service and on-going support of the use of products, processes and technologies.</p>
            </section>
          </section>

          <section className="slantedbar"></section>

          <section className="white-passion-box">
            <h2 className="passion-h2">Passion</h2>
            <p className="passion-h2-para">We are passionate about making a difference in the lives of our associates, customers, animals and the food supply we consume.</p>
          </section>

          <section className="gray-banner-box graypassion">
            <div className="passion-container">
              <div className="passion-box">
                <img className="passion-image" src={Associates} alt="associates" />
                <div className="bluesub">
                  <h6 className="subblue-subtitle">ASSOCIATES</h6>
                </div>
                <p className="bluesub-para">Our goal is to create an environment that every associate knows the impact that our company can have for a customer. We want each of our teams to understand that they contribute to the greater goal which is to help create a safe, wholesome, affordable protein supply.
                </p>
              </div>
              <div className="passion-box">
                <img className="passion-image" src={Customers} alt="customers" />
                <div className="bluesub">
                  <h6 className="subblue-subtitle">CUSTOMERS</h6>
                </div>
                <p className="bluesub-para">Each one of our customers derives value from our technology in a different way. Because we are the innovator, it's our job to work to understand the goals of each customer and work towards accomplishing them through the use of our systems.
                </p>
              </div>
              <div className="passion-box">
                <img className="passion-image" src={Animals} alt="animals" />
                <div className="bluesub">
                  <h6 className="subblue-subtitle">ANIMALS</h6>
                </div>
                <p className="bluesub-para">We believe the health of animals and humans are intrinsically linked. We depend on the nutritional benefits we gain from production animals and rely on them to live the way we do today. That’s why we are invested in ensuring the optimal health of each animal we are able to touch.
                </p>
              </div>
              <div className="passion-box">
                <img className="passion-image" src={Family} alt="Family, Friends, Neighbors and the world" />
                <div className="bluesub">
                  <h6 className="subblue-subtitle">Family, Friends, Neighbors and the world</h6>
                </div>
                <p className="bluesub-para">The goal of the agriculture industry is to provide a safe, wholesome and affordable eating experience. Our goal is to support our customers in achieving that goal; through innovative technology and partnership.
                </p>
              </div>
            </div>
          </section>

        </main>
        <Footer />

      </section >
    )
  }
}


