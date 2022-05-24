import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import styles from './Header.module.css';
const Header = () => {
    return (
        <div className={styles.aboutWrapper}>
            <Navbar/>
            <div className='container'>
                <div className="d-flex justify-content-center">
                    <div className={styles.headerContents}>
                        <h4 className="display-1">About Us</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;