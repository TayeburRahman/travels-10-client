import React from 'react';
import Navbar from '../Shared/Navbar/Navbar'
import pageNotFound from '../../assets/noFound.jpg'
const NoPageFound = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <img src={pageNotFound} alt="" className="img-fluid" />
                </div>
            </div>
        </>
    );
};

export default NoPageFound;