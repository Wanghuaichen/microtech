import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import CareersCover from '../../assets/Pics/Careers_cover.svg';
import WhiteArrow from '../../assets/Icons/White →.png'


export default class Careers extends Component {
  render() {
    return (
      <section className="careers-container">
        <Header />

        <main className="careers-main">

          <section className="careers-top">
            <div className="transparent-half">
              <h3>Professions with Purpose</h3>
              <br></br>
              <br></br>
              <p className="careers-subheader">At Micro Technologies we offer lifelong career opportunities that impact lives. We foster relationships with our customers through a deep understanding that healthier animals contribute to a healthier society.</p>
            </div>
            <img className="careers-cover" src={CareersCover} alt="Warehouse Forklift" />
          </section>

          <section className="white-banner-box">
            <h5 className="careers-title">JOIN THE MICRO TECHNOLOGIES™ TEAM</h5>
            <p className="careers-para">Our team is composed of talented and dedicated professionals.  We cultivate a nurturing atmosphere where qualified candidates are placed in positions best suited to their skills and expertise.
              </p>
            <p className="careers-para">Learn more about some of our featured roles below, or take a look at our list of open positions.</p>
            <div className="btn-cta">EXPLORE OPPORTUNITIES
            <img className="white-arrow" src={WhiteArrow} alt="Explore Opportunities" />
            </div>
          </section>

          <section className="gray-banner-box">
            <h5 className="careers-title">PERKS AND BENEFITS</h5>
            <p className="careers-para-gray">We are committed to offering benefits and programs that are comprehensive, competitive and will meet the needs of our associates. Some of our benefits include:</p>
            <div className="perks-box">
              <div className="benefits">
                <h6 className="benefits-title">health and wellness</h6>
                <p className="benefits-list">	• 	Medical, dental, vision and prescription plans</p>
                <p className="benefits-list">	• 	Associate Assistance Program</p>
                <p className="benefits-list">	• 	Benefits begin at day 31</p>
              </div>
              <div className="benefits">
                <h6 className="benefits-title">financials</h6>
                <p className="benefits-list">	• 	401k plan</p>
                <p className="benefits-list">	• 	Tuition reimbursement</p>
                <p className="benefits-list">	• 	Flexible Spending Accounts for health and dependent care</p>
              </div>
              <div className="benefits">
                <h6 className="benefits-title">WORK-LIFE BALANCE</h6>
                <p className="benefits-list">	• 	Competitive Paid Time Off (PTO) Program
                </p>
                <p className="benefits-list">	• 	PTO Donation program
                </p>
                <p className="benefits-list">	• 	Volunteerism recognition program</p>
              </div>
            </div>
          </section>

          <section className="white-banner-box expandedbox">
            <h5 className="careers-title">HOW WE LIVE</h5>
            <h6 className="vision-subheader">PUT PEOPLE FIRST. THE REST WILL FOLLOW.</h6>
            <p className="careers-para">We are committed to improving life. Success for our company happens when we help our partners and associates thrive.</p>
            <h6 className="vision-subheader">BE PART OF THE SOLUTION.</h6>
            <p className="careers-para">Curiosity is contagious. Empathy and passion are too. We turn chaos into order by creating solutions that enrich the lives of those we serve – our partners, patients, associates and communities around the world.</p>
            <h6 className="vision-subheader">TELL THE TRUTH, TELL IT FAST.</h6>
            <p className="careers-para">We believe that being kind means that we are direct, but with good intention. Together this allows us to move forward with clarity and alignment.</p>
            <h6 className="vision-subheader">BE BOLD & STAY HUMBLE.</h6>
            <p className="careers-para">We have confidence and respect in each other’s ability and expertise, which empowers us to take risks when they are worthy. Our humility keeps us grounded.</p>
            <h6 className="vision-subheader">CELEBRATE INDIVIDUALITY. ACT AS A COMMUNITY.</h6>
            <p className="careers-para">There is power in our individual perspectives. Our greatest impact is when we collaborate as one, using our collective expertise to generate ideas with sustaining value.</p>


            <div className="btn-cta">EXPLORE OPPORTUNITIES
            <img className="white-arrow" src={WhiteArrow} alt="Explore Opportunities" />
            </div>
          </section>




          <Footer />
        </main>
      </section>
    )
  }
}
