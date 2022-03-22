import React from 'react';
import bgImg from '../../../images/footer-bg.jpg'

const Informational = () => {
    return (
        <div style={{backgroundImage:`url(${bgImg})`}} className='container'>
            <div className='text-white row'>
            <div className='col-lg-4 col-md-6'>
                <h2>Services</h2>
                <ul>
                    <li>Clinical Laboratory</li>
                    <li>Radiology and Imaging</li>
                    <li>Cardiac Imaging</li>
                    <li>Gastroenterology</li>
                    <li>Pulmonology</li>
                </ul>
            </div>
            <div className='col-lg-4 col-md-6'>
                <h2>Opening Hours</h2>
                <ul>
                    <li>Sat-Thu: 7.00 AM-11.00 PM</li>
                    <li>Fri: 7:00 AM - 12:00 PM</li>
                    <li>Fri:3:00 PM - 10:00 PM</li>
                </ul>
            </div>
            <div className='col-lg-4 col-md-6'>
                <h2>Get in Touch</h2>
                <ul>
                    <li><h5>Hotline</h5>
                    <small>Phone: +8801700000000</small>
                    </li>
                    <li><h5>Hotline</h5>
                    <small>Email: info@docservice.com</small>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    );
};

export default Informational;