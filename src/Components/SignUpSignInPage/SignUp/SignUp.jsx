import React, { useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { useForm } from "react-hook-form";
import styles from './SignUp.module.css'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import signUp from '../../../assets/signUp.png'
import useAuth from '../UseAuthHook/useAuth';

const SignUp = () => {
    const { createNewUserWithEmailAndPassword, sentErrorMessage } = useAuth()
    const [errorMessage, setErrorMessage] = useState("")
    const { register, resetField, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange",
        defaultValues: {
            name: "",
            email: "",
            password: "",
            retypePassword: ""
        }
    });
    const onSubmit = data => {
        //* Password validation (Basic)
        if (data.password.length && data.retypePassword.length < 6) {
            clearInputField()
            setErrorMessage("Password must be at least 6 characters.")
            return
        }
        if (data.password !== data.retypePassword) {
            clearInputField()
            setErrorMessage("Password not match");
            return
        }
        console.log(data)
        createNewUserWithEmailAndPassword(data.email, data.password, data.retypePassword)
        clearInputField()
        setErrorMessage("")
    }

    //* Input Field Clear
    const clearInputField = () => {
        resetField("name")
        resetField("email")
        resetField("password")
        resetField("retypePassword")
    }

    const navigate = useNavigate()
    const handleSignIn = () => {
        navigate('/signin')
    }

    return (
        <>
            <Navbar />
            <div className={styles.signUpWrapper}>
                <div className="container">
                    <div className="row mx-3">
                        <div className="col-md-5 card pb-4 mb-3 shadow my-auto">
                            <div className={styles.signUpText}>
                                <h4>Sign-Up</h4>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="d-flex align-items-center mx-1">
                                    <FontAwesomeIcon className="mb-3 me-1" icon={faUserAlt} />
                                    <input type="text" className="form-control mb-3 border-0 border-bottom" placeholder="Name" {...register("name", { required: true })} />
                                    {/* {errors.name && <span className="text-danger">*Name field is required</span>} */}
                                </div>

                                <div className="d-flex align-items-center mx-1">
                                    <FontAwesomeIcon className="mb-3 me-1" icon={faEnvelope} />
                                    <input type="email" className="form-control mb-3 border-0 border-bottom" placeholder="E-Mail" {...register("email", { required: true })} />
                                    {/* {errors.email && <span className="text-danger">*Email field is required</span>} */}
                                </div>

                                <div className="d-flex align-items-center mx-1">
                                    <FontAwesomeIcon className="mb-3 me-1" icon={faLock} />
                                    <input type="password" className="form-control mb-3 border-0 border-bottom" placeholder="Password more than 6 character" {...register("password", { required: true })} />
                                    {/* {errors.password && <span className="text-danger">*Email field is required</span>} */}
                                </div>

                                <div className="d-flex align-items-center mx-1">
                                    <FontAwesomeIcon className="mb-3 me-1" icon={faLock} />
                                    <input type="password" className="form-control mb-3 border-0 border-bottom" placeholder="Re-type Password" {...register("retypePassword", { required: true })} />
                                    {/* {errors.retypePassword && <span className="text-danger">*Email field is required</span>} */}
                                </div>

                                <div className="d-flex justify-content-center">
                                    <input type="submit" className={styles.signUpBtn} />
                                </div>

                                <div className="mt-2 text-danger text-center">{errorMessage}</div>
                                <div className="mt-2 text-center text-danger">{sentErrorMessage()}</div>

                            </form>
                            <p onClick={() => handleSignIn()} className={styles.registered}>*Already Registered! <u className="text-primary">Sign-In</u> </p>

                        </div>

                        <div className="col-md-7 my-auto">
                            <img src={signUp} alt="" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;