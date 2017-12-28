import React, { Component } from 'react';
import Header from '../Header/Header';
import HomeHero from '../../assets/Pics/HomeHero.jpg';

export default class Home extends Component {
  render() {
    return (
      <main className="slider-home">
        <Header />
        <img className="slider-one" src={HomeHero} alt="Home Cow Cover" />
        <div className="slider-text">
          <div className="center-box">
            <h3 className="vision-text">We innovate technologies that empower food producers to grow a safe, wholesome food supply more efficiently and more profitably.</h3>
            <div className="main-cta">WATCH VIDEO</div>
          </div>
        </div>
      </main>
    )
  }
}
