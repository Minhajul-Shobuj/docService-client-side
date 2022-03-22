import React, { useState } from 'react';
import bgImage from '../../images/background.jpg'
import art1 from '../../images/art-1.png'
import './Form.css'
import axios from 'axios';
import useAuth from '../../Hooks/useAuth/useAuth';

const Form = () => {
    const {user}=useAuth();
    const patientInfo={name:'',eamil:'',people:'',time:'',date:'',number:''}
    const [info, setinfo]=useState({userInfo: patientInfo});
    const submitForm=(e)=>{
        e.preventDefault();
        const appointment = {...info}
        axios.post('https://protected-bastion-33246.herokuapp.com/appoinments', appointment)
        .then(function (res) {
            if (res.data.insertedId) {
                alert('Order Placed Successfully');
            }
        })
    }
    const getData=(e)=>{    
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = {...info};
    newInfo[field] = value;
    // console.log(info);
    setinfo(newInfo);

    }
    return (
        <div style={{backgroundImage:`url(${bgImage})`}} className='main_bg'>
            <div className="form">
        <div className="form-text">
            <h1><span><img src={art1} alt="" /></span>Book Now <span><img src={art1} alt=""/></span></h1>
            <p>Get appoinment from your suitable Doctor</p>
        </div>
        <div className="main-form">
            <form onSubmit={submitForm} method="get">
                <div>
                    <span>Your full name ?</span>
                    <input onChange={getData} type="text" name="name" id="name" placeholder="Write your name here..." required />
                </div>
                <div>
                    <span>Your email address ?</span>
                    <input onChange={getData} type="email" name="email" id="email" value={user.email} disabled /> 
                </div>
                <div>
                {/* this is the select option */}
                    <span>Doctor Name ?</span>
                    <input onChange={getData} type="text" name="doctor" id="doctor" placeholder="Write doctor name here..." required /> 
                    {/* this is the select option */}
                </div>
                <div>
                    <span>What time ?</span>
                    <input onChange={getData} type="time" id="appt" min="09:00" max="20:00" name="time" placeholder="Time" required />
                </div>
                <div>
                    <span>What is the date ?</span>
                    <input onChange={getData} type="date" name="date" id="date" placeholder="date" required />
                </div>
                <div>
                    <span>Your phone number ?</span>
                    <input onChange={getData} type="number" name="number" id="number" placeholder="Write your number here..." required />
                </div>
                <div id="submit">
                    <input type="submit" value="SUBMIT" id="submit" />
                </div>
            </form>
        </div>
    </div>
        </div>
    );
};

export default Form;