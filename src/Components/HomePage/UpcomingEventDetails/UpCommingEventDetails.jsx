import React, { useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import travelPic from '../../../assets/travlePic.png';
import styles from './UpCommingEventDetails.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarWeek, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useParams } from 'react-router-dom';


const UpCommingEventDetails = () => {
    const [event, setEvent] = useState({})
    const { shortDescription, presentPrice, previousPrice, peoples, nights, days, name, message, eventDate, displayPhoto } = event
    const { id } = useParams()
    // console.log(id)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        fetch(`https://desolate-taiga-63194.herokuapp.com/upcommingevent/${id}`)
            .then(res => res.json())
            .then(data => setEvent(data))
    }, [id])

    const navigate = useNavigate()
    const handleBookNow = () => {
        navigate('/bookNow')
    }
    return (
        <>
            <Navbar />
            <div className="container">
                <h4 className="display-4">{name}</h4>
                <h5 className="lead pb-2">{message}</h5>
                <div className="row">
                    <div className="col-md-8">
                        <img src={displayPhoto} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-4">
                        <div className={styles.packageInfo}>
                            <h4 className="mt-3 text-danger">Book This Tour</h4>
                            <p className="lead">Starting Price {presentPrice} Tk.</p>
                            <button onClick={() => handleBookNow()} className={`btn ${styles.bookNowBtn}`}>Book Now</button>
                            <h3>Package : {presentPrice} Tk. <del>{previousPrice} Tk.</del> </h3>
                            <p className="lead"><FontAwesomeIcon className="me-2" icon={faBed} /> {days} Days {nights} Night</p>
                            <p className="lead"><FontAwesomeIcon className="me-3" icon={faCalendarWeek} />  {eventDate} </p>
                            <p className="lead"><FontAwesomeIcon className="me-3" icon={faUserAlt} /> {peoples} Peoples</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <marquee className={styles.marqueeStyle}>
                <h4>You want to go beautiful place with your friends, family or partner. We are coming for you with your best destination. For Query Call Us: +880 1521 555 222</h4>
            </marquee> */}
            <div className="container mt-3">
                <div className="row">
                    <div>
                        <p className="lead">{shortDescription}</p>
                    </div>
                </div>

                <div className={styles.travelPic}>
                    <img src={travelPic} alt="" className="img-fluid" />
                </div>

                <div className={styles.horizontal}>
                    <hr />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default UpCommingEventDetails;