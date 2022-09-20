import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="social_section">
          <p className="social_text">FOLLOW STAR WARS:</p>
          <div className="social">
            <ul className="social_links">
              <li className="list_item">
                <a href="">
                  <i className="fa fa-facebook-official" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa fa-youtube-play" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
            <div className="social_kids">
              <span className="social_kids_span">kids</span>
            </div>
          </div>
        </div>
        <div className="info_section">
          <p className="copy">TM & © Lucasfilm Ltd. All Rights Reserved</p>
          <ul className="legal">
            <li className="legal_link">
              <a href="#">Terms of Use</a>
            </li>
            <li className="legal_link">
              <a href="#">Additional Content Information</a>
            </li>
            <li className="legal_link">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="legal_link">
              <a href="#">Children’s Online Privacy Policy</a>
            </li>
            <li className="legal_link">
              <a href="#">Your California Privacy Rights</a>
            </li>
            <li className="legal_link">
              <a href="#">Star Wars at shopDisney</a>
            </li>
            <li className="legal_link">
              <a href="#">Interest-Based Ads</a>
            </li>
            <li className="legal_link">
              <a href="#">Star Wars Helpdesk</a>
            </li>{' '}
            <li className="legal_link">
              <a href="#">Do Not Sell My Personal Information</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer
