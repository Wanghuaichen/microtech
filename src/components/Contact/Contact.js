import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import ContactCover from '../../assets/Pics/Contact_cover.png';
import PhoneIcon from '../../assets/Icons/phone-receiver.png';
import EmailIcon from '../../assets/Icons/large_envelope.png';
import LocationIcon from '../../assets/Icons/facebook-placeholder-for-locate-places-on-maps.png';

export default class Conact extends Component {
    render() {
        return (
            <section className="contact-container">

                <MetaTags>
                    <title>Contact</title>
                    <meta name="description" content="Contact us by filling out the form below or call us directly at 800.858.4330." />
                </MetaTags>

                <Header />

                <main className="contact-main">
                    <section className="contact-container">
                        <div className="contact-form">
                            <h3 className="contact-spacing">Want to Learn More?</h3>
                            <h6 className="contact-spacing">Contact us by filling out the form below or call us directly at 800.858.4330.</h6>
                            <div className="name-box">
                                <div>
                                    <p>First Name *</p>
                                    <input className="input-one" alt="input first name" />
                                </div>
                                <div>
                                    <p>Last Name *</p>
                                    <input className="input-one" alt="input last name" />
                                </div>
                            </div>
                            <div className="input-field">
                                <p>Business Name</p>
                                <input className="input-one" alt="input business name" />
                            </div>
                            <div className="input-field">
                                <p>Business Type</p>
                                <div className="radio-input">

                                    <input type="radio" name="type" value="dairy" /> <p className="radio-option">Dairy</p>
                                    <input type="radio" name="type" value="stocker" /> <p className="radio-option">Stocker</p>
                                    <input type="radio" name="type" value="feedyard" /> <p className="radio-option">Feedyard</p>
                                    <input type="radio" name="type" value="integrator" /> <p className="radio-option">Integrator</p>
                                </div>

                            </div>

                            <div className="input-field">
                                <p>Location</p>
                                <input className="input-one" alt="input location" />
                            </div>
                            <div className="input-field">
                                <p>Email Address *</p>
                                <input className="input-one" alt="input email address" />
                            </div>
                            <div className="input-field">
                                <div className="phone-input">
                                    <p>Phone *</p>
                                    <input className="input-three" alt="input phone number" placeholder="(000)" />
                                    <input className="input-three" alt="input phone number" placeholder="000" />
                                    <input className="input-three" alt="input phone number" placeholder="0000" />
                                </div>
                            </div>
                            <div className="input-field">
                                <p>How can we help you today? *</p>
                                <textarea className="input-four" alt="input how we can help" />
                            </div>
                            <div className="submit-btn">SUBMIT</div>
                        </div>

                        <img className="contact-photo" src={ContactCover} alt="Warehouse" />

                    </section>

                </main>

                <div className="contact-banner">
                    <h3 className="contact-header">Contact Us</h3>
                    <div className="contact-line"></div>
                    <div className="contact-icons">
                        <img className="contact-icon" src={PhoneIcon} alt="phone icon" />
                        <img className="contact-icon" src={EmailIcon} alt="email icon" />
                        <img className="contact-icon" src={LocationIcon} alt="location icon" />
                    </div>
                    <div className="contact-info">
                        <h4 className="contact-subheader">800.858.4330</h4>
                        <h4 className="contact-subheader">Info@MicroTechnologies.com</h4>
                        <h4 className="contact-subheader address">8701 Centerport Blvd, Amarillo, TX 79108</h4>
                    </div>
                </div>

                <Footer />
            </section>
        )
    }
}
