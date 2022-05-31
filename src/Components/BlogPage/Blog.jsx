import React, { useEffect } from "react";
import Footer from "../Shared/Footer/Footer";
import AllBlogs from "./AllBlogs/AllBlogs";
import BlogHeader from "./BlogHeader/BlogHeader";
const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <BlogHeader />
      <AllBlogs />
      <Footer />
    </div>
  );
};

export default Blog;
