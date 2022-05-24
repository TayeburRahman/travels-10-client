import React from 'react';
import { useForm } from "react-hook-form";
import useTourPlan from '../../CartTourPlan/useTourPlan';

const Confirm = ({ nextStep, prevStep, values }) => {
    // console.log(values);
    const { handleCartClearance } = useTourPlan()
    const { fullName, email, phone, address, city, cardName, cardNumber, cvc, expireDate, logInEmail, displayPhoto, name, packageGroupPeoples, packagePresentPrice, totaldays } = values
    const { handleSubmit } = useForm();
    const onSubmit = data => {
        const values = {
            status: "Pending",
            fullName,
            email,
            phone,
            address,
            city,
            cardName,
            cardNumber,
            cvc,
            expireDate,
            logInEmail,
            displayPhoto,
            name,
            packageGroupPeoples,
            packagePresentPrice,
            totaldays
        }
        console.log(values);
        //* PROCESS TO SERVER FORM 
        fetch('https://desolate-taiga-63194.herokuapp.com/bookTour', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(data => {
                handleCartClearance()
                // console.log(data);
            })
        nextStep()
    }

    const handleNavigate = () => {
        prevStep()
    }
    return (
        <div style={{ marginBottom: 100 }}>
            {/* <Navbar /> */}
            <div className="container">
                <div className="">
                    <div className="d-flex justify-content-center">
                        <h2>Confirmation Details</h2>
                    </div>
                    <div className='row p-3'>
                        <div className="offset-md-2 col-md-8 border shadow-lg p-4">
                            <h5>Login Information</h5>
                            <p className="text-danger fw-bold">Email : {logInEmail}</p>
                            {/* <p>Name : {isLoggedInEmailName}</p> */}

                            <h5>Tour Package Information</h5>
                            {/* <h6>List of Cart Items {cartItems.length}</h6> */}
                            <div className="table-responsive">
                                <table className="table table-sm table-hover bg-white">
                                    <thead className="text-center">
                                        <tr>
                                            {/* <th scope="col"></th> */}
                                            <th scope="col">Img</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Peoples</th>
                                            <th scope="col">Days</th>
                                        </tr>
                                    </thead>

                                    <tbody className="">
                                        <tr className="text-center">
                                            {/* <td>index</td> */}
                                            <td>
                                                <img style={{ minWidth: 75, height: 75, borderRadius: 15, }} src={displayPhoto} className=" p-2 img-fluid rounded-start" alt="..." />
                                            </td>
                                            <td>{name}</td>
                                            <td>{packageGroupPeoples}</td>
                                            <td>{totaldays}</td>
                                        </tr>

                                        <tr>
                                            <td colSpan="2"><strong>Total Amount: {packagePresentPrice} Tk.</strong></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <h5>Customer Info</h5>
                                    <p className="mb-0">Name : {fullName}</p>
                                    <p className="mb-0">E-Mail : {email}</p>
                                    <p className="mb-0">Phone : {phone}</p>
                                    <p className="mb-0">Address : {address}</p>
                                    <p>City : {city}</p>
                                </div>
                                <div className="col-md-6">
                                    <h5>Payment Info</h5>
                                    <p className="mb-0">Card Name : {cardName}</p>
                                    <p className="mb-0">Card Number : {cardNumber}</p>
                                    <p className="mb-0">CVC Number : {cvc}</p>
                                    <p>Expire Date : {expireDate}</p>
                                </div>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="d-flex justify-content-between mt-5">
                                    <button onClick={() => handleNavigate()} className="btn btn-success">Back</button>
                                    <input className="btn btn-success" type="submit" value="Confirm And Submit" />
                                </div>
                            </form>
                        </div>
                        <div className="col-md-4">
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Confirm;