import React from 'react';
import styles from './ContactHeader.module.css';
import Navbar from '../../Shared/Navbar/Navbar';
const ContactHeader = () => {
    return (
        <div className={styles.contactUsWrapper}>
            <Navbar />
            <div className='container'>
                <div className="d-flex justify-content-center">
                    <div className={styles.contactContents}>
                        <h4 className="display-1">Contact Us</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactHeader;