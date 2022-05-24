import React, { useEffect } from 'react';
import BlogDetails from './BlogDetails/BlogDetails';
import SingleBlogHeader from './SingleBlogHeader/SingleBlogHeader';
import Footer from '../Shared/Footer/Footer';
const SingleBlog = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <>
            <SingleBlogHeader/>
            <BlogDetails />
            <Footer />
        </>
    );
};

export default SingleBlog;