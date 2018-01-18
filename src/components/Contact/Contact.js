import React, { Component } from 'react';
import {Helmet} from "react-helmet";

import Header from '../Header/Header';
import MobileHeader from '../Header/MobileHeader';
import Footer from '../Footer/Footer';

import ContactCover from '../../assets/Pics/Contact_cover.png';
import PhoneIcon from '../../assets/Icons/phone-receiver.png';
import EmailIcon from '../../assets/Icons/large_envelope.png';
import LocationIcon from '../../assets/Icons/facebook-placeholder-for-locate-places-on-maps.png';

export default class Contact extends Component {

    constructor(props){
        super(props);
            this.state ={
                input: {
                    firstName: '',
                    lastName: '',
                    businessName: '',
                    businessType: '',
                    location: '',
                    email: '',
                    phone: '',
                    message: ''
                },
                blurred: {
                    email: false,
                    name: false
                }
            }
            this.handleInputChange = this.handleInputChange.bind(this);
            this.handleBlur = this.handleBlur.bind(this);
            // this.handleSubmit = this.handleSubmit.bind(this);
        }


        handleInputChange(newPartialInput) {
            this.setState(state => ({
                ...state,
                input: {
                    ...state.input,
                    ...newPartialInput
                }
            }))
        }

        handleBlur(fieldName) {
            this.setState(state => ({
                ...state,
                blurred: {
                    ...state.blurred,
                    [fieldName]: true
                }
            }))
        }

    //     handleSubmit = (e) => {
    //         e.preventDefault();
    //         // get our form data out of state
    //         const { fname, lname, email } = this.state;
    
    //         axios.post('/', { fname, lname, email })
    //           .then((result) => {
    //             //access the results here....
    //           });
    //       }

    // validate() {
        // const {input, blurred} = this.state;

    //     const errors = {};
    //     const {input} = this.state;
        
    //     if (!input.email) {
    //         errors.email = 'Email is required';
    //     } else if (!isEmailValid(input.email)) {
    //         errors.email = 'Please enter a valid email';
    //     }

    //     if (!input.firstName) {
    //         errors.firstName = 'Name is required';
    //     }

    //     return {
    //         errors,
    //         isValid: Object.keys(errors).length === 0
    //     };
    // }

    render() {

        const {input} = this.state;
        // const {errors, isValid} = this.validate();

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
                                    <input className="input-one" alt="input first name"                 onBlur={() => this.handleBlur('name')} value={input.firstName} onChange={e => this.handleInputChange({firstName: e.target.value})} />
                                </div>
                                {/* {blurred.name && !!errors.name && <span>{errors.name}</span>} */}

                                <div>
                                    <p>Last Name *</p>
                                    <input className="input-one" alt="input last name" value={input.lastName} onChange={e => this.handleInputChange({lastName: e.target.value})} />
                                </div>
                            </div>
                            <div className="input-field">
                                <p>Business Name</p>
                                <input className="input-one" alt="input business name" value={input.businessName} onChange={e => this.handleInputChange({businessName: e.target.value})} />
                            </div>
                            <div className="input-field">
                                <p>Business Type</p>
                                <div className="radio-input">
                                    <div className="radio-box">
                                        <input type="radio" name="type" value={input.businessType} onChange={e => this.handleInputChange({businessType: e.target.value})} /> 
                                        <p className="radio-option">Dairy</p>
                                    </div>
                                    <div className="radio-box">
                                        <input type="radio" name="type" value={input.businessType} onChange={e => this.handleInputChange({businessType: e.target.value})} /> 
                                         <p className="radio-option">Stocker</p>
                                    </div>
                                    <div className="radio-box">
                                        <input type="radio" name="type" value={input.businessType} onChange={e => this.handleInputChange({businessType: e.target.value})} /> 
                                        <p className="radio-option">Feedyard</p>
                                    </div>
                                    <div className="radio-box">
                                        <input type="radio" name="type" value={input.businessType} onChange={e => this.handleInputChange({businessType: e.target.value})} />  <p className="radio-option">Integrator</p>
                                    </div>
                                </div>

                            </div>

                            <div className="input-field">
                                <p>Location</p>
                                <input className="input-one" alt="input location" value={input.location} onChange={e => this.handleInputChange({location: e.target.value})} /> 
                            </div>
                            <div className="input-field">
                                <p>Email Address *</p>
                                <input className="input-one" alt="input email address"                 onBlur={() => this.handleBlur('email')} value={input.email} onChange={e => this.handleInputChange({email: e.target.value})}/>
                            </div>
                            {/* {!!errors.email && <span>{errors.email}</span>} */}

                            <div className="input-field">
                                <div className="phone-input">
                                    <p>Phone *</p>
                                    <input className="input-three" alt="input phone number" placeholder="(000)" value={input.phone} onChange={e => this.handleInputChange({phone: e.target.value})} /> 
                                    <input className="input-three" alt="input phone number" placeholder="000" value={input.phone} onChange={e => this.handleInputChange({phone: e.target.value})} /> 
                                    <input className="input-three" alt="input phone number" placeholder="0000" value={input.phone} onChange={e => this.handleInputChange({phone: e.target.value})} /> 
                                </div>
                            </div>
                            <div className="input-field">
                                <p>How can we help you today? *</p>
                                <textarea className="input-four" alt="input how we can help" value={input.message} onChange={e => this.handleInputChange({message: e.target.value})} /> 
                            </div>
                            <div className="submit-btn" onClick={ () => alert('Backend under construction. Please call 800.858.4330 or email Info@MicroTechnologies.com for any inquiries.') } type="submit" >SUBMIT</div>
                            {/* <div className="submit-btn" onSubmit={() => {console.log(input)}} type="submit" disabled={!isValid}>SUBMIT</div> */}
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
