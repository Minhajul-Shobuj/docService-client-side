import React from 'react';
import OrderdAppo from './OrderdAppo';
import OrderedTests from './OrderedTests';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <OrderedTests></OrderedTests>
            <OrderdAppo></OrderdAppo>
        </div>
    );
};

export default Dashboard;