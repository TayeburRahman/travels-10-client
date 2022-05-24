import React from 'react';
import styles from './GetTouch.module.css'
const GetTouch = () => {
    return (
        <div className={styles.GetTouchWrapper}>
            <div className="container">
                <div className="row">
                    <div className="text-center mb-5">
                        <p className="lead mb-0">Get In Touch</p>
                        <h4 className="display-4">Any Time</h4>
                    </div>
                </div>
                <div className="row">
                    <h2 className={styles.contactTitle}>Contact Information</h2>
                    <div className="col-lg-3 col-md-6">
                        <p className="lead">26/A House, Nazrul Ave, KandirPar, Cumilla City.</p>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <p className="lead">Phone : +880 1521 555 222</p>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <p className="lead">E-Mail : travelez@gmail.com</p>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <p className="lead mb-0">Working Days : Sun-Thu </p>
                        <p className="lead">Time : 9 AM - 5 PM </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetTouch;