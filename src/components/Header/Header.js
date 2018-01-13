import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MetaTags from 'react-meta-tags';

import Logo from '../../assets/Logos/MicroTech_MED.jpg'

export default class Header extends Component {
  render() {
    return (
      <header className="header-home">

        <MetaTags>
          <title>Micro Technologies Navigation</title>
          <meta name="description" content="Stocker, Feedyard, Dairy, Integrator, Contact, The Micro Difference, About, Knowledge Base, Careers" />
        </MetaTags>

        <div className="header-nav">
          <div className="logo-container">
            <Link to="/">
              <img className="logo" src={Logo} alt="Micro Technologies Logo" />
            </Link>
          </div>
          <nav className="nav-links">
            <ul>
              <Link to="/stocker"><li className="nav-hover">STOCKER</li></Link>
              <Link to="/feedyard"><li className="nav-hover">FEEDYARD</li></Link>
              <Link to="/dairy"><li className="nav-hover">DAIRY</li></Link>
              <Link to="/integrator"><li className="nav-hover">INTEGRATOR</li></Link>
              <Link to='/contact'><li className="white-btn">CONTACT</li></Link>
            </ul>
          </nav>
        </div>
        <div className="sub-header">
          <nav className="nav-sublinks">
            <ul>
              <Link to="/difference"><li className="sub">THE MICRO DIFFERENCE</li ></Link>
              <Link to="/about"><li className="sub">ABOUT</li></Link>
              <Link to="/blog"><li className="sub">KNOWLEDGE BASE</li></Link>
              <Link to="/careers"><li className="sub">CAREERS</li></Link>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}
