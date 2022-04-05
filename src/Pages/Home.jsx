import React from 'react';
import Announcement from '../Component/Announcement/Announcement';
import Navbar from '../Component/Navbar/Navbar';


const Home = () => {
    return (
        <div>
            <Announcement></Announcement>
            <Navbar/>
        </div>
    );
};

export default Home;