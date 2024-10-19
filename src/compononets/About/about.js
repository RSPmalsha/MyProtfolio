import React from 'react';
import './about.css';
import aboutImage from '../../assest/aboutImage.png';

const About = () => {
  return (
    <section id='about'>
      <div className='aboutContent'>
        <h2 className='aboutTitle'>About Me</h2>
        <p className='aboutText'>
        I have a strong background in front-end development, with expertise in HTML, CSS, and JavaScript, as well as experience working with popular frameworks like React and Angular. I enjoy solving complex problems and optimizing web performance to deliver seamless experiences. I am also committed to continuous learning and staying up-to-date with the latest web development trends and best practices to ensure the projects I work on are cutting-edge and innovative.
        </p>
      </div>
      <img src={aboutImage} alt='about' className='aboutImage' />
    </section>
  );
};

export default About;
