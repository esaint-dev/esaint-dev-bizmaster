import React from 'react'
import { Link } from 'react-router-dom'
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
const AboutFive = () => {
    return (
        <section className='bg-dark2'>
            <div className="about-area-5 space-bottom">
                <div className="shadow-shape-left" />
                <div className="container">
                    <div className="row gy-40 gx-60 align-items-center justify-content-between">
                        <div className="col-xl-5">
                            <div className="about-thumb5">
                                <div className="img1">
                                    <img src="assets/img/normal/about_5-2.png" alt="img" />
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="title-area mb-40">
                                <span className="sec-title text-dark">
                                    <img src="assets/img/icon/title_left2.svg" alt="shape" />
                                    About Us
                                </span>
                                
                                <p className="sec-text text-white mb-30">
                                    Ifrekstrading is a legally registered business with the 
                                    Corporate Affairs Commission, operating under the 
                                    business name ifreks.com . Our journey began as a 
                                    cryptocurrency exchange in 2018, but we soon recognized 
                                    the demand for crypto education. Consequently, 
                                    
                                </p>
                                <p className="sec-text text-white">
                                We ventured into offering education and have trained 
                                over 1000 students from 2019 until the present.
                                </p>
                            </div>
                            <div className="btn-wrap">
                                <Link to="/about" className="global-btn style3">
                                    Explore More <i className="fas fa-arrow-right ms-2" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default AboutFive