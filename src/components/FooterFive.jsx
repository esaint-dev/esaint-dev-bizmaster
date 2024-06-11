import React from 'react'
import { Link } from 'react-router-dom'

const FooterFive = () => {
    return (
        <section className='bg-dark2'>
            <footer
                className="footer-wrapper footer-layout5">
                <div className="container">
                    <div className="widget-area">
                        <div className="row justify-content-between">
                            <div className="col-md-6 col-xl-4">
                                <div className="widget footer-widget widget-about">
                                    <div className="about-logo">
                                        <Link to="/">
                                            <img src="assets/img/ifrelwhite.png" height={200} width={250} alt="Ifreks" />
                                        </Link>
                                    </div>
                                    <p className="footer-text mb-30 mt-30">
                                        We ventured into offering education and have trained
                                        over 1000 students from 2019 until the present.
                                    </p>
                                    <div className="social-btn">
                                        <Link target="_blank" to="https://www.instagram.com/ifrekstrading/">
                                            <i className="fab fa-instagram" />
                                        </Link>
                                        <Link target="_blank" to="https://t.me/ifrekstrading">
                                            <i className="fab fa-telegram" />
                                        </Link>
                                        <Link target="_blank" to="https://twitter.com/ifrekscom">
                                            <i className="fab fa-twitter" />
                                        </Link>
                                        <Link target="_blank" to="https://web.facebook.com/Ifreks">
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                        <Link target="_blank" to="https://api.whatsapp.com/send/?phone=2347036869700&text&type=phone_number&app_absent=0">
                                            <i className="fab fa-whatsapp" />
                                        </Link>
                                        <Link target="_blank" to="https://www.youtube.com/channel/UCoHDV9MKrCGIqORByTSFfEQ">
                                            <i className="fab fa-youtube" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-auto">
                                <div className="widget widget_nav_menu footer-widget">
                                    <h3 className="widget_title">Useful Links</h3>
                                    <div className="menu-all-pages-container">
                                        <ul className="menu">
                                            <li>
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li>
                                                <Link to="/about">About</Link>
                                            </li>
                                            <li>
                                                <Link to="/contact">Contact</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-3">
                                <div className="widget footer-widget">
                                    <h3 className="widget_title">Our Office</h3>
                                    <div className="widget-contact2">
                                        <div className="widget-contact-grid">
                                            <i className="fas fa-phone-alt" />
                                            <div className="contact-grid-details">
                                                <h6>
                                                    <Link to="tel: +2347036869700">+234 703 686 9700</Link>
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="widget-contact-grid">
                                            <i className="fas fa-envelope" />
                                            <div className="contact-grid-details">
                                                <h6>
                                                    <Link to="mailto: info@ifreks.com">
                                                        info@ifreks.com
                                                    </Link>
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="widget-contact-grid">
                                            <i className="fas fa-map-marker-alt" />
                                            <div className="contact-grid-details">
                                                <h6>
                                                    Abuja, FCT
                                                    <p />
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright-wrap">
                        <div className="row gy-3 justify-content-lg-between justify-content-center">
                            <div className="col-auto align-self-center">
                                <p className="copyright-text text-center">
                                    © <Link to="/">Ifreks </Link> 2024 | All Rights Reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </section>
    )
}

export default FooterFive