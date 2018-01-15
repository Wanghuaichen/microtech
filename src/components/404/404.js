import React, { Component } from 'react';

import Header from '../Header/Header';
import MobileHeader from '../Header/MobileHeader';
import Footer from '../Footer/Footer';

import Cows404 from '../../assets/Pics/404.png';

export default class FourOhFour extends Component {
    render() {
        return (
            <section className="fourohfour-container">

                <Header />
                <MobileHeader />

                <header className="fourohfour-box">
                    <h2 className="fourohfour-header">404 - Page Not Found!</h2>
                    <img className="fourohfour-image" src={Cows404} alt="404 page" />
                </header>

                <Footer />
            </section>
        )
    }
}
