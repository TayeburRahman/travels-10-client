import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../../../Shared/Footer/Footer';
import AdminNav from '../AdminNav/AdminNav';

const ManageEventDetails = () => {
    const [event, setEvent] = useState({})
    const { id } = useParams()
    const backTo = useNavigate()
    const handleNavigateBack = () => {
        backTo("/manageEvents")
    }

    useEffect(() => {
        fetch(`https://desolate-taiga-63194.herokuapp.com/upcommingevent/${id}`)
            .then(res => res.json())
            .then(data => {
                setEvent(data)
            })
    }, [id])
    console.log(event)
    const { displayPhoto, name, peoples, eventDate, presentPrice, previousPrice, shortDescription } = event

    const horizontal = {
        width: "90%",
        margin: "0 auto",
        color: "blue",
        marginTop: '25px',
    }


    return (
        <>
            <AdminNav />
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mt-3 mx-auto">
                        <div className="card shadow mb-3">
                            <img src={displayPhoto} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">{name}</h4>
                                <p className="lead">{shortDescription}</p>
                                <p className="lead mb-0">Package Price: {presentPrice}</p>
                                <p className="lead mb-0">Previous Price: {previousPrice}</p>
                                <p className="lead mb-0">Group Of Peoples: {peoples}</p>
                                <p className="lead">{eventDate}</p>
                                <button className="btn btn-primary" onClick={() => handleNavigateBack()}>Back</button>
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

export default ManageEventDetails;