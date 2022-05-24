import React from 'react';
import styles from './Bus.module.css'
import bus from '../../../assets/bus.webp'
const Bus = () => {
    return (
        <div className={styles.busBg}>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-sm-8 col-xl-10">
                        <div className={styles.busMove}>
                            <img src={bus} alt="Bus" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bus;