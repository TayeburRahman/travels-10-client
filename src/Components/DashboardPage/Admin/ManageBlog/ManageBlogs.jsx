import React, { useEffect, useState } from 'react';
import AdminNav from '../AdminNav/AdminNav';
import Footer from '../../../Shared/Footer/Footer'
import styles from './ManageBlogs.module.css'
import { useNavigate } from 'react-router-dom';

const ManageBlogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch("https://desolate-taiga-63194.herokuapp.com/addBlogs")
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
            })
    }, [])
    console.log(blogs)
    const horizontal = {
        width: "90%",
        margin: "0 auto",
        color: "blue",
        marginTop: '25px',
    }

    const navigateToViewBlog = useNavigate()
    const handleViewBlog = (id) => {
        navigateToViewBlog(`/singleBlog/${id}`)
    }
    return (
        <>
            <AdminNav />
            <div className="container">
                <div className="row my-3">
                    <h4 className="pb-2">All Popular Blogs Post Are Here</h4>
                    {
                        blogs.map(ele => <div key={Math.random()} className={`col-md-4 mb-2 mx-auto ${styles.pointer}`}>
                            <div className="card">
                                <img src={ele.photo} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="lead text-center">{ele.title}</p>
                                    <div className="d-flex justify-content-between">
                                        <button onClick={() => handleViewBlog(ele._id)} className="btn btn-primary">View</button>
                                        <button className="btn btn-danger">Remove</button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                    <div style={horizontal}>
                        <hr />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ManageBlogs;