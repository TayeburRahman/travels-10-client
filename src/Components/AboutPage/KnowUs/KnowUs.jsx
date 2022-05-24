import React from 'react';
import styles from './KnowUs.module.css';
import knowUsSiteImg from '../../../assets/knowUsSiteImg.webp';

const KnowUs = () => {
    return (
        <div className={styles.KnowUsWrapper}>
            <div className="container">
                <div className="row">
                    <div className="d-flex justify-content-center">
                        <div className={styles.knowUsContents}>
                            <p className="lead mb-0">Know Us</p>
                            <h4 className="display-4">We have the best tours</h4>
                        </div>
                    </div>
                    <div className="col-md-8 my-auto">
                        <img src={knowUsSiteImg} alt="knowUsSiteImg" className="img-fluid" />
                    </div>
                    <div className="col-md-4 my-auto">
                        <div>
                            <h2 className={styles.knowUsTitle}>A few words about us</h2>
                            <p className={`lead ${styles.knowUspagagraph}`}>As a tour operator in Bangladesh Travelez does not clam either to be the Biggest Tour Company or the best Tourism Company in Bangladesh. We are yet to achieve our best, but we have served 3500+ guests a year in 2019 (before the pandemic) with a 5/5 rating in TripAdvisor.</p>
                            <p className={`lead ${styles.knowUspagagraph}`}>Travelez was awarded Trip Advisor Certificate of Excellence in 2019 and Traveler’s Choice Award in 2020. We were probably the fastest-growing Inbound Tour Company in Bangladesh before the Covid-19 pandemic that stopping the global tourism industry.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KnowUs;