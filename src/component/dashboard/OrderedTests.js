import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth/useAuth';

const OrderedTests = () => {
    const {user}=useAuth()
    const [tests,setTests]=useState([]);
    const[order,setOrder]=useState([]);
    useEffect(()=>{
        fetch('https://protected-bastion-33246.herokuapp.com/testOrders').then(res=>res.json()).then(data=>setTests(data))
    },[user]);
useEffect(()=>{
    const order=tests.filter(test=>test.email===user.email);
    setOrder(order);
},[tests,user])
    return (
        <div>
            <h3>Your Tests</h3>
            {order.length}
        </div>
    );
};

export default OrderedTests;