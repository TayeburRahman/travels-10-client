import React from 'react';
import styles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faGoogle, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <div className={styles.footWrapper}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h3 className={styles.footerTitle}>Travelez</h3>
                        <p className={styles.footerSubtext}>Travelez is a travel and tourism organization company. Organize tour plan in local and asian tourist spots. </p>

                        <div className={styles.footerSocial}>
                            <i> <FontAwesomeIcon icon={faFacebookF} /> </i>
                            <i> <FontAwesomeIcon icon={faGoogle} /> </i>
                            <i> <FontAwesomeIcon icon={faTwitter} /> </i>
                            <i> <FontAwesomeIcon icon={faLinkedinIn} /> </i>
                            <i> <FontAwesomeIcon icon={faInstagram} /> </i>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h3 className={styles.footerTitle}>Information</h3>
                        <ul className="list-group">
                            <li className={styles.footerListItem}>About</li>
                            <li className={styles.footerListItem}>Service</li>
                            <li className={styles.footerListItem}>Terms and Condition</li>
                            <li className={styles.footerListItem}>Become a partner</li>
                            <li className={styles.footerListItem}>Privacy and Policy</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h3 className={styles.footerTitle}>Customer Support</h3>
                        <ul className="list-group">
                            <li className={styles.footerListItem}>FAQ</li>
                            <li className={styles.footerListItem}>Payment Options</li>
                            <li className={styles.footerListItem}>Booking Tips</li>
                            <li className={styles.footerListItem}>How it works</li>
                            <li className={styles.footerListItem}>Contact Us</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h3 className={styles.footerTitle}>Have a Questions?</h3>
                        <div className="d-flex align-items-center">
                            <i><FontAwesomeIcon icon={faLocation} /></i>
                            <li className={styles.questionText} >26/A House, Nazrul Ave, KandirPar</li>
                        </div>
                        <div className="d-flex align-items-center">
                            <i><FontAwesomeIcon icon={faPhone} /></i>
                            <li className={styles.questionText} >+880 1521 555 222</li>
                        </div>
                        <div className="d-flex align-items-center">
                            <i><FontAwesomeIcon className='mb-2' icon={faEnvelope} /></i>
                            <li className={styles.questionText} >travelez@gmail.com</li>
                        </div>
                    </div>
                    <div className="row">
                        <p className="mx-3 text-center">All right reserve 2022 by Travelez tour and tourism organization.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;