import React from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import arrow_icon from '../../assets/arrow_icon.svg';
import Services_Data from '../../assets/services_data';

const Services = () => {
    return (
        <div id='services' className='services'>
            <div className="services-title">
                <h1>My Services</h1>
                <img src={theme_pattern} alt="Theme Pattern" />
            </div>
            <div className="services-container">
                {Services_Data.map((service, index) => {
                    return (
                        <div key={index} className='services-format'>
                            <h3>{service.s_no}</h3>
                            <h2>{service.s_name}</h2>
                            <h3>{service.s_desc}</h3>
                            <div className='services-readmore'>
                                <p>Read More</p>
                                <img src={arrow_icon} alt="Arrow Icon" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Services;
