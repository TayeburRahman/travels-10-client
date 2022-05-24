import React, { useEffect, useState } from 'react';
import styles from './Packages.module.css'
import PackageCart from '../PackageCart/PackageCart';
import travelPic from '../../../assets/travlePic.png';
import instra1 from '../../../assets/instra1.webp'
import instra2 from '../../../assets/instra2.webp'
import instra3 from '../../../assets/instra3.webp'
import instra4 from '../../../assets/instra4.webp'
import instra5 from '../../../assets/insta5.webp'
import instra6 from '../../../assets/instra6.webp'
// import popularDestinationData from '../../HomePage/PopularDestination/PopularDestinationData'

const Packages = () => {
    const [popularDestination, setPopularDestination] = useState([])
    useEffect(() => {
        fetch('https://desolate-taiga-63194.herokuapp.com/allTourPackages')
            .then(res => res.json())
            .then(data => setPopularDestination(data))
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="d-flex justify-content-center mb-5">
                    <div className="text-center">
                        <p className="lead mt-5 mb-0">See Our</p>
                        <h4 className="display-4">Memories</h4>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-9">
                    <div className="row">
                        {
                            popularDestination.slice(6, 14).map(singleData => <PackageCart singleData={singleData} key={Math.random()} />)
                        }
                    </div>
                </div>

                <div className="col-lg-3">
                    <div className={`card ${styles.tourSiteCard}`}>
                        <div className="card-body">
                            <h5 className={`card-title ${styles.siteTitle}`}>Find your tour</h5>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className={`form-label ${styles.lavel}`}>Where:</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className={`form-label ${styles.lavel}`}>Check-in:</label>
                                    <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className={`form-label ${styles.lavel}`}>Check-out:</label>
                                    <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className={`form-label ${styles.lavel}`}>Guest:</label>
                                    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div>
                                    <button type="submit" className={`btn ${styles.formBtn}`}>Find</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="card mt-4 border-0" >
                        <div className="card-body">
                            <h5 className="card-title mb-3">Instagram</h5>
                            <div className="d-flex flex-wrap justify-content-between">
                                <div className="mb-2">
                                    <img src={instra1} alt="" className="img-fluid" />
                                </div>
                                <div className="mb-2">
                                    <img src={instra2} alt="" className="img-fluid" />
                                </div>
                                <div className="mb-2">
                                    <img src={instra3} alt="" className="img-fluid" />
                                </div>
                                <div className="mb-2">
                                    <img src={instra4} alt="" className="img-fluid" />
                                </div>
                                <div className="mb-2">
                                    <img src={instra5} alt="" className="img-fluid" />
                                </div>
                                <div className="mb-2">
                                    <img src={instra6} alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={styles.travelPic}>
                    <img src={travelPic} alt="" className="img-fluid" />
                </div>

                <div className={styles.horizontal}>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default Packages;