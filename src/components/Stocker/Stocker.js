import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default class Stocker extends Component {
  render() {
    return (
      <section className="stocker-container">
        <Header />

            <main className="stocker-main">
             stocker!       
            </main>

            <Footer />
        </section>
    )
  }
}
