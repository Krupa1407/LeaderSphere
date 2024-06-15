import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='footer-div'>
        <h4 className='footer-element'>© 2024 LeaderSphere. All rights reserved.</h4>
        <div className='footer-element'>
          <span className='icon'>Follow us on:</span>
          <FontAwesomeIcon icon={faFacebook} className='icon'/>
          <FontAwesomeIcon icon={faTwitter} className='icon'/>
          <FontAwesomeIcon icon={faLinkedin} className='icon'/>
        </div>
        <div className='footer-element'>
          <span className='icon'>Contact: info@leadersphere.com | Phone: +1234567890</span>
          <span>Privacy Policy | Terms of Use</span>
        </div>
    </div>
  )
}

export default Footer;
