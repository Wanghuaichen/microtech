import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default class Conact extends Component {
    render() {
        return (
        <section className="contact-container">
        <Header />

            <main className="contact-main">
             contact!       
            </main>

            <Footer />
        </section>
        )
    }
}
