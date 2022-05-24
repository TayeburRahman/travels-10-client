import React from 'react';
import CountUp from 'react-countup';
import styles from './Counter.module.css';
import aboutMounting from '../../../assets/aboutMounting.svg';
import iceland from '../../../assets/aboutIsland.svg';
import camera from '../../../assets/aboutCamera.svg';
import ship from '../../../assets/aboutShip.svg';
const Counter = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-3">
                    <div className={styles.counterWrapper}>
                        <img src={aboutMounting} alt="" className="img-fluid" />
                        <h2 className="display-2">
                            <CountUp end={37} duration={15} />
                        </h2>
                        <h4 className={styles.CounterName}>Mounting tours</h4>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className={styles.counterWrapper}>
                        <img src={iceland} alt="" className="img-fluid" />
                        <h2 className="display-2">
                            <CountUp end={22} duration={15} />
                        </h2>
                        <h4 className={styles.CounterName}>Iceland tours</h4>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className={styles.counterWrapper}>
                        <img src={camera} alt="" className="img-fluid" />
                        <h2 className="display-2">
                            <CountUp end={49} duration={15}/>
                        </h2>
                        <h4 className={styles.CounterName}>Photos click</h4>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className={styles.counterWrapper}>
                        <img src={ship} alt="" className="img-fluid" />
                        <h2 className="display-2">
                            <CountUp end={57} duration={15} />
                        </h2>
                        <h4 className={styles.CounterName}>Ship tours</h4>
                    </div>
                </div>

                <div className={styles.horizontal}>
                    <hr/>
                </div>
            </div>
        </div>
    );
};

export default Counter;