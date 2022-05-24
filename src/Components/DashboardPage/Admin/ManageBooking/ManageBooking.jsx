import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../../Shared/Footer/Footer';
import AdminNav from '../AdminNav/AdminNav';

const ManageBooking = () => {
    const [booked, setBooked] = useState([])
    useEffect(() => {
        fetch("https://desolate-taiga-63194.herokuapp.com/bookTour")
            .then(res => res.json())
            .then(data => {
                setBooked(data)
            })
    }, [])
    console.log(booked)
    const horizontal = {
        width: "90%",
        margin: "0 auto",
        color: "blue",
        marginTop: '25px',
    }

    const bookDetailNavigate = useNavigate()
    const handleBookDetail = (id) => {
        bookDetailNavigate(`/bookDetails/${id}`)
    }
    return (
        <>
            <AdminNav />
            <div className="container">
                <div className="row">
                    <h4 className="mt-3">All Bookings</h4>
                    <div className="table-responsive">
                        <table className="table table-striped table-hover text-center">
                            <thead>
                                <tr>
                                    <th scope="col">Image</th>
                                    <th scope="col">Place</th>
                                    <th scope="col">Client Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    booked.map(ele => <tr key={Math.random()}>
                                        <td><img src={ele.displayPhoto} alt="" width="100px" /></td>
                                        <td>{ele.name}</td>
                                        <td>{ele.fullName}</td>
                                        <td><button className="btn btn-primary">Status</button></td>
                                        <td><button onClick={() => handleBookDetail(ele._id)} className="btn btn-success">Detail</button></td>
                                        <td><button className="btn btn-warning">Edit</button></td>
                                        <td><button className="btn btn-danger">Remove</button></td>
                                    </tr>
                                    )
                                }

                            </tbody>
                        </table>
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

export default ManageBooking;