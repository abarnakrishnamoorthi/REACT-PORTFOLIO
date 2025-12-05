import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import pic from '../../assets/22ITR001-new.jpg';

const About = () => {
    return (
        <div id='about' className="about">

            {/* Title */}
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>

            {/* Main Section */}
            <div className="about-section">
                <div className="about-left">
                    <img src={pic} alt="Profile" />
                </div>

                <div className="about-right">
                    <div className="about-para">
                        <p>I am an experienced developer with a passion for building web applications.</p>
                        <p>I specialize in creating responsive and interactive user interfaces.</p>
                    </div>

                    {/* Skills */}
                    <div className="about-skills">
                        {[
                            { skill: "HTML & CSS", width: "80%" },
                            { skill: "REACT JS", width: "60%" },
                            { skill: "Java", width: "50%" },
                            { skill: "JAVASCRIPT", width: "60%" },
                            { skill: "C", width: "70%" }
                        ].map((item, index) => (
                            <div className="about-skill" key={index}>
                                <p>{item.skill}</p>
                                <hr className="skill-bar" style={{ width: item.width }} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Achievements + Links */}
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

                {/* Figma + Photopea Works Section */}
                <div className="links-section">
                    <h2>My Design Works</h2>

                    <div className="links-grid">

                        {/* Figma Links */}
                        <div className="link-card">
                            <h3>Figma Projects</h3>
                            <a href="https://www.figma.com/proto/eUeMFJepDW7yDlBY4Q2Kst/travel-app-design?node-id=0-1&t=SgXoZgA4hGmXuQCU-1"
                                target="_blank">Travel App Design</a>

                            <a href="https://www.figma.com/proto/vNyNFmuSlJuR1WCoD7UZHj/3D-DONUT-PROTOTYPING?t=SgXoZgA4hGmXuQCU-1"
                                target="_blank">3D Donut Prototyping</a>

                            <a href="https://www.figma.com/design/KaCEsv7AmQtKPw4mTp6NGi/Untitled?m=auto&t=SgXoZgA4hGmXuQCU-6"
                                target="_blank">Untitled UI Design</a>

                            <a href="https://www.figma.com/proto/MF5j9IN9DPYnhtIzP13Fnt/Untitled?node-id=0-1&t=U9njN6CViqDOR1Wl-1"
                                target="_blank">New Prototype Work</a>
                        </div>

                        {/* Photopea Section */}
                        <div className="link-card">
                            <h3>Photopea Designs</h3>
                            <a href="https://drive.google.com/file/d/1r2qqFid8OWGaDAmMbxGqPxCjk6838fzY/view?usp=drive_link">Posters & Editing Works</a>
                            <a href="https://drive.google.com/file/d/1KqjRs123er-VuYUTGgEr_jFxzALPzILR/view?usp=drive_link">UI Mockups</a>
                            <a href="https://drive.google.com/file/d/1W_jHKlSAaM4mvh9hRjFj-3um59pfBm_Z/view?usp=drive_link">Text Styling</a>
                            <a href="#">Graphic Concepts</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
