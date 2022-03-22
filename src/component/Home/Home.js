import React from 'react';
import Footer from '../Footer/Footer';
import Banner from './Banner/Banner';
import Doctor from './Doctor/Doctor';
import Informational from './Informational/Informational';
import Tests from './Tests/Tests';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Doctor></Doctor>
            <Tests></Tests>
            <Informational></Informational>
            <Footer></Footer>
        </div>
    );
};

export default Home;