import React from 'react';
import styles from './GetTouch.module.css'
import { useForm } from "react-hook-form";

const GetTouch = () => {
    const { register, handleSubmit, resetField, formState: { errors } } = useForm({
        mode: "onChange",
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: ""
        }
    });
    const onSubmit = data => {
        resetField("name")
        resetField("email")
        resetField("subject")
        resetField("message")

        fetch("https://desolate-taiga-63194.herokuapp.com/touchInTouchMessage", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then(res => res.json())
            .then(data => alert(data))
    }

    return (
        <div className={styles.touchWrapper}>
            <div className="d-flex justify-content-center">
                <div className="text-center">
                    <p className="lead mb-0">Journey</p>
                    <h4 className="display-4">Your Journey Starts Here</h4>
                </div>
            </div>
            <div className={styles.man}>
                <div className="continer">
                    <div className=" row">

                        <div className="col-lg-6">
                        </div>
                        <div className="col-lg-5 px-5">
                            <div className={styles.formStyle}>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <h2 className={styles.formTitle}>GET IN TOUCH</h2>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input className="form-control border-0 border-bottom mb-3" placeholder='Name' {...register("name", { required: true })} />
                                            {errors.name && <span className="text-danger">*This field is required</span>}
                                        </div>
                                        <div className="col-md-6">
                                            <input className="form-control border-0 border-bottom mb-3" placeholder="E-Mail" {...register("email", { required: true })} />
                                            {errors.email && <span className="text-danger">*This field is required</span>}
                                        </div>
                                    </div>

                                    <input className="form-control border-0 border-bottom mb-3" placeholder="Subject" {...register("subject", { required: true })} />
                                    {errors.subject && <span>This field is required</span>}

                                    <textarea className="form-control border-0 border-bottom" placeholder="Message" {...register("message", { required: true })} />
                                    {errors.message && <span>This field is required</span>}
                                    <br />
                                    <input type="submit" className="btn btn-light" value="Sent message" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default GetTouch;