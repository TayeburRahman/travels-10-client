import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import styles from './BlogDetails.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import recentPostImg from '../../../assets/recentPostImg1.webp'
import { faFacebookF, faGoogle, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';


const BlogDetails = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    let { id } = useParams();
    // console.log(id)
    const [singleBlog, setSingleBlog] = useState({})
    const [comment, setComment] = useState([])

    useEffect(() => {
        fetch(`https://desolate-taiga-63194.herokuapp.com/singleBlog/${id}`)
            .then(res => res.json())
            .then(data => {
                setSingleBlog(data)
                setComment(data.comments)
            })
    }, [id])
    // console.log(singleBlog)
    // console.log(comment.length)
    const { subTitle, tag, photo, authorName, authorMessage, authorPhoto, blogDescription, date } = singleBlog
    // console.log(title, tag);
    return (
        <div className={styles.BlogDetailsWrapper}>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div>
                            <p className="lead">{date}</p>
                            <h2 className={styles.singleBlogTitle}>{subTitle}</h2>
                            <div className="d-flex align-items-center mt-3">
                                <FontAwesomeIcon className="mb-3 me-1" icon={faUserAlt} />
                                <p className="lead">{tag}</p>
                                <p className="ms-3">|</p>
                                <FontAwesomeIcon className="mb-3 ms-3 me-1" icon={faComment} />
                                <p className="lead">{comment.length > 1 ? `${comment.length} Comments` : `${comment.length} Comment`}</p>
                            </div>
                        </div>

                        <div>
                            <img src={photo} alt="" className="img-fluid mb-4" />
                            <p className={styles.singleBlogDescription}>{blogDescription}</p>
                        </div>

                        <hr />

                        <div className="d-flex justify-content-between mt-3 mx-1">
                            <div className="d-flex align-items-center">
                                <FontAwesomeIcon className="mb-3 me-1" icon={faHeart} />
                                <p> Lily and 4 people like this </p>
                            </div>
                            <div className={styles.socialIcons}>
                                <i> <FontAwesomeIcon icon={faFacebookF} /> </i>
                                <i> <FontAwesomeIcon icon={faGoogle} /> </i>
                                <i> <FontAwesomeIcon icon={faTwitter} /> </i>
                                <i> <FontAwesomeIcon icon={faLinkedinIn} /> </i>
                                <i> <FontAwesomeIcon icon={faInstagram} /> </i>
                            </div>
                        </div>

                        <div className={styles.authorDes}>
                            <div className="d-flex align-items-center">
                                <img src={authorPhoto} alt="" className="img-fluid" />
                                <div className="my-auto ms-3">
                                    <h6 className={styles.authorName}>{authorName}</h6>
                                    <p className="mb-0 lead">{authorMessage}</p>
                                </div>
                            </div>
                        </div>

                        <hr />

                        <div>
                            <h5 className={styles.commentHeader}>{comment.length > 1 ? `${comment.length} Comments` : `${comment.length} Comment`}</h5>

                            {
                                comment.map(ele => (
                                    <div key={Math.random()} className="d-flex align-items-center mb-4">
                                        <img src={ele.commentorPhoto} alt="" className="img-fluid" />
                                        <div className="ms-3">
                                            <p className={styles.commentText}>{ele.commentMessage}</p>
                                            <div className="d-flex flex-wrap">
                                                <p>{ele.commentorName}</p>
                                                <p className="ms-3">{ele.commentTime}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                            <hr />

                            <div className="mb-3">
                                <h5 className={styles.replyHeader}>Leave a Reply</h5>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <textarea type="text" className="form-control mb-3 border-0 border-bottom" placeholder="Comment" {...register("comment", { required: true })} />
                                    {errors.comment && <span className="text-danger">*This field is required</span>}

                                    <input type="text" className="form-control mb-3 border-0 border-bottom" placeholder="Name" {...register("name", { required: true })} />
                                    {errors.name && <span className="text-danger">*This field is required</span>}

                                    <input className={styles.commentBtn} type="submit" />
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card border-0">
                            <div className={styles.customCart}>
                                <div className="card-body">

                                    <form className="d-flex mt-3">
                                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                        <button className={`btn ${styles.siteBarBtn}`} type="submit">Search</button>
                                    </form>

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
                    </div>

                    <div className={styles.horizontal}>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;