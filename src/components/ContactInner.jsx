import React from 'react'
import { Link } from 'react-router-dom'

const ContactInner = () => {
    return (
        <>
            <div className="map-sec">
                <iframe
                    src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Port%20Harcourt+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    allowFullScreen=""
                    loading="lazy"
                    title='Bizmaster'
                />
            </div>
            <div className="contact-area space">
                <div className="container">
                    <div className="contact-page-wrap bg-dark">
                        <div className="row gy-40 align-items-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="contact-info">
                                    <div className="contact-info_icon">
                                        <i className="fas fa-phone-alt" />
                                    </div>
                                    <div className="contact-info_details">
                                        <h6 className="contact-info_title">Phone</h6>
                                        <p className="contact-info_text">
                                            <span >+2347036869700</span> <br />
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="contact-info">
                                    <div className="contact-info_icon">
                                        <i className="fas fa-map-marker-alt" />
                                    </div>
                                    <div className="contact-info_details">
                                        <h6 className="contact-info_title">Location</h6>
                                        <p className="contact-info_text">
                                            Port Harcourt <br /> Nigeria
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="contact-info">
                                    <div className="contact-info_icon">
                                        <i className="fas fa-envelope" />
                                    </div>
                                    <div className="contact-info_details">
                                        <h6 className="contact-info_title">Email</h6>
                                        <p className="contact-info_text">
                                            <span>info@ifreks.com</span> <br />
                                            {/* <span>admin@yahoo.com</span> */}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>

    )
}

export default ContactInner