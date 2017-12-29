import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default class Blog extends Component {
  render() {
    return (
      <section className="blog-container">
        <Header />

        <main className="blog-main">
          blog!       
        </main>

        <Footer />
      </section>
    )
  }
}
