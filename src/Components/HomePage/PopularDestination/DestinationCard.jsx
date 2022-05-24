import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import styles from './DestinationCart.module.css'
import { useNavigate } from 'react-router-dom';

AOS.init();

const DestinationCard = (props) => {
    const navigate = useNavigate()
    const handleSingleTourPage = (id) => {
        navigate(`/singleTour/${id}`)
    }
    const { displayPhoto, totaldays, name, packageGroupPeoples, packagePresentPrice, rating, _id } = props.singleData
    return (
        <div onClick={() => handleSingleTourPage(_id)} data-aos="zoom-in" data-aos-duration="2000" className="col-md-6 col-lg-4 mb-4">
            <div className={`card ${styles.customCard}`}>
                <div className={styles.imgDiv}>
                    <img src={displayPhoto} className="card-img-top" alt="..." />
                    <div className={styles.imgPack}><h4>{packageGroupPeoples} persons/{totaldays} days</h4></div>
                </div>
                <div className="card-body">
                    <h3 className={`card-title ${styles.tourTitle}`}>{name}</h3>
                    <h4 className={`card-text ${styles.tourMessage}`}>Tk {packagePresentPrice}</h4>
                    <div className={`card-text ${styles.tourMessage}`}>
                        {rating}
                        <i><FontAwesomeIcon className="ms-2" icon={faStar} /></i>
                        <i><FontAwesomeIcon icon={faStar} /></i>
                        <i><FontAwesomeIcon icon={faStar} /></i>
                        <i><FontAwesomeIcon icon={faStar} /></i>
                        <i><FontAwesomeIcon icon={faStar} /></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationCard;