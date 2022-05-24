import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import styles from './TourHeader.module.css'
const TourHeader = () => {
    return (
        <>
            <div className={styles.tourBg}>
                <Navbar />
                <div className='container'>
                    <div className="row">
                        <div className="d-flex justify-content-center">
                            <div className={styles.tourHeaderContents}>
                                <h4 className="display-1">Tours</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TourHeader;