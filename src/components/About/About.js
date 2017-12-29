import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default class About extends Component {
  render() {
    return (
      <section className="about-container">
        <Header />

        <main className="about-main">
          about!       
        </main>

        <Footer />
      </section>
    )
  }
}
