import React, { useEffect } from "react";
import Footer from "../Shared/Footer/Footer";
import BlogDetails from "./BlogDetails/BlogDetails";
import SingleBlogHeader from "./SingleBlogHeader/SingleBlogHeader";
const SingleBlog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SingleBlogHeader />
      <BlogDetails />
      <Footer />
    </>
  );
};

export default SingleBlog;
