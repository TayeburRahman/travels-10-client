import React, { useEffect, useState } from 'react';
import styles from './Blog.module.css'
import blogSiteImage from '../../../assets/blogSiteImage.jpg'
import BlogCart from './BlogCart';
// import BlogData from './BlogData'
const Blog = () => {
    const [BlogData, setBlogData] = useState([])
    useEffect(() => {
        fetch('https://desolate-taiga-63194.herokuapp.com/addBlogs')
            .then(res => res.json())
            .then(data => setBlogData(data))
    }, [])
    return (
        <div className={styles.blogWrapper}>
            <div className="text-center mb-5">
                <p className="lead mb-0">Recent Blog</p>
                <h4 className="display-4">Tips and Articles</h4>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 my-auto">
                        {
                            BlogData.slice(0, 3).map(singleData => <BlogCart singleData={singleData} key={Math.random()} />)
                        }
                    </div>
                    <div className="col-md-4 my-auto">
                        <div className={styles.blogSiteImg}>
                            <img src={blogSiteImage} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;