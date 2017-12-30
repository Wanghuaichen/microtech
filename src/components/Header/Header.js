import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import Logo from '../../assets/Logos/MicroTech_MED.jpg'

export default class Header extends Component {
  render() {
    return (
      <header className="header-home">
        <div className="header-nav">
          <div className="logo-container">
            <Link to="/">
            <img className="logo" src={Logo} alt="Micro Technologies Logo" />
            </Link>
          </div>
          <nav className="nav-links">
            <ul>
              <Link to="/stocker"><li>STOCKER</li></Link>
              <Link to="/feedyard"><li>FEEDYARD</li></Link>
              <Link to="/dairy"><li>DAIRY</li></Link>
              <Link to="/integrator"><li>INTEGRATOR</li></Link>
              <Link to='/contact'><li className="white-btn">CONTACT</li></Link>
            </ul>
          </nav>
        </div>
        <div className="sub-header">
          <nav className="nav-sublinks">
            <ul>
              <Link to="/difference"><li>THE MICRO DIFFERENCE</li></Link>
              <Link to="/about"><li>ABOUT</li></Link>
              <Link to="/blog"><li>KNOWLEDGE BASE</li></Link>
              <Link to="/careers"><li>CAREERS</li></Link>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}
