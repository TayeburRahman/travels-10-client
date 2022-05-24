import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { useForm } from "react-hook-form";
import styles from './SignIn.module.css'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import loginSiteImg from '../../../assets/loginSiteImg.png'
import useAuth from '../UseAuthHook/useAuth';


const SignIn = () => {
    const { signInWithGoogle, signInEmailAndPassword, sentErrorMessage } = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        signInEmailAndPassword(data.email, data.password)
    }

    const navigate = useNavigate()
    const handleSignUp = () => {
        navigate('/signup')
    }

    return (
        <>
            <Navbar />
            <div className={styles.loginWrapper}>
                <div className="container">
                    <div className="row mx-3">
                        <div className="col-md-5 card pb-4 shadow my-auto">
                            <div className={styles.signInText}>
                                <h4>Sign-In</h4>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="d-flex align-items-center mx-1">
                                    <FontAwesomeIcon className="mb-3 me-1" icon={faEnvelope} />
                                    <input className="form-control mb-3 border-0 border-bottom" placeholder="E-Mail" {...register("email", { required: true })} />
                                    {errors.email && <span className="text-danger">*Email field is required</span>}
                                </div>

                                <div className="d-flex align-items-center mx-1">
                                    <FontAwesomeIcon className="mb-3 me-1" icon={faLock} />
                                    <input className="form-control mb-3 border-0 border-bottom" placeholder="Password" {...register("password", { required: true })} />
                                    {errors.password && <span className="text-danger">*Email field is required</span>}
                                </div>

                                <div className="d-flex justify-content-center">
                                    <input type="submit" className={styles.signInBtn} />
                                </div>

                                <div className="mt-2 text-center text-danger">{sentErrorMessage()}</div>

                            </form>
                            <p onClick={() => handleSignUp()} className={styles.notRegistered}>*Not Register! <u className="text-primary">Sign-Up</u> </p>

                            <div className={styles.googleBtnWrapper}>
                                <h4> <u> Or Sign In with </u> </h4>
                                <div className="d-flex justify-content-center">
                                    <button onClick={signInWithGoogle} className={`btn btn-sm ${styles.googleBtn}`}>Google</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-7">
                            <img src={loginSiteImg} alt="" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;