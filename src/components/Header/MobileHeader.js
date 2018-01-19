import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';

import LogoIcon from '../../assets/Logos/MicroTech_MED.jpg';
// import LogoIcon from '../../assets/Logos/Mirco_icon.png';
import MenuIcon from '../../assets/Icons/menu.svg';


export default class MobileHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.handleToggle = this.handleToggle.bind(this);
        this.closeDrawer = this.closeDrawer.bind(this);
    }


    handleToggle = () => this.setState({ open: !this.state.open });

    closeDrawer() { this.setState({ open: false }) }


    render() {
        return (
            <section className="mobile-header-container">
                <div className="menu-container">
                    <div className="logo-icon">
                        <Link to='/'>
                        <img className="logo-icon-image" src={LogoIcon} alt="Micro Technologies Icon"/></Link>
                    </div>
                    <div className="menu-box">
                    <IconButton
                        className="btn-mui"
                        onClick={this.handleToggle}
                    ><img className="menu-hamburger" src={MenuIcon} alt="menu navigation" /></IconButton>
                    </div>
                </div>
                <Drawer open={this.state.open} docked={false} openSecondary={true} className="menu-drawer" onRequestChange={this.closeDrawer}>
                    <Link to='/'>
                    <MenuItem value={1} primaryText="Home" /></Link>
                    <Link to='/stocker'><MenuItem value={2} primaryText="Stocker" /></Link>
                    <Link to='/feedyard'><MenuItem value={3} primaryText="Feedyard" /></Link>
                    <Link to='/dairy'><MenuItem value={4} primaryText="Dairy" /></Link>
                    <Link to='/integrator'><MenuItem value={5} primaryText="Integrator" /></Link>
                    <Link to='/difference'><MenuItem value={7} primaryText="The Micro Difference" /></Link>
                    <Link to='/about'><MenuItem value={8} primaryText="About" /></Link>
                    <Link to='/blog'><MenuItem value={9} primaryText="Knowledge Base" /></Link>
                    <Link to='/careers'><MenuItem value={10} primaryText="Careers" /></Link>
                    <Link to='/contact'><MenuItem value={6} primaryText="Contact" /></Link>
                </Drawer>
            </section>
        )
    }
}
