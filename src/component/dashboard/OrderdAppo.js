import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth/useAuth';

const OrderdAppo = () => {
    const {user}=useAuth()
    const [appo,setAppo]=useState([]);
    const[order,setOrder]=useState([]);
    useEffect(()=>{
        fetch('https://protected-bastion-33246.herokuapp.com/appoinments').then(res=>res.json()).then(data=>setAppo(data))
    },[user]);
useEffect(()=>{
    const order=appo.filter(test=>test.email===user.email);
    setOrder(order);
},[appo,user])
    return (
        <div>
            {order.length}
        </div>
    );
};

export default OrderdAppo;