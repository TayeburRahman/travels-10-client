import React, { useEffect, useState } from 'react';
import AdminNav from '../AdminNav/AdminNav';
import Footer from '../../../Shared/Footer/Footer'
import styles from './ManagePackage.module.css'
import { useNavigate } from 'react-router-dom';

const ManagePackages = () => {
    const [tourPackage, setTourPackage] = useState([])
    useEffect(() => {
        fetch("https://desolate-taiga-63194.herokuapp.com/allTourPackages")
            .then(res => res.json())
            .then(data => {
                setTourPackage(data)
            })
    }, [])
    console.log(tourPackage)
    const horizontal = {
        width: "90%",
        margin: "0 auto",
        color: "blue",
        marginTop: '25px',
    }

    const viewPackageNavigate = useNavigate()
    const handleNavigate = (id) => {
        viewPackageNavigate(`/singleTour/${id}`)
    }
    return (
        <>
            <AdminNav />
            <div className="container">
                <div className="row mt-3">
                    <h4 className="pb-2">All Travel Packages</h4>
                    {
                        tourPackage.map(ele => <div key={Math.random()} className={`col-md-4 mb-3 ${styles.pointer}`}>
                            <div className="card">
                                <img src={ele.displayPhoto} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="lead text-center">{ele.name}</p>

                                    <div className="d-flex justify-content-between">
                                        <button onClick={() => handleNavigate(ele._id)} className="btn btn-primary">View</button>
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

export default ManagePackages;