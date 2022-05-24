import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css'
const Header = () => {
    const navigate = useNavigate()
    const handleTourPlan = () => {
        navigate('/tour')
    }
    return (
        <div className={styles.planeTreeBg}>
            <div className="container">
                <div className='row'>
                    <div className="col-sm-12">
                        <div className={styles.headerContent}>
                            <div className={styles.headerContentInner}>
                                <p className={`display-1 ${styles.mainHeading}`}>Lifelong memories just a few seconds away</p>
                                <p className={styles.headerParagraph}>Let’s start your journey with us, your dream will come true</p>
                                <button onClick={() => handleTourPlan()} className="btn">Explore Tour</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;