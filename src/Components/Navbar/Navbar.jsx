import React, { useState, useRef } from 'react';
import './Navbar.css';
import download from '../../assets/download.jpeg';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = "0";
    };

    const closeMenu = () => {
        menuRef.current.style.right = "-350px";
    };

    return (
        <div className='navbar'>
           <img src={download} alt="" />
            <img src={menu_open} onClick={openMenu} alt="Open Menu" className='nav-mob-open' />

            <ul className="nav-menu" ref={menuRef}>
                <img src={menu_close} onClick={closeMenu} alt="Close Menu" className='nav-mob-close' />
                
                <li 
                    className={menu === "home" ? "active" : ""}
                    onClick={() => setMenu("home")}
                >
                    <a href="#home">Home</a>
                    {menu === "home" && <img src={underline} alt='underline' />}
                </li>
                <li 
                    className={menu === "about" ? "active" : ""}
                    onClick={() => setMenu("about")}
                >
                    <a href="#about">About Me</a>
                    {menu === "about" && <img src={underline} alt='underline' />}
                </li>
                <li 
                    className={menu === "services" ? "active" : ""}
                    onClick={() => setMenu("services")}
                >
                    <a href="#services">Services</a>
                    {menu === "services" && <img src={underline} alt='underline' />}
                </li>
                <li 
                    className={menu === "portfolio" ? "active" : ""}
                    onClick={() => setMenu("portfolio")}
                >
                    <a href="#portfolio">Portfolio</a>
                    {menu === "portfolio" && <img src={underline} alt='underline' />}
                </li>
                <li 
                    className={menu === "contact" ? "active" : ""}
                    onClick={() => setMenu("contact")}
                >
                    <a href="#contact">Contact</a>
                    {menu === "contact" && <img src={underline} alt='underline' />}
                </li>
            </ul>

            <div className="nav-connect">
                <AnchorLink className='anchor-link' offset={500} href='#contact'>Connect with me</AnchorLink>
            </div>
        </div>
    );
}

export default Navbar;
