import React, { useEffect } from 'react';
import Packages from './Packages/Packages';
import TourHeader from './TourHeader/TourHeader';
import Footer from '../Shared/Footer/Footer';

const Tour = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <>
            <TourHeader/>
            <Packages />
            <Footer />
        </>
    );
};

export default Tour;