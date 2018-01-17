// dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import Carousel from 'nuka-carousel';
import {Helmet} from "react-helmet";

// components
import Header from '../Header/Header';
import MobileHeader from '../Header/MobileHeader';
import Footer from '../Footer/Footer';
import Loading from '../Loading/Loading';

// images
import HomeHero from '../../assets/Pics/HomeHero.png';
import HomeHero2 from '../../assets/Pics/HeroHome2.png';
import StockerIcon from '../../assets/Icons/Stocker.png';
import FeedyardIcon from '../../assets/Icons/Feedyard.png';
import DairyIcon from '../../assets/Icons/dairy.png';
import IntegratorIcon from '../../assets/Icons/Integrator.png';
import InnovationIcon from '../../assets/Icons/Innovation.png';
import ValueIcon from '../../assets/Icons/Value.png';
import ServiceIcon from '../../assets/Icons/Service.png';
import Passionate from '../../assets/Pics/4th-Container-Photo.jpg';
import MobileHome from '../../assets/Pics/MobileHome.png';


export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
      isLoading: true
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal() {
    this.setState({ isOpen: false })
  }

  componentDidMount() { 
    // setTimeout( () =>  this.setState ({isLoading: false}), 750)

    this.setState({isLoading: false})
    
  };


  
  render() {
    return (

      this.state.isLoading ? <Loading /> : 
      
      <section className="home-container">
      

        <Helmet>
          <title>Micro Technologies</title>
          <meta name="description" content="We innovate technologies that empower food producers to grow a safe, wholesome food supply more efficiently and more profitably." />
        </Helmet>

        <Header />
        <MobileHeader />

        <main className="slider-home">
          
          <img className="mobile-home" src={MobileHome} alt="Micro Technologies Home" />

          <Carousel decorators={false} autoplay={true}
            wrapAround={true} speed={600} >
            <img src={HomeHero} alt="Home Cow Cover" onLoad={() => { window.dispatchEvent(new Event('resize')); }} />
            <img src={HomeHero2} alt="Home Cow Cover" onLoad={() => { window.dispatchEvent(new Event('resize')); }} />
          </Carousel>

          <div className="slider-text">
            <header className="center-box">
              <h3 className="vision-text">We innovate technologies that empower food producers to grow a safe, wholesome food supply more efficiently and more profitably.</h3>

              <ModalVideo className="modal-video" channel='youtube' isOpen={this.state.isOpen} videoId='wUlPN0sZffY' onClose={() => this.setState({ isOpen: false })} />
              <h6 className="main-cta" onClick={this.openModal}>WATCH VIDEO</h6>
              
            </header>
          </div>
        </main>

        <section className="icon-animal-box">
          <div className="icon-box">
            <h4 className="icon-header">Now more than ever, food producers need to spend more time managing animal health, nutrition, and cost-benefit in order to meet the challenge of feeding a growing, hungry world with fewer resources. We innovate the solutions to make it easier.</h4>
            <h6 className="icon-subheader">Learn how customers use our technology to improve all aspects of their daily operations.</h6>
          </div>

          <section className="animal-icons">
            <Link to="/stocker">
              <div className="animal-box">
                <img className="animal" src={StockerIcon} alt="Stocker Icon" height="111px" />
                <h4 className="animal-text">STOCKER</h4>
              </div>
            </Link>
            <Link to="/feedyard">
              <div className="animal-box">
                <img className="animal" src={FeedyardIcon} alt="Feedyard Icon" height="111px" />
                <h4 className="animal-text">FEEDYARD</h4>
              </div>
            </Link>
            <Link to="/dairy">
              <div className="animal-box">
                <img className="animal" src={DairyIcon} alt="Dairy Icon" height="111px" />
                <h4 className="animal-text">DAIRY</h4>
              </div>
            </Link>
            <Link to="/integrator">
              <div className="animal-box">
                <img className="animal" src={IntegratorIcon} alt="Integrator Icon" height="111px" />
                <h4 className="animal-text">INTEGRATOR</h4>
              </div>
            </Link>
          </section>
        </section>

        <section className="bluebanner-box">
          <div className="bluebanner-left">
            <h4>SINCE</h4>
            <h1 className="bluebanner-header">1971</h1>
          </div>
          <div className="bluebanner-est">
            <h4>EST.</h4>
          </div>
          <div className="bluebanner-right">
            <p className="bluebanner-text">
              Since 1971, we continue to be the leading provider of advanced, comprehensive and integrated animal management systems and solutions.</p>
            <br></br>
            <p className="bluebanner-text">
              We have established an unparalleled track record of delivering meaningful technology solutions based upon a business philosophy centered around three key principles: innovation, value creation and service.
            </p>
          </div>
        </section>



        <section className="mission-boxes">

          <div className="flip-container">
            <div className="mission-box flipper">
              <div className="front">
                <img className="mission-gear" src={InnovationIcon} alt="Innovation Icon" width="100px" />
                <h4>INNOVATION</h4>
              </div>
              <div className="back">
                <h4 className="back-header">INNOVATION</h4>
                <p className="back-numbers">20%</p>
                <div className="back-line"></div>
                <p className="back-para">20% of every dollar earned is reinvested in research + development</p>
              </div>
            </div>
          </div>

          <div className="flip-container">
            <div className="mission-box flipper">
              <div className="front">
                <img className="mission-value" src={ValueIcon} alt="Value Creation Icon" width="100px" />
                <h4>VALUE CREATION</h4>
              </div>
              <div className="back">
                <h4 className="back-header">VALUE CREATION</h4>
                <p className="back-numbers">20</p>
                <div className="back-line"></div>
                <p className="back-para">More than 20 useful inventions for animal agriculture</p>
              </div>
            </div>
          </div>

          <div className="flip-container">
            <div className="mission-box flipper">
              <div className="front">
                <img className="mission-service" src={ServiceIcon} alt="Service Icon" height="100px" />
                <h4>SERVICE</h4>
              </div>
              <div className="back">
                <h4 className="back-header">SERVICE</h4>
                <p className="back-numbers">25</p>
                <div className="back-line"></div>
                <p className="back-para">The average length of our customer relationship is 25 years and growing</p>
              </div>
            </div>
          </div>
        </section>

        <section className="fourth-main">
          <img className="fourth-container" src={Passionate} alt="Micro Technologies Cow" />
          <div className="fourth-text">
            <div className="center-container">
              <h3 className="fourth-header four">We are passionate about making a difference.</h3>
              <p className="fourth-para four">As the world's population grows, we are challenged to produce more higher-quality protein than ever before with the use of less natural resources. We believe the path to securing a safe, affordable and wholesome food supply will come primarily as a result of innovation. That is why we are committed to developing technologies to empower food producers, both as business owners and stewards.</p>
              <br></br>
              <p className="fourth-para four">Learn more about Our Why and the passion that drives our everyday actions.</p>
              <Link to='/about'>
                <div className="res-cta four">OUR RESPONSIBILITY</div>
              </Link>
            </div>
          </div>
        </section>
        
        <Footer />
      </section>
    )
    
  }
}
