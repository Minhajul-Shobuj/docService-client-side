import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth/useAuth';

const OrderedTests = () => {
    const {user}=useAuth()
    const [tests,setTests]=useState([]);
    const email=(user?.email)
    useEffect(()=>{
        fetch(`https://protected-bastion-33246.herokuapp.com/testOrders/${email}`).then(res=>res.json()).then(data=>setTests(data))
    },[user]);
    return (
        <div>
           <h3>Your Ordered Tests = {tests.length}</h3>
        </div>
    );
};

export default OrderedTests;