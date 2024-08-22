import React from 'react';
import './Hero.css';
import pic from '../../assets/pic.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={pic} alt="Hero" />
            <h1><span>ABARNA KRISHNAMOORTHI</span>  </h1>
            <p>
            
    I am a full-stack developer from India, skilled in HTML, CSS, JavaScript, React, and back-end technologies, 
    building responsive and integrated web applications.

</p>

            <div className='hero-action'>
                <div className='hero-connect'>
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
                </div>
                <div className='hero-resume'>
                    <a href='resumee.pdf' target='_blank' rel='noopener noreferrer'>My Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
