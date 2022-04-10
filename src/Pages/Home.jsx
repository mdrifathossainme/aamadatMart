import React from 'react';
import Announcement from '../Component/Announcement/Announcement';
import Categorise from '../Component/Categorise/Categorise';
import Navbar from '../Component/Navbar/Navbar';
import Slider from '../Component/Slider/Slider';
import Products from './Products/Products';
const Home = () => {
    return (
        <div>
            <Announcement></Announcement>
            <Navbar/>
            <Slider/>
            <Categorise></Categorise>
            <Products></Products>
        </div>
    );
};

export default Home;