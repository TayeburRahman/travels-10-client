import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import styles from './BlogHeader.module.css';
const BlogHeader = () => {
    return (
        <div className={styles.blogWrapper}>
            <Navbar />
            <div className='container'>
                <div className="row">
                    <div className="d-flex justify-content-center">
                        <div className={styles.blogHeaderContents}>
                            <h4 className="display-1">Blogs</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogHeader;