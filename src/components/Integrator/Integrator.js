import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default class Integrator extends Component {
  render() {
    return (
      <section className="integrator-container">
        <Header />

            <main className="integrator-main">
             integrator!       
            </main>

            <Footer />
        </section>
    )
  }
}
