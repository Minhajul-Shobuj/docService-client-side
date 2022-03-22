import React from 'react';
import './banner.css'
import doctor from '../../../images/home-one-img.webp'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='row banner d-flex align-items-center'>
            <div className='col-lg-7'>
                <small>Your trusted healthcare partner</small>
                <h1>Your Good Health is Our Responsibility</h1>
                <p>Get your appointment through online and remain safe at your home. Because your safety is our first priority.</p>
                <div>
                   <Link to='/doctors'><button className='btn banner-btn-1'>Find a doctor</button></Link>
                    <Link to='/tests'><button className='btn banner-btn-2 secondary'>Find a Test</button></Link>
                </div>
            </div>
            <div className='doctors col-lg-5'><img src={doctor} alt="" /></div>
        </div>
    );
};

export default Banner;