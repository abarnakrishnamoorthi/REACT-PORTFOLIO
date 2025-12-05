import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import git from '../../assets/git.png';
import image from '../../assets/image.png';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "9e036a58-0bd2-4243-b026-50a5698a6e3b");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });
            
            const result = await res.json();
            
            if (result.success) {
                alert(result.message);
            } else {
                alert(`Error: ${result.message}`);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("There was an error submitting the form. Please try again later.");
        }
    };

    return (
        <div id='contact' className="contact">
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="Theme Pattern" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="Mail Icon" />
                            <p>abarnak.22it@kongu.edu</p>
                        </div>
                        <div className="contact-detail">
    <img src={image} alt="LinkedIn Icon" />
    <p>
        <a href="https://www.linkedin.com/in/abarna-krishnamoorthi-320391259/" target="_blank" rel="noopener noreferrer" className="contact-link">
            LinkedIn Profile
        </a>
    </p>
</div>
<div className="contact-detail">
    <img src={git} alt="GitHub Icon" />
    <p>
        <a href="https://github.com/abarnakrishnamoorthi" target="_blank" rel="noopener noreferrer" className="contact-link">
            GitHub Profile
        </a>
    </p>
</div>


                        <div className="contact-detail">
                            <img src={location_icon} alt="Location Icon" />
                            <p>India, Tamil Nadu, Ariyalur</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="Call Icon" />
                            <p>8148833594</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" placeholder="Enter your name" name="name" />
                    <label htmlFor="email">Your Email</label>
                    <input type="email" placeholder="Enter your email" name="email" />
                    <label htmlFor="message">Write your message here</label>
                    <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
                    <button type="submit" className="contact-submit">Submit now</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
