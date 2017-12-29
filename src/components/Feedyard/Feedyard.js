import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default class Feedyard extends Component {
  render() {
    return (
      <section className="feedyard-container">
        <Header />

            <main className="feedyard-main">
             feedyard!       
            </main>

            <Footer />
        </section>
    )
  }
}
