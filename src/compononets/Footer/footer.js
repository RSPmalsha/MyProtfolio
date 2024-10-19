import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='footerContent'>
        <div className='footerLinks'>
        <a href='https://www.linkedin.com/in/malsha-kaweshan-1767172bb/' target='_blank' rel='noopener noreferrer'>
        LinkedIn
            <i className='fab fa-linkedin'></i>
          </a>
          <a href='https://github.com/RSPmalsha' target='_blank' rel='noopener noreferrer'>
            GitHub
            <i className='fab fa-github'></i>
          </a>
          <a href='kavshanmalsha@gmail.com'>
            Email Me
            <i className='fas fa-envelope'></i>
          </a>
        </div>
        <p className='footerText'>
          © 2024 Malsha. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
