import React from 'react';
import styles from './FAQ.module.css'
import faqSiteImage from '../../../assets/faqSiteImg.png'
const FAQ = () => {
    return (
        <div className={styles.faqWrapper}>
            <div className="container">
                <div className="row">
                    <div className={styles.faqContentWrapper}>
                        <div className="d-flex justify-content-center">
                            <div className="text-center">
                                <p className="lead mb-0">FAQ</p>
                                <h4 className="display-4">Full range of travel service</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 my-auto">
                        <div>
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingOne">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            <p className="lead mb-0">Travelez has the  money-back policy?</p>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body lead">Yes, our company has a money-back policy. For return policies, you must let us know before 7 days of our tour plan.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            <p className="lead mb-0">Does your company have a multiple installments policy?</p>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body lead">Yes, we accept a 6 to 12-month installment policy if you have any credit cards.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            <p className="lead mb-0">Any hidden taxes have?</p>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body lead">No, we have no hidden policy. we don't accept any money are package exclude.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <img src={faqSiteImage} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;