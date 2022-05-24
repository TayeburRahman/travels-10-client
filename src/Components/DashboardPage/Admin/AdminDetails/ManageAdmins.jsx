import React, { useEffect, useState } from 'react';
import AdminNav from '../AdminNav/AdminNav'
import { useForm } from "react-hook-form";
import Footer from '../../../Shared/Footer/Footer';


const ManageAdmins = () => {
    const [adminEmails, setAdminEmails] = useState([])
    const { register, resetField, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange",
        defaultValues: {
            email: ""
        }
    });
    const onSubmit = data => {
        fetch("https://desolate-taiga-63194.herokuapp.com/admins", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(data => {
                resetField("email")
                alert(data)
            })
        console.log(data)
    }


    useEffect(() => {
        fetch('https://desolate-taiga-63194.herokuapp.com/admins')
            .then(res => res.json())
            .then(data => {
                setAdminEmails(data);
                // console.log(data);
            })
    }, [])

    const handleEmailRemove = (id) => {
        fetch(`https://desolate-taiga-63194.herokuapp.com/admins/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                alert(data)
            })
    }

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
                    <div className="col-md-6 mt-3">
                        <h4>Make An Admin</h4>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input type="email" className="form-control mb-3 border-0 border-bottom" placeholder="E-Mail"{...register("email", { required: true })} />

                            <input className="btn-primary" type="submit" />
                        </form>
                    </div>
                    <div className="col-md-6 mt-3">
                        <h4 className="">Admin Emails</h4>
                        <ul className="list-group list-group-flush">
                            {
                                adminEmails.map(ele => <div key={Math.random()} className="d-flex justify-content-between mb-1">
                                    <li className="list-group-item p-0 border-0">{ele.email}</li>
                                    <button onClick={() => handleEmailRemove(ele._id)} className="btn btn-danger btn-sm">Remove</button>
                                </div>)
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

export default ManageAdmins;