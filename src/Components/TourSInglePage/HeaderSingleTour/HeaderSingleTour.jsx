import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useTourPlan from '../../CartTourPlan/useTourPlan';
import Navbar from '../../Shared/Navbar/Navbar'
import styles from './HeaderSingleTour.module.css';

const HeaderSingleTour = () => {
    const { selectTourPackage } = useTourPlan()
    const [tours, setTours] = useState({})
    const navigate = useNavigate()
    const { id } = useParams()
    // console.log(id)
    useEffect(() => {
        fetch(`https://desolate-taiga-63194.herokuapp.com/singleTourPackage/${id}`)
            .then(res => res.json())
            .then(data => setTours(data))
    }, [id])
    // console.log(tours)
    const { packageName, packagePresentPrice, prePackagePrice } = tours
    const handleBookNow = (tours) => {
        // console.log(tours);
        selectTourPackage(tours)
        navigate("/bookNow")
    }
    const handleHostContact = () => {
        navigate('/host')
    }
    return (
        <>
            <Navbar />
            <div className={styles.headerWrapper}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="d-flex justify-content-between flex-wrap">
                                <div>
                                    <h4>{packageName}</h4>
                                    <p>Seller : Travlez Tours Pvt Ltd </p>
                                </div>
                                <div>
                                    <p className="mb-0">Starting Forms</p>
                                    <h4 className="mb-0">{packagePresentPrice} Tk.</h4>
                                    <h5 className="text-muted"><del>{prePackagePrice} Tk.</del></h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex align-items-end">
                                <button onClick={() => handleBookNow(tours)} className={`btn me-2 ${styles.singleTourBtn}`}>Book Now</button>
                                <button onClick={() => handleHostContact()} className={`btn ${styles.singleTourBtn}`}>Conact Host</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderSingleTour;