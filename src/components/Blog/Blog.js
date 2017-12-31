import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import BlogCover from '../../assets/Pics/Blog_cover.png';
import BlogFeatured from '../../assets/Pics/Blog_featured.png';
import BlogFiller from '../../assets/Pics/Blog_filler.png';
import TwitterFollow from '../../assets/Icons/Twitter.png';
import LinkedInFollow from '../../assets/Icons/Linkedin.png';


export default class Blog extends Component {
  render() {
    return (
      <section className="blog-container">
        <Header />

        <main className="blog-main">
          <section className="cover-top">
            <div className="transparent-mid">
              <h3 className="blog-cover-title">What does Precision Animal Agriculture on a feed yard look like?</h3>
              <h6 className="blog-subtitle">BY: NAME NAME NAME</h6>
              <h5 className="blog-readmore">READ MORE</h5>
            </div>
            <img className="blog-cover" src={BlogCover} alt="Blog Cover" />
          </section>

          <nav className="blog-nav">
            <div className="btn-nav">
              <div className="filter-btn">Feedyard</div>
              <div className="filter-btn">Dairy</div>
              <div className="filter-btn">Stocker</div>
              <div className="filter-btn">Integrator</div>
            </div>
            <div className="search-bar">
              <input type="text" className="search-input" placeholder="SEARCH" alt="search blogs" />
            </div>
          </nav>

          <section className="blog-current">
            <div className="blog-featured">
              <div className="blog-text">
                <h5 className="blog-title-text">Article Title</h5>
                <h6 className="blog-author">BY: NAME NAME NAME</h6>
                <h5 className="blog-date">Date</h5>
              </div>
              <img className="blog-featured-top" src={BlogFeatured} alt="Featured Blog" />
            </div>
          </section>

          <div className="article-section-box">
            <h5 className="article-section-header">LATEST ARTICLE</h5>
          </div>
          <section className="blog-current">
            <div className="blog-latest">
              <div className="blog-box">
                <div className="blog-text">
                  <h5 className="smallerblog-title">Article Title</h5>
                  <h6 className="blog-author">BY: NAME NAME NAME</h6>
                  <h5 className="blog-date">Date</h5>
                </div>
                <img className="blog-new" src={BlogFiller} alt="Latest Blog" />
              </div>
              <div className="blog-box">
                <div className="blog-text">
                  <h5 className="smallerblog-title">Article Title</h5>
                  <h6 className="blog-author">BY: NAME NAME NAME</h6>
                  <h5 className="blog-date">Date</h5>
                </div>
                <img className="blog-new" src={BlogFiller} alt="Latest Blog" />
              </div>
              <div className="blog-box">
                <div className="blog-text">
                  <h5 className="smallerblog-title">Article Title</h5>
                  <h6 className="blog-author">BY: NAME NAME NAME</h6>
                  <h5 className="blog-date">Date</h5>
                </div>
                <img className="blog-new" src={BlogFiller} alt="Latest Blog" />
              </div>
            </div>
          </section>

        <section className="followus-container">
          <div className="followus-box">
            <div className="sm-btn-twitter">
              <img className="twitter-follow" src={TwitterFollow} alt="Follow us on Twitter" width="20px"/>
              <div className="whitebreak"></div>
              <p>Follow us on Twitter</p>
            </div>
            <div className="sm-btn-linkedin">
              <img className="linkedin-follow" src={LinkedInFollow} alt="Follow us on LinkedIn" width="20px"/>
              <div className="whitebreak"></div>
              <p>Follow us on LinkedIn</p>
            </div>
          </div>
        </section>

        <section className="readmore-container">
          <div className="readmore-button">
          <h5 className="readmore-button-header">READ MORE</h5></div>
        </section>

        </main>

        <Footer />
      </section>
    )
  }
}
