import React, { useEffect, useState } from 'react';
import DestinationCard from './DestinationCard';
import styles from './PopularDestination.module.css'
// import popularDestinationData from './PopularDestinationData'

const PopularDestination = () => {
    const [tourPackage, setTourPackage] = useState([])
    useEffect(() => {
        fetch('https://desolate-taiga-63194.herokuapp.com/allTourPackages')
            .then(res => res.json())
            .then(data => {
                setTourPackage(data)
            })
    }, [])
    // console.log(tourPackage);
    return (
        <div className="container">
            <div className="d-flex justify-content-center mb-5">
                <div className={styles.textContent}>
                    <div className="text-center">
                        <p className="lead mb-0">Simply Amazing Places</p>
                        <h4 className="display-4">Popular Destinations</h4>
                    </div>
                </div>
            </div>
            <div className="row">
                {
                    tourPackage.slice(0, 6).map(singleData => <DestinationCard singleData={singleData} key={Math.random()} />)
                }
            </div>
        </div>
    );
};

export default PopularDestination;