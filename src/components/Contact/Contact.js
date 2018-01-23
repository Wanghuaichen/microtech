import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import axios from 'axios';
import Dialog from 'material-ui/Dialog';

import Header from '../Header/Header';
import MobileHeader from '../Header/MobileHeader';
import Footer from '../Footer/Footer';

import ContactCover from '../../assets/Pics/Contact_cover.png';
import PhoneIcon from '../../assets/Icons/phone-receiver.png';
import EmailIcon from '../../assets/Icons/large_envelope.png';
import LocationIcon from '../../assets/Icons/facebook-placeholder-for-locate-places-on-maps.png';

// function validate(email, first_name, last_name, phone, message_text) {
//     return {
//         email: email.length === 0,
//         first_name: first_name.length === 0,
//         last_name: last_name.length === 0,
//         phone: phone.length === 0,
//         message_text: message_text === 0
//     };
// }

export default class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            business_name: '',
            business_type: '',
            location_place: '',
            email: '',
            phone: '',
            message_text: '',
            open: false,
            // touched: {
            //     email: false,
            //     first_name: false,
            //     last_name: false,
            //     phone: false,
            //     message_text: false
            // },
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
        // this.canBeSubmitted = this.canBeSubmitted.bind(this);
        // this.handleBlur = this.handleBlur.bind(this);
    }


    handleInputChange(newPartialInput) {
        console.log(newPartialInput)
        this.setState(state => ({
            ...state,
            ...newPartialInput
        }))
    }

    
    handleClose = () => {
        this.setState({open: false});
    };

    // handleBlur = (field) => (e) => {
    //     this.setState({
    //         touched: { ...this.state.touched, [field]: true },
    //     });
    // }

    handleSubmit = (e) => {
        // if (!this.canBeSubmitted()) {
        //     return
        // }
        // get our form data out of state
        const { first_name, last_name, business_name, business_type, location_place, email, phone, message_text } = this.state;

        axios.post('/api/form', { first_name, last_name, business_name, business_type, location_place, email, phone, message_text })
            .then((res) => {
                //access the results here....
                console.log(res);
            });
            this.setState({open: true});
        // alert(`Thank you for reaching out. We will respond back shortly.`);
    }

    // canBeSubmitted() {
    //     const errors = validate(this.state.email, this.state.first_name, this.state.last_name, this.state.phone, this.state.message_text);
    //     const isDisabled = Object.keys(errors).some(x => errors[x]);
    //     return !isDisabled;
    // }


    render() {

        const input = this.state;

        // const errors = validate(this.state.email, this.state.first_name, this.state.last_name, this.state.phone, this.state.message_text);
        // const isDisabled = Object.keys(errors).some(x => errors[x]);

        // const shouldMarkError = (field) => {
        //     const hasError = errors[field];
        //     const shouldShow = this.state.touched[field];

        //     return hasError ? shouldShow : false;
        // };

        return (
            <section className="contact-container-wrapper">

                <Helmet>
                    <title>Contact</title>
                    <meta name="description" content="Contact us by filling out the form below or call us directly at 800.858.4330." />
                </Helmet>

                <Header />
                <MobileHeader />

                <main className="contact-main">
                    <section className="contact-container">
                        <div className="contact-form">
                            <h3 className="contact-spacing">Want to Learn More?</h3>
                            <h6 className="contact-spacing">Contact us by filling out the form below or call us directly at <a className="contact-alink" href="tel:800-858-4330">800.858.4330.</a></h6>
                            <div className="name-box">
                                <div>
                                    <p>First Name *</p>
                                    <input
                                        className="input-one"
                                        // className={shouldMarkError('first_name') ? "error" : "input-one"}
                                        // onBlur={this.handleBlur('first_name')}
                                        alt="input first name"
                                        value={input.first_name}
                                        onChange={e => this.handleInputChange({ first_name: e.target.value })} />
                                </div>

                                <div>
                                    <p>Last Name *</p>
                                    <input
                                        className="input-one"
                                        // className={shouldMarkError('last_name') ? "error" : "input-one"}
                                        // onBlur={this.handleBlur('last_name')}
                                        alt="input last name"
                                        value={input.last_name}
                                        onChange={e => this.handleInputChange({ last_name: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-field">
                                <p>Business Name</p>
                                <input className="input-one" alt="input business name" value={input.business_name} onChange={e => this.handleInputChange({ business_name: e.target.value })} />
                            </div>
                            <div className="input-field">
                                <p>Business Type</p>
                                <div className="radio-input">
                                    <div className="radio-box">
                                        <input type="radio" name="radio" value={'Dairy'} onChange={e => this.handleInputChange({ business_type: e.currentTarget.value })} />
                                        <p className="radio-option">Dairy</p>
                                    </div>
                                    <div className="radio-box">
                                        <input type="radio" name="radio" value={'Stocker'} onChange={e => this.handleInputChange({ business_type: e.currentTarget.value })} />
                                        <p className="radio-option">Stocker</p>
                                    </div>
                                    <div className="radio-box">
                                        <input type="radio" name="radio" value={'Feedyard'} onChange={e => this.handleInputChange({ business_type: e.currentTarget.value })} />
                                        <p className="radio-option">Feedyard</p>
                                    </div>
                                    <div className="radio-box">
                                        <input type="radio" name="radio" value={'Integrator'} onChange={e => this.handleInputChange({ business_type: e.currentTarget.value })} />  <p className="radio-option">Integrator</p>
                                    </div>
                                </div>

                            </div>

                            <div className="input-field">
                                <p>Location</p>
                                <input className="input-one" alt="input location" value={input.location_place} onChange={e => this.handleInputChange({ location_place: e.target.value })} />
                            </div>
                            <div className="input-field">
                                <p>Email Address *</p>
                                <input
                                    className="input-one"
                                    // className={shouldMarkError('email') ? "error" : "input-one"}
                                    // onBlur={this.handleBlur('email')}
                                    alt="input email address"
                                    value={input.email}
                                    onChange={e => this.handleInputChange({ email: e.target.value })} />
                            </div>

                            <div className="input-field">
                                <div className="phone-input">
                                    <p>Phone *</p>
                                    <input
                                        className="input-one"
                                        // className={shouldMarkError('phone') ? "error" : "input-one"}
                                        // onBlur={this.handleBlur('phone')}
                                        alt="input phone number"
                                        placeholder="(555)555-5555"
                                        value={input.phone}
                                        onChange={e => this.handleInputChange({ phone: e.target.value })} />
                                    {/* <input className="input-three" alt="input phone number" placeholder="000" value={input.phone} onChange={e => this.handleInputChange({phone: e.target.value})} /> 
                                    <input className="input-three" alt="input phone number" placeholder="0000" value={input.phone} onChange={e => this.handleInputChange({phone: e.target.value})} />  */}
                                </div>
                            </div>
                            <div className="input-field">
                                <p>How can we help you today? *</p>
                                <textarea
                                    className="input-four"
                                    // className={shouldMarkError('message_text') ? "error" : "input-four"}
                                    // onBlur={this.handleBlur('message_text')}
                                    alt="input how we can help"
                                    value={input.message_text}
                                    onChange={e => this.handleInputChange({ message_text: e.target.value })} />
                            </div>
                            {/* <div className="submit-btn" onClick={(e) => this.handleSubmit(e)} disabled={isDisabled}>SUBMIT</div> */}
                            <div className="submit-btn" onClick={(e) => this.handleSubmit(e)} >
                                <Dialog
                                    modal={false}
                                    open={this.state.open}
                                    onRequestClose={this.handleClose}
                                >
                                    <h6>Thank you for reaching out. We will respond back shortly.</h6>
                                </Dialog>

                                SUBMIT</div>

                        </div>

                        <img className="contact-photo" src={ContactCover} alt="Warehouse" />

                    </section>

                </main>

                <div className="contact-banner">
                    <h3 className="contact-header">Contact Us</h3>
                    <div className="contact-line"></div>
                    <div className="contact-mobile-box">
                        <div className="contact-icons">
                            <img className="contact-icon" src={PhoneIcon} alt="phone icon" />
                            <img className="contact-icon" src={EmailIcon} alt="email icon" />
                            <img className="contact-icon" src={LocationIcon} alt="location icon" />
                        </div>
                        <div className="contact-info">
                            <h4 className="contact-subheader"><a className="contact-alink-white" href="tel:800-858-4330">800.858.4330.</a></h4>
                            <h4 className="contact-subheader"><a className="contact-alink-white" href="mailto:Info@MicroTechnologies.com">Info@MicroTechnologies.com</a></h4>
                            <h4 className="contact-subheader address">8701 Centerport Blvd, Amarillo, TX 79108</h4>
                        </div>
                    </div>
                </div>

                <Footer />
            </section>
        )
    }
}
