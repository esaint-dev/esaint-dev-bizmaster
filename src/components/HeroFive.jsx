import React from 'react'
import { Link } from 'react-router-dom'

const HeroFive = () => {
    return (
        <section className='bg-dark2'>
            <div
                className="hero-wrapper hero-5"
                id="hero">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="hero-style5 text-center">
                                <h1 className="hero-title text-white">
                                    Behavioral Finance,
                                    <span className="text-theme2"> Hotspot</span> For Real Traders.
                                </h1>
                                <p className="hero-text text-white">
                                    We ventured into offering education and have trained over 1000 students from 2019 until the present.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="hero-thumb5-1">
                                <img src="assets/img/hero/hero_thumb_5_3.png" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed-bottom right-100 top-50 p-3" style={{ zIndex: "6", left: "initial" }}>
                        <Link target='_blank' to="https://api.whatsapp.com/send/?phone=2347036869700&text&type=phone_number&app_absent=0">
                            <img src="assets/img/icon/WhatsApp.png" width={60} alt="img" />
                        </Link>
                    </div>
        </section>


    )
}

export default HeroFive