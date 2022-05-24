import React from 'react';
import styles from './NewsLetter.module.css'
import newsLetterImg from '../../../assets/newsLetterImg.webp'
import { useForm } from "react-hook-form";


const NewsLetter = () => {
    const { register, handleSubmit, resetField, formState: { errors } } = useForm({
        mode: "onChange",
        defaultValues: {
            email: ""
        }
    });
    const onSubmit = data => {
        resetField("email")
        // console.log(data)

        fetch("https://desolate-taiga-63194.herokuapp.com/subcribers", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(data => alert(data))
    };
    return (
        <div className={styles.newsLetterWrapper}>
            <div className="container">
                <div className="row">
                    <div className="jusify-content-center mb-5">
                        <div className="text-center">
                            <p className="lead mb-0">NewsLetter</p>
                            <h4 className="display-4">Get touch with us</h4>
                        </div>
                    </div>
                    <div className="col-md-6 my-auto">
                        <div className="mb-4">
                            <h1 className={styles.newsLtterTitle}>Subscribe To Get Updated For Our Newsletter</h1>
                            <p className="lead">Travel isn’t always pretty. It isn’t always comfortable. Sometimes it hurts, it even breaks your heart. But that’s okay. The journey changes you; it should change you. It leaves marks on your memory, on your consciousness, on your heart, and on your body. You take something with you. Hopefully, you leave something good behind. <strong className="fw-bold"> – Anthony Bourdain</strong> </p>

                            <div className="row">
                                <div className="col-md-12">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <input {...register("email", { required: true })} className="form-control mb-2" type="email" placeholder="E-Mail" />
                                        {errors.email && <span className="text-danger">E-Mail field is required</span>}
                                        <input className={`btn ${styles.newsLetterBtn}`} type="submit" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 my-auto">
                        <div className={styles.imgDiv}>
                            <div className={styles.imgStyle}>
                                <img src={newsLetterImg} alt="News Letter Pic" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;