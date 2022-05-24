import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../../../Shared/Footer/Footer';
import AdminNav from '../AdminNav/AdminNav';

const ManageBookDetails = () => {
    const [bookData, setBookData] = useState({})
    const { id } = useParams()
    useEffect(() => {
        fetch(`https://desolate-taiga-63194.herokuapp.com/individualBookTour/${id}`)
            .then(res => res.json())
            .then(data => {
                setBookData(data)
            })
    }, [])
    console.log(bookData)
    const horizontal = {
        width: "90%",
        margin: "0 auto",
        color: "blue",
        marginTop: '25px',
    }

    const { displayPhoto, name, fullName, email, address, phone, city, packageGroupPeoples, logInEmail, packagePresentPrice, status, cardName, cardNumber, cvc, expireDate } = bookData

    const backTo = useNavigate()
    const handleNavigate = () => {
        backTo('/manageBooking')
    }
    return (
        <>
            <AdminNav />
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <div className="card shadow my-3">
                            <img src={displayPhoto} className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title text-center">{name}</h4>
                                <div className="row mt-4">
                                    <div className="col-md-6">
                                        <h4 className="text-center pb-2">Tour Information</h4>
                                        <p className="lead mb-0">Total group member : {packageGroupPeoples}</p>
                                        <p className="lead mb-0">Package Price : {packagePresentPrice}</p>
                                        <p className="lead mb-0">Login Email : {logInEmail}</p>
                                        <p className="lead mb-0">Status : {status}</p>

                                        <h4 className="text-center mt-3">Payment Information</h4>
                                        <p className="lead mb-0">Card Name : {cardName}</p>
                                        <p className="lead mb-0">Card Number : {cardNumber}</p>
                                        <p className="lead mb-0">CVC : {cvc}</p>
                                        <p className="lead mb-0">Expire Date: {expireDate}</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h4 className="text-center pb-2">Client Information</h4>
                                        <p className="lead mb-0">Full Name : {fullName}</p>
                                        <p className="lead mb-0">Email : {email}</p>
                                        <p className="lead mb-0">Address : {address}</p>
                                        <p className="lead mb-0">Mobile : {phone}</p>
                                        <p className="lead mb-0">City : {city}</p>
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => handleNavigate()} className="btn btn-primary m-2">Back</button>
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

export default ManageBookDetails;