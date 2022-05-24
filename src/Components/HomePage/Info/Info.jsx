import React from 'react';
import styles from './Info.module.css'
import beach from '../../../assets/beach.svg'
import wallet from '../../../assets/wallet.svg'
import suitcase from '../../../assets/suitcase.svg'
const Info = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-4">
                    <div className={styles.infoCart}>
                        <img src={beach} alt="" className={`img-fluid ${styles.infoImg}`} />
                        <div className="ms-4">
                            <h5 className={styles.infoTitle}>Top Destinations</h5>
                            <p className={styles.subTitle}>All travelers goes there</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className={styles.infoCart}>
                        <img src={wallet} alt="" className={`img-fluid ${styles.infoImg}`} />
                        <div className="ms-4">
                            <h5 className={styles.infoTitle}>The Best Prices</h5>
                            <p className={styles.subTitle}>We know travelers feeling's</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mx-auto col-lg-4">
                    <div className={styles.infoCart}>
                        <img src={suitcase} alt="" className={`img-fluid ${styles.infoImg}`} />
                        <div className="ms-4">
                            <h5 className={styles.infoTitle}>Amazing Services</h5>
                            <p className={styles.subTitle}>Try best services from us</p>
                        </div>
                    </div>
                </div>
                <div className={styles.horizontal}>
                    <hr className="mt-5"/>
                </div>
            </div>
        </div>
    );
};

export default Info;