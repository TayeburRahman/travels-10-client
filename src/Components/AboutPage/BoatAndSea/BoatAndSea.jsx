import React from 'react';
import styles from './BoatAndSea.module.css'
import aboutPageBoatSea from '../../../assets/aboutPageBoatSea.webp'
const BoatAndSea = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className={styles.imgDiv}>
                        <div className={styles.imgStyle}>
                            <div className={styles.contents}>
                                <h4 className="display-4">Saint Martin Iecland</h4>
                                <h3 className={`display-1 ${styles.discount}`}>25% Discount for newly Married</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoatAndSea;