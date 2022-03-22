import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth/useAuth';

const OrderdAppo = () => {
    const {user}=useAuth()
    const [appo,setAppo]=useState([]);
    const email=(user?.email)
    useEffect(()=>{
        fetch(`https://protected-bastion-33246.herokuapp.com/appoinments/${email}`).then(res=>res.json()).then(data=>setAppo(data))
    },[user]);
    return (
        <div>
            <h3>Your Ordered Appoinments = {appo.length}</h3>
        </div>
    );
};

export default OrderdAppo;