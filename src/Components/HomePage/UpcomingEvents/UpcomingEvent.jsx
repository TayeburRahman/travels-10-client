import React, { useState } from 'react';
import Slider from "react-slick";

import styles from './UpcomingEvent.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import EventData from './EventData.js'
import EventCart from './EventCart';

const UpcomingEvent = () => {
    const [EventData, setEventData] = useState([])
    useState(() => {
        fetch('https://desolate-taiga-63194.herokuapp.com/upcommingevent')
            .then(res => res.json())
            .then(data => setEventData(data))
    }, [])
    var settings = {
        // dots: true,
        infinite: true,
        speed: 2000,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className={styles.eventWrapper}>
                        <div>
                            <div className="d-flex justify-content-center">
                                <div className={styles.textContent}>
                                    <div className="text-center">
                                        <p className="lead mb-0">Check Our Best Promotional Tour</p>
                                        <h1 className="display-4"> Upcoming Event </h1>
                                    </div>
                                </div>
                            </div>
                            <Slider {...settings}>
                                {
                                    EventData.map(singleData => <EventCart singleData={singleData} key={Math} />)
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UpcomingEvent;
