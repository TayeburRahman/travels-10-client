import React, { useEffect } from 'react';
import HeaderSingleTour from './HeaderSingleTour/HeaderSingleTour';
import ImgOverview from './ImgOverview/ImgOverview';
import Footer from '../Shared/Footer/Footer';
const TourSingle = () => {
    useEffect(()=> {
        window.scrollTo(0,0)
    },[])
    return (
        <>
            <HeaderSingleTour/>
            <ImgOverview />
            <Footer />
        </>
    );
};

export default TourSingle;