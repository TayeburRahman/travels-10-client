import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../../Shared/Footer/Footer';
import AdminNav from '../AdminNav/AdminNav';

const TouchMessageView = () => {
    const [messageView, setMessageView] = useState({})
    const { id } = useParams()
    console.log(id);
    useEffect(() => {
        fetch(`https://desolate-taiga-63194.herokuapp.com/touchViewMessage/${id}`)
            .then(res => res.json())
            .then(data => {
                setMessageView(data)
            })
    }, [id])
    console.log(messageView)
    const { name, email, subject, message } = messageView

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
                    <div className="col-md-6 mx-auto mt-3">
                        <div className="card shadow mb-3">
                            <div className="card-header">Message : {email}</div>
                            <div className="card-body">
                                <h4 className="card-title">{name}</h4>
                                <p className="lead">Subject: {subject}</p>
                                <p className="lead">{message}</p>
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

export default TouchMessageView;