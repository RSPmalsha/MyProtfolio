import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section id='contact'>
      <div className='contactContent'>
        <h2 className='contactTitle'>Contact Me</h2>
        <div className='contactDetails'>
          <p className='contactItem'>
            <strong>Phone Number:</strong> +94 788958083
          </p>
          <p className='contactItem'>
            <strong>Email:</strong> <a href='mailto:kavshanmalsha@gmail.com'>kavshanmalsha@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
