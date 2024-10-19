import React from 'react';
import './intro.css';
import bg from '../../assest/bg.png';

const Intro = () => {
  return (
    <section id='intro'>
      <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introText'>I'm <span className='introName'>Malsha</span><br />Web Developer</span>
        <p className='intropara'>I am a skilled web designer creating visually appealing and user-friendly websites.</p>
      </div>
      <img src={bg} alt='portfolio' className='bg' />
    </section>
  );
};

export default Intro;
