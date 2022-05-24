import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import UserForm from '../UserForm/UserForm';
import styles from './BookHeader.module.css'
const BookHeader = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div>
                        <div className="text-center my-4">
                            <h4 className="display-4">Booking Information</h4>
                        </div>
                    </div>
                    <div>
                        <UserForm />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookHeader;