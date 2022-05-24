import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';

const DetailsPackage = () => {
    const [tourPackage, setTourPackage] = useState([])
    const { id } = useParams()
    console.log(tourPackage)

    useEffect(() => {
        fetch(`https://desolate-taiga-63194.herokuapp.com/individualBookTour/${id}`)
            .then(res => res.json())
            .then(data => {
                setTourPackage(data)
            })
    }, [id])

    const { displayPhoto, name, packageGroupPeoples, email, totaldays, status } = tourPackage

    const backToMyOrderNavigate = useNavigate()
    const backToMyOrderPage = () => {
        backToMyOrderNavigate('/dashboard')
    }

    const horizontal = {
        width: "90%",
        margin: "0 auto",
        color: "blue",
        marginTop: '25px',
    }
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto mt-3">
                        <div className="card shadow mb-3">
                            <img src={displayPhoto} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">{name}</h4>
                                <p className="lead mb-0">Amount of group : {packageGroupPeoples}</p>
                                <p className="lead mb-0">Number of day you will visits : {totaldays}</p>
                                <p className="lead">Registered Email : {email}</p>
                                <p className="card-text"><small className="text-muted">Status : {status}</small></p>
                                <button onClick={() => backToMyOrderPage()} className="btn btn-sm btn-primary">Back</button>
                            </div>
                        </div>

                    </div>
                    <div style={horizontal}>
                        <hr />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default DetailsPackage;