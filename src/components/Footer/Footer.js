import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                <div className="footer-nav">
                    <div className="footer-left">
                        <img className="logo-footer" src={Logo} alt="Micro Technologies Logo" />
                    </div>
                    <div className="footer-right">
                        <nav className="social-links">
                            <div className="social-box">
                                <img className="social-icon" src={HR} alt="HR Icon" />
                                <img className="social-icon" src={Knowledge} alt="Knowledge Icon" />
                                <img className="social-icon" src={LinkedIn} alt="LinkedIn Icon" />
                                <img className="social-icon" src={Mail} alt="Mail Icon" />
                                <img className="social-icon" src={Twitter} alt="Twitter Icon" />
                                <Link to='/contact'>
                                <div className="contact-btn">CONTACT</div>
                                </Link>
                            </div>
                        </nav>
                        <div className="terms">
                            <div className="policy-box">
                            <p className="conditions privacy">TERMS & CONDITIONS </p><p className="conditions privacy policy">PRIVACY POLICY</p>
                            </div>
                            <p className="conditions">COPYRIGHT 2017 AMERISOURCEBERGEN CORPORATION. ALL RIGHTS RESERVED.</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
