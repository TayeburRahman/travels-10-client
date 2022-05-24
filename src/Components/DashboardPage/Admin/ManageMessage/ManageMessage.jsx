import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../../Shared/Footer/Footer';
import AdminNav from '../AdminNav/AdminNav';

const ManageMessage = () => {
    const [getInTouch, setGetInTouch] = useState([])
    const [subcribers, setSubcribers] = useState([])
    const [contactUsMessage, setContactUsMessage] = useState([])

    useEffect(() => {
        fetch("https://desolate-taiga-63194.herokuapp.com/touchInTouchMessage")
            .then(res => res.json())
            .then(data => {
                setGetInTouch(data)
            })
    }, [])
    useEffect(() => {
        fetch("https://desolate-taiga-63194.herokuapp.com/contactUsMessage")
            .then(res => res.json())
            .then(data => {
                setContactUsMessage(data)
            })
    }, [])
    useEffect(() => {
        fetch("https://desolate-taiga-63194.herokuapp.com/subcribers")
            .then(res => res.json())
            .then(data => {
                setSubcribers(data)
            })
    }, [])



    const horizontal = {
        width: "90%",
        margin: "0 auto",
        color: "blue",
        marginTop: '25px',
    }

    const messageNavigate = useNavigate()
    const touchNavigate = useNavigate()
    const handleMessageView = (id) => {
        // console.log(id);
        messageNavigate(`/messageView/${id}`)
    }
    const handleGetInTouchMessageView = (id) => {
        // console.log(id);
        touchNavigate(`/touchMessageView/${id}`)
    }
    return (
        <>
            <AdminNav />
            <div className="container">
                <div className="row mt-3">
                    <div className="col-md-4">
                        <h4 className="text-center">Get In Touch</h4>
                        <div className="table-responsive">
                            <table className="table table-sm table-striped table-hover text-center">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Subject</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        getInTouch.map(ele => <tr key={Math.random()}>
                                            <td>{ele.name}</td>
                                            <td>{ele.subject}</td>
                                            <td><button onClick={() => handleGetInTouchMessageView(ele._id)} className="btn btn-sm btn-primary">View</button></td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h4 className="text-center">Contact Us Messages</h4>
                        <div className="table-responsive">
                            <table className="table table-sm table-striped table-hover text-center">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Subject</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        contactUsMessage.map(ele => <tr key={Math.random()}>
                                            <td>{ele.name}</td>
                                            <td>{ele.subject}</td>
                                            <td><button onClick={() => handleMessageView(ele._id)} className="btn btn-sm btn-primary">View</button></td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h4 className="text-center">All Subcribers</h4>
                        <ul className="list-group list-group-flush list-group-numbered">
                            {
                                subcribers.map(ele => <li key={Math.random()} className="list-group-item">{ele.email}</li>)
                            }
                        </ul>
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

export default ManageMessage;