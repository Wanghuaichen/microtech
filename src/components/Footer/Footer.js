import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";

import Logo from '../../assets/Logos/MicroTech_MED.jpg'
import HR from '../../assets/Icons/HR_white.png';
import Knowledge from '../../assets/Icons/Knowledgedriven_white.png';
import LinkedIn from '../../assets/Icons/Linkedin_white.png';
import Mail from '../../assets/Icons/Mail_white.png';
import Twitter from '../../assets/Icons/Twitter_white.png';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer-home">

                <Helmet>
                    <title>Micro Technologies</title>
                    <meta name="description" content="We innovate technologies that empower food producers to grow a safe, wholesome food supply more efficiently and more profitably." />
                </Helmet>

                <div className="footer-nav">
                    <div className="footer-left">
                        <Link to="/">
                            <img className="logo-footer" src={Logo} alt="Micro Technologies Logo" />
                        </Link>
                    </div>
                    <div className="footer-right">
                        <nav className="social-links">
                            <div className="social-box">

                                <Link to="/careers">
                                    <img className="social-icon" src={HR} alt="HR Icon" /></Link>

                                <Link to="/blog">
                                    <img className="social-icon" src={Knowledge} alt="Knowledge Icon" /></Link>

                                <a href="https://www.linkedin.com/company/487996/" rel="noopener noreferrer" target="_blank">
                                    <img className="social-icon" src={LinkedIn} alt="LinkedIn Icon" /></a>

                                <Link to="/contact">
                                    <img className="social-icon" src={Mail} alt="Mail Icon" /></Link>

                                <a href="https://twitter.com/Innovation_MT?lang=en" rel="noopener noreferrer" target="_blank">
                                    <img className="social-icon" src={Twitter} alt="Twitter Icon" /></a>

                                <Link to='/contact'>
                                    <div className="contact-btn">CONTACT</div>
                                </Link>
                            </div>
                        </nav>
                        <div className="terms">
                            <div className="policy-box">
                                <p className="conditions privacy">TERMS & CONDITIONS </p>
                                <Link to="/policy">
                                    <p className="conditions privacy policy">PRIVACY POLICY</p></Link>
                            </div>
                            <p className="conditions">COPYRIGHT 2018 AMERISOURCEBERGEN CORPORATION. ALL RIGHTS RESERVED.</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
