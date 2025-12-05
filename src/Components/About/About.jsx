import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import pic from '../../assets/22ITR001-new.jpg';
const About = () => {
    return (
        <div id='about' className="about">
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={pic} alt="Profile" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am an experienced developer with a passion for building web applications.</p>
                        <p>I specialize in creating responsive and interactive user interfaces.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p>
                            <hr className="skill-bar" style={{ width: "80%" }} />
                        </div>
                        <div className="about-skill">
                            <p>REACT JS</p>
                            <hr className="skill-bar" style={{ width: "60%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Java</p>
                            <hr className="skill-bar" style={{ width: "50%" }} />
                        </div>
                        <div className="about-skill">
                            <p>JAVASCRIPT</p>
                            <hr className="skill-bar" style={{ width: "60%" }} />
                        </div>
                        <div className="about-skill">
                            <p>C</p>
                            <hr className="skill-bar" style={{ width: "70%" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achievements-container">
                <div className="about-achievements">
                    <h1>2+</h1>
                    <p>Years of Coding Experience</p>
                </div>
               
                
                <hr />
                <div className="about-achievements">
                    <h1>3+</h1>
                    <p>Workshops Attended</p>
                </div>
            </div>
        </div>
    );
};

export default About;
