import React, { useEffect, useState } from 'react';
import styles from './ImgOverview.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBed, faBinoculars, faBus, faCar, faCoffee, faHeart, faMoneyCheckDollar, faSpoon } from '@fortawesome/free-solid-svg-icons'
import ImgCarosel from '../ImgCarosel/ImgCarosel';
import { useParams } from 'react-router-dom';


const ImgOverview = () => {
    const [tours, setTours] = useState({})
    const [itinerary, setItinerary] = useState([])
    const { id } = useParams()
    // console.log(id)
    useEffect(() => {
        fetch(`https://desolate-taiga-63194.herokuapp.com/singleTourPackage/${id}`)
            .then(res => res.json())
            .then(data => {
                setTours(data)
                setItinerary(data.tourPlanDays)
            })
    }, [id])
    // console.log(tours)
    // console.log(itinerary);
    const { overView, stayPlanDays, stayPlanNight, discount } = tours;
    // const { day, describe } = itinerary;
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div>
                            <ImgCarosel tourData={tours} />
                        </div>
                    </div>
                    <div className="col-md-3 mt-4">
                        <div>
                            <h4>Customizable Tour</h4>
                            <p>Customizable itineraries where you may choose transport, stay and sightseeing as per your taste and comfort</p>

                            <hr />
                            <h4>Stay Plan</h4>
                            <p className="mb-0">{stayPlanDays} Days</p>
                            <p>{stayPlanNight} Nights</p>

                            <hr />
                            <p>{discount} Discount</p>
                            <hr />
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-6">
                        <h4>Inclusions</h4>
                        <div className="d-flex my-3 flex-wrap">
                            <div className={styles.inclusions}>
                                <i><FontAwesomeIcon icon={faBed} /></i>
                                <p>4 stars</p>
                            </div>
                            <div className={styles.inclusions}>
                                <i><FontAwesomeIcon icon={faCar} /></i>
                                <p>Transport</p>
                            </div>
                            <div className={styles.inclusions}>
                                <i><FontAwesomeIcon icon={faSpoon} /></i>
                                <p>Meals</p>
                            </div>
                            <div className={styles.inclusions}>
                                <i><FontAwesomeIcon icon={faBinoculars} /></i>
                                <p>SightSeeing</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h4>Themes</h4>
                        <div className="d-flex my-3 flex-wrap">
                            <div className={styles.inclusions}>
                                <i><FontAwesomeIcon icon={faHeart} /></i>
                                <p>Romantic</p>
                            </div>
                            <div className={styles.inclusions}>
                                <i><FontAwesomeIcon icon={faCoffee} /></i>
                                <p>Coffee</p>
                            </div>
                            <div className={styles.inclusions}>
                                <i><FontAwesomeIcon icon={faBus} /></i>
                                <p>Weekend trips</p>
                            </div>
                            <div className={styles.inclusions}>
                                <i><FontAwesomeIcon icon={faMoneyCheckDollar} /></i>
                                <p>Bestseller</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <hr />
                    <h4>Overview</h4>
                    <p>{overView}</p>
                    <hr />
                </div>

                <div className="row">
                    <h4>Package Itinerary</h4>
                    {
                        itinerary.map(ele =>
                            <div key={Math.random()} className="py-2">
                                <h4>{ele.day}</h4>
                                <p>{ele.describe}</p>
                            </div>
                        )
                    }
                    <hr />
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <h4>Inclusions</h4>
                        <ul className="list-group">
                            <div className="d-flex align-items-center">
                                <i><FontAwesomeIcon icon={faArrowRight} /></i>
                                <li className="list-group-item border-0">  Welcome drink on arrival</li>
                            </div>
                            <div className="d-flex align-items-center">
                                <i><FontAwesomeIcon icon={faArrowRight} /></i>
                                <li className="list-group-item border-0"> Wi-Fi</li>
                            </div>
                            <div className="d-flex align-items-center">
                                <i><FontAwesomeIcon icon={faArrowRight} /></i>
                                <li className="list-group-item border-0">Parking and Toll tax</li>
                            </div>
                            <div className="d-flex align-items-center">
                                <i><FontAwesomeIcon icon={faArrowRight} /></i>
                                <li className="list-group-item border-0"> Meet and greet at arrival</li>
                            </div>
                            <div className="d-flex align-items-center">
                                <i><FontAwesomeIcon icon={faArrowRight} /></i>
                                <li className="list-group-item border-0"> Dinner</li>
                            </div>
                            <div className="d-flex align-items-center">
                                <i><FontAwesomeIcon icon={faArrowRight} /></i>
                                <li className="list-group-item border-0">Pick and Drop at time of arrival/departure</li>
                            </div>
                            <div className="d-flex align-items-center">
                                <i><FontAwesomeIcon icon={faArrowRight} /></i>
                                <li className="list-group-item border-0"> Driver's allowance, Road tax and Fuel charges</li>
                            </div>
                            <div className="d-flex align-items-center">
                                <i><FontAwesomeIcon icon={faArrowRight} /></i>
                                <li className="list-group-item border-0">Tea/Coffee Kettle in the Room</li>
                            </div>
                            <div className="d-flex align-items-center">
                                <i><FontAwesomeIcon icon={faArrowRight} /></i>
                                <li className="list-group-item border-0"> Breakfast</li>
                            </div>
                            <div className="d-flex align-items-center">
                                <i><FontAwesomeIcon icon={faArrowRight} /></i>
                                <li className="list-group-item border-0">Sightseeing by private car</li>
                            </div>
                            <div className="d-flex align-items-center">
                                <i><FontAwesomeIcon icon={faArrowRight} /></i>
                                <li className="list-group-item border-0">All tours and transfers by Personal Car is included</li>
                            </div>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="list-group">
                            <h4>Exclusions</h4>
                            <div className="d-flex align-items-center">
                                <i><FontAwesomeIcon icon={faArrowRight} /></i>
                                <li className="list-group-item border-0"> Camera fee</li>
                            </div>
                            <div className="d-flex align-items-center">
                                <i><FontAwesomeIcon icon={faArrowRight} /></i>
                                <li className="list-group-item border-0"> Alcoholic / Non- Alcoholic beverages </li>
                            </div>
                            <div className="d-flex align-items-center">
                                <i><FontAwesomeIcon icon={faArrowRight} /></i>
                                <li className="list-group-item border-0">Travel insurance</li>
                            </div>
                            <div className="d-flex align-items-center">
                                <i><FontAwesomeIcon icon={faArrowRight} /></i>
                                <li className="list-group-item border-0"> Any Airfare / Train fare </li>
                            </div>
                            <div className="d-flex align-items-center">
                                <i><FontAwesomeIcon icon={faArrowRight} /></i>
                                <li className="list-group-item border-0">Expenses caused by factors beyond our control like rail and flight delays, roadblocks, vehicle mal-functions, political disturbances etc.</li>
                            </div>
                            <div className="d-flex align-items-center">
                                <i><FontAwesomeIcon icon={faArrowRight} /></i>
                                <li className="list-group-item border-0"> Tips, laundry and phone call </li>
                            </div>
                            <div className="d-flex align-items-center">
                                <i><FontAwesomeIcon icon={faArrowRight} /></i>
                                <li className="list-group-item border-0">Entrance fees to monuments and museum</li>
                            </div>
                            <div className="d-flex align-items-center">
                                <i><FontAwesomeIcon icon={faArrowRight} /></i>
                                <li className="list-group-item border-0"> All personal expenses </li>
                            </div>
                            <div className="d-flex align-items-center">
                                <i><FontAwesomeIcon icon={faArrowRight} /></i>
                                <li className="list-group-item border-0">Atal Tunnel </li>
                            </div>
                            <div className="d-flex align-items-center">
                                <i><FontAwesomeIcon icon={faArrowRight} /></i>
                                <li className="list-group-item border-0">Any pass permit fee and conveyance charges</li>
                            </div>
                        </ul>
                    </div>
                </div>
                <hr />


                <div className="row">
                    <div className="col-md-6">
                        <h4>Payment Policy</h4>
                        <p className="mb-0">Booking Fee</p>
                        <p>From 01 Jan 2022 to 31 Dec 2023</p>
                        <ul className="list-group">
                            <div className="d-flex align-items-center">
                                <i><FontAwesomeIcon icon={faArrowRight} /></i>
                                <li className="list-group-item border-0">  90 or more days before departure: 30%</li>
                            </div>
                            <div className="d-flex align-items-center">
                                <i><FontAwesomeIcon icon={faArrowRight} /></i>
                                <li className="list-group-item border-0"> Between 89 to 60 days before departure: 30% </li>
                            </div>
                            <div className="d-flex align-items-center">
                                <i><FontAwesomeIcon icon={faArrowRight} /></i>
                                <li className="list-group-item border-0">Between 59 to 30 days before departure: 60%</li>
                            </div>
                            <div className="d-flex align-items-center">
                                <i><FontAwesomeIcon icon={faArrowRight} /></i>
                                <li className="list-group-item border-0"> Between 29 to 7 days before departure: 100%</li>
                            </div>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="list-group">
                            <h4>Cancellation Policy</h4>
                            <p className="mb-0">Cancellation charges per person</p>
                            <p>From 01 Jan 2022 to 31 Dec 2023</p>
                            <div className="d-flex align-items-center">
                                <i><FontAwesomeIcon icon={faArrowRight} /></i>
                                <li className="list-group-item border-0"> 90 or more days before departure: 10%</li>
                            </div>
                            <div className="d-flex align-items-center">
                                <i><FontAwesomeIcon icon={faArrowRight} /></i>
                                <li className="list-group-item border-0"> Between 89 to 60 days before departure: 20%
                                </li>
                            </div>
                            <div className="d-flex align-items-center">
                                <i><FontAwesomeIcon icon={faArrowRight} /></i>
                                <li className="list-group-item border-0"> Between 59 to 30 days before departure: 50%
                                </li>
                            </div>
                            <div className="d-flex align-items-center">
                                <i><FontAwesomeIcon icon={faArrowRight} /></i>
                                <li className="list-group-item border-0"> Between 29 to 15 days before departure: 75%
                                </li>
                            </div>
                            <div className="d-flex align-items-center">
                                <i><FontAwesomeIcon icon={faArrowRight} /></i>
                                <li className="list-group-item border-0"> Between 14 to 1 days before departure: 100%</li>
                            </div>
                        </ul>
                    </div>
                </div>
                <hr />

                <div className="row">
                    <h4>Terms and Conditions</h4>
                    <p>- The users availing services from us shall be considered and reckoned to have read, understood and accepted the all terms and conditions. Liabilities of our tour package shall be restricted to the scope of this agreement.</p>
                    <p>- Please read these terms and conditions of us carefully before using our services.</p>
                    <p>- Booking Process and Payment: As per the booking policy as soon you are ready to proceed with the reservations, you will be required to pay 30% of the total tour cost as an advance payment to make the booking. If you have any flight or train booking request, then apart from the 30% of the tour price, you would also need to pay us the full amount for air/train tickets to be issued.</p>
                    <p>- After receiving the advance payment, we will initiate the bookings for your hotels reservations, flight tickets and start making necessary arrangements for your trip and keep you updated. Once booking is done, a reservation status will be sent to you by email and then you will be required to pay another 30% of the tour cost as a second advance payment.</p>
                    <p>- If any advance payment is already made to the hotel, resort, flight/train or other services, then cancellation charges will be applicable on particular and we shall advise the amended rates on new requirements as requested services.</p>
                    <p>- Refund: With regard to refund of unused / unutilized services (which are paid for and cancelled in advance) the refund amount would be worked out on the basis of cancellation policy as described above and the money would be accordingly refunded to the person who has made the payment to us.</p>
                    <p>- Please note that the refund process may take 2 - 7 weeks due to banking procedures. Refund process may take more time depending on the amount that we would be able to recover from the hoteliers we patronize. If the refund is made to the credit card account or to bank account, the bank charges would be debited from the refund amount.</p>
                    <p>- Arrival and departure policy: Check-in timings: 12:00 - 15:00 hours. Early arrival is subject to availability. For guaranteed early check-in, reservation needs to be made starting from the previous night. Check-out timings: 10:00 - 12:00 hours. Late check-outs are available on request and subject to availability.</p>
                    <p>- Payment for extra usage of vehicle: Vehicle is provided as per the itinerary; so please note that the cost of extra usage of vehicle (cars / coaches with the driver) is not included in the services and hence extra usage of the vehicle after transfer or after sightseeing is not allowed until and unless it is mentioned in the detailed itinerary / services.</p>
                </div>
            </div>

            <div className={styles.singleTourBg}>
                <div>
                    <div className="">
                        <h4 className={`display-2 ${styles.singleTourBannerText}`}>Enjoy your trips with our best plan</h4>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className={styles.horizontal}>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImgOverview;