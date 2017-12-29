import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default class Dairy extends Component {
  render() {
    return (
      <section className="dairy-container">
        <Header />

            <main className="dairy-main">
             dairy!       
            </main>

            <Footer />
        </section>
    )
  }
}
