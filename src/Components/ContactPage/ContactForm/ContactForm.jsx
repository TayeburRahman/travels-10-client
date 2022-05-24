import React from 'react';
import contactUsSiteImg from '../../../assets/contactUsSiteImg.jpg'
import styles from './ContactForm.module.css'
import { useForm } from "react-hook-form";

const ContactForm = () => {
    const { register, handleSubmit, resetField, formState: { errors } } = useForm(
        {
            mode: "onChange",
            defaultValues: {
                name: "",
                email: "",
                subject: "",
                message: ""
            }
        }
    );
    const onSubmit = data => {
        resetField("name")
        resetField("email")
        resetField("subject")
        resetField("message")

        fetch("https://desolate-taiga-63194.herokuapp.com/contactUsMessage", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then(res => res.json())
            .then(data => alert(data))
    };

    return (
        <div className={styles.formWrapper}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 my-auto">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h2 className={styles.formTitle}>Drop a message</h2>

                            <input type="text" className="form-control mb-3 border-0 border-bottom" placeholder="Your Name" {...register("name", { required: true })} />
                            {errors.name && <span className="text-danger">*Name field is required</span>}

                            <input type="email" className="form-control mb-3 border-0 border-bottom" placeholder="E-Mail" {...register("email", { required: true })} />
                            {errors.email && <span className="text-danger">*Email field is required</span>}

                            <input type="text" className="form-control mb-3 border-0 border-bottom" placeholder="Subject" {...register("subject", { required: true })} />
                            {errors.subject && <span className="text-danger">*Subject field is required</span>}

                            <input type="text" className="form-control mb-4 border-0 border-bottom" placeholder="Message" {...register("message", { required: true })} />
                            {errors.message && <span className="text-danger">*Message field is required</span>}

                            <input className={styles.messageBtn} type="Submit" />
                        </form>
                    </div>
                    <div className="col-md-6">
                        <div className="pt-5">
                            <img src={contactUsSiteImg} alt="" className="img-fluid" />
                        </div>
                    </div>

                    <div className={styles.horizontal}>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;