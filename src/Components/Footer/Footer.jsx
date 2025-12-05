import React, { useState } from 'react';
import './Footer.css';
import download from '../../assets/download.jpeg';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = () => {
        // Here you can add the logic to handle the subscription, e.g., sending the email to your backend
        setSubscribed(true);
    };

    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                <img src={download} alt="User Icon" />
                    <p>I am a full-stack developer from India.</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="User Icon" />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="footer-subscribe" onClick={handleSubscribe}>
                        Subscribe
                    </div>
                </div>
            </div>
            {subscribed && <p className="subscribe-message">You are subscribed!</p>}
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">© 2024 Abarna Krishnamoorthi. All Rights Reserved</p>
                <div className="footer-bottom-right">
                    <a href="#terms-of-service">Terms of Service</a>
                    <a href="#privacy-policy">Privacy Policy</a>
                    <a href="#contact-me">Contact Me</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
