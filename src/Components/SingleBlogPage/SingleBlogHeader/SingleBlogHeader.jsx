import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import singleBlogPostImg from '../../../assets/singleBlogPageImg.jpg'
const SingleBlogHeader = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 my-auto">
                        <div>
                            <h4 className="display-4">Blog Details</h4>
                            <p className="lead">We all live in an age that belongs to the young at heart. Life that is becoming extremely fast, day to day also asks us to remain physically young. Young at heart.</p>
                        </div>
                    </div>
                    <div className="col-md-6 my-4">
                        <img src={singleBlogPostImg} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlogHeader;