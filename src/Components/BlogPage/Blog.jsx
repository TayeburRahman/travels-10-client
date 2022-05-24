import React, { useEffect } from 'react';
import AllBlogs from './AllBlogs/AllBlogs';
import BlogHeader from './BlogHeader/BlogHeader';
import Footer from '../Shared/Footer/Footer'
const Blog = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <div>
            <BlogHeader />
            <AllBlogs />
            <Footer />
        </div>
    );
};

export default Blog;