import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import hostImage from '../../assets/hostImg.jpg'
import { useNavigate } from 'react-router-dom';

const HostPage = () => {
    const horizontal = {
        width: "90%",
        margin: "0 auto",
        color: "blue",
        marginTop: '25px',
    }

    const searchTour = useNavigate()
    const handleNavigate = () => {
        searchTour('/tour')
    }
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <div className="card mb-3 my-5">
                            <div className="row g-0">
                                <div className="col-md-4 my-auto">
                                    <img src={hostImage} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Jafor Shikder</h5>
                                        <p className="card-text">Hey I'm your host. I have more than 7 years of experience in tourism guide. I have organize 50+ tourism programs. I hope you find much better fun with me. So wanna you let's jump in next tour with me?</p>
                                        <p className="card-text mb-0"><small className="text-muted">Any Query Call me : +880 1521 555 111</small></p>
                                        <p className="card-text"><small className="text-muted">Email : jafor.travelez@gmail.com</small></p>
                                        <button onClick={() => handleNavigate()} class="btn ps-0">Find more tours...</button>
                                    </div>
                                </div>
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

export default HostPage;