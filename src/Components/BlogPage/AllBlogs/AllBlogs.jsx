import React, { useEffect, useState } from 'react';
import BlogCart from '../BlogCart/BlogCart'
import styles from './AllBlogs.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import bloggerMan from '../../../assets/bloggerMan.png'
import recentPostImg from '../../../assets/recentPostImg1.webp'
// import BlogData from '../../HomePage/Blog/BlogData'
const AllBlogs = () => {
    const [BlogData, setBlogData] = useState([])
    useEffect(() => {
        fetch('https://desolate-taiga-63194.herokuapp.com/addBlogs')
            .then(res => res.json())
            .then(data => setBlogData(data))
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

                <div className="col-lg-8">
                    {
                        BlogData.slice(3, 100).map(singleData => <BlogCart singleData={singleData} key={Math.random()} />)
                    }
                </div>

                <div className="col-lg-4">
                    <div className="card border-0 text-dark bg-light" >
                        <div className="card-body">

                            <form className="d-flex mt-3">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className={`btn ${styles.siteBarBtn}`} type="submit">Search</button>
                            </form>

                            <hr className="my-4" />
                            <div className="d-flex justify-content-center">
                                <img src={bloggerMan} className="card-img-top w-50" alt="..." />
                            </div>

                            <div className={styles.footerSocial}>
                                <h4 className={styles.bloggerName}>Charlie Barber</h4>
                                <p className={styles.bloggerDes}>Senior blog writer</p>

                                <i> <FontAwesomeIcon icon={faFacebookF} /> </i>
                                <i> <FontAwesomeIcon icon={faGoogle} /> </i>
                                <i> <FontAwesomeIcon icon={faTwitter} /> </i>
                                <i> <FontAwesomeIcon icon={faLinkedinIn} /> </i>
                                <i> <FontAwesomeIcon icon={faInstagram} /> </i>
                            </div>

                            <p className={styles.bloggerMessage}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                            <hr className="my-4" />
                            <a href="#" className={`btn d-block ${styles.siteBarBtn}`}><h5>Populra Posts</h5></a>

                            <div className="d-flex my-3">
                                <div className="me-3">
                                    <img src={recentPostImg} alt="" className="img-fluid" />
                                </div>
                                <div className="my-auto">
                                    <h6 className={styles.recentPostTitle}>Space The Final Frontier</h6>
                                    <p className="m-0">January 12, 2019</p>
                                </div>
                            </div>
                            <div className="d-flex my-3">
                                <div className="me-3">
                                    <img src={recentPostImg} alt="" className="img-fluid" />
                                </div>
                                <div className="my-auto">
                                    <h6 className={styles.recentPostTitle}>Space The Final Frontier</h6>
                                    <p className="m-0">January 12, 2019</p>
                                </div>
                            </div>
                            <div className="d-flex my-3">
                                <div className="me-3">
                                    <img src={recentPostImg} alt="" className="img-fluid" />
                                </div>
                                <div className="my-auto">
                                    <h6 className={styles.recentPostTitle}>Space The Final Frontier</h6>
                                    <p className="m-0">January 12, 2019</p>
                                </div>
                            </div>
                            <div className="d-flex my-3">
                                <div className="me-3">
                                    <img src={recentPostImg} alt="" className="img-fluid" />
                                </div>
                                <div className="my-auto">
                                    <h6 className={styles.recentPostTitle}>Space The Final Frontier</h6>
                                    <p className="m-0">January 12, 2019</p>
                                </div>
                            </div>

                            <hr className="my-4" />

                            <a href="#" className={`btn d-block ${styles.siteBarBtn}`}><h5>Category</h5></a>

                            <ul className="list-group list-group-flush my-3">
                                <li className="list-group-item mb-2">
                                    <div className={styles.categoryList}>
                                        <p>Technology</p>
                                        <p>21</p>
                                    </div>
                                </li>
                                <li className="list-group-item mb-2">
                                    <div className={styles.categoryList}>
                                        <p>Fashion</p>
                                        <p>11</p>
                                    </div>
                                </li>
                                <li className="list-group-item mb-2">
                                    <div className={styles.categoryList}>
                                        <p>Architecture</p>
                                        <p>14</p>
                                    </div>
                                </li>
                                <li className="list-group-item mb-2">
                                    <div className={styles.categoryList}>
                                        <p>Food</p>
                                        <p>23</p>
                                    </div>
                                </li>
                                <li className="list-group-item mb-2">
                                    <div className={styles.categoryList}>
                                        <p>Lifestyle</p>
                                        <p>17</p>
                                    </div>
                                </li>
                                <li className="list-group-item mb-2">
                                    <div className={styles.categoryList}>
                                        <p>Art</p>
                                        <p>16</p>
                                    </div>
                                </li>
                                <li className="list-group-item mb-2">
                                    <div className={styles.categoryList}>
                                        <p>Adventure</p>
                                        <p>17</p>
                                    </div>
                                </li>
                            </ul>

                            <hr className="my-4" />

                            <a href="#" className={`btn d-block ${styles.siteBarBtn}`}><h5>NewsLetter</h5></a>

                            <p className={styles.newsLetterDesc}>Here, I focus on a range of items and features that we use in life without giving them a second thought.</p>

                            <form className="d-flex mt-3">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className={`btn ${styles.siteBarBtn}`} type="submit">Subcribe</button>
                            </form>

                            <p className={styles.unsubscribe}>You can unsubscribe at any time</p>

                            <hr className="my-4" />

                            <a href="#" className={`btn d-block ${styles.siteBarBtn}`}><h5>TagClouds</h5></a>

                            <div className="my-3 d-flex flex-wrap justify-content-between">
                                <h5>
                                    <span className="badge text-dark bg-light">Technology</span>
                                </h5>
                                <h5>
                                    <span className="badge text-dark bg-light">Fashion</span>
                                </h5>
                                <h5>
                                    <span className="badge text-dark bg-light">Architecture</span>
                                </h5>
                                <h5>
                                    <span className="badge text-dark bg-light">Fashion</span>
                                </h5>
                                <h5>
                                    <span className="badge text-dark bg-light">Food</span>
                                </h5>
                                <h5>
                                    <span className="badge text-dark bg-light">Lifestyle</span>
                                </h5>
                                <h5>
                                    <span className="badge text-dark bg-light">Art</span>
                                </h5>
                                <h5>
                                    <span className="badge text-dark bg-light">Adventure</span>
                                </h5>
                            </div>

                        </div>
                    </div>
                </div>

                <div className={styles.horizontal}>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default AllBlogs;