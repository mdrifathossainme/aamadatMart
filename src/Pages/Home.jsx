import React from 'react';
import Announcement from '../Component/Announcement/Announcement';
import Categorise from '../Component/Categorise/Categorise';
import Footer from '../Component/Footer/Footer';
import Navbar from '../Component/Navbar/Navbar';
import Newsletter from '../Component/Newsletter/Newsletter';
import Slider from '../Component/Slider/Slider';
import Products from './Products/Products';
const Home = () => {
    return (
        <div>
            <Announcement></Announcement>
            <Navbar/>
            <Slider/>
            <Categorise />
            <Products />
            <Newsletter/>
            <Footer/>
        </div>
    );
};

export default Home;