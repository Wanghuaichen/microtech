import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import IntegratorCover from '../../assets/Pics/Integrator_cover.png';

export default class Integrator extends Component {
  render() {
    return (
      <section className="integrator-container">
        <Header />



        <main className="integrator-main">
          <section className="bluecover-top">
            <div className="bluecover-text-box">
              <h3 className="integrator-top-text">Looking to increase the effectiveness of your feed additive ingredients? Efficiency of your production processes?</h3>
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
        </main>

        <Footer />
      </section>
    )
  }
}
