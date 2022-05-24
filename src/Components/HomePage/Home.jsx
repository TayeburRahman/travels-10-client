import React, { useEffect } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import GetTouch from './GetTouch/GetTouch';
import Bus from './Bus/Bus';
import Header from './HomeHeader/Header';
import Info from './Info/Info';
import OurStory from './OurStory/OurStory';
import PopularDestination from './PopularDestination/PopularDestination';
import UpcomingEvent from './UpcomingEvents/UpcomingEvent';
import Footer from '../Shared/Footer/Footer';
import Blog from './Blog/Blog';
import NewsLetter from './NewsLetter/NewsLetter';

const Home = () => {
    useEffect(()=> {
        window.scrollTo(0,0)
    },[])
    return (
        <>
            <Navbar/>
            <Header/>
            <Bus/>
            <Info/>
            <UpcomingEvent />
            <OurStory/>
            <PopularDestination/>
            <Blog />
            <NewsLetter />
            <GetTouch/>
            <Footer/>
        </>
    );
};

export default Home;