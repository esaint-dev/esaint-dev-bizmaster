import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
const BlogFive = () => {
    let settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        cssEase: "linear",

        responsive: [
            {
                breakpoint: 1200,
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                },
            },
        ],
    };
    return (
        <section className='bg-dark'>
            <section className="blog-area-4 space position-relative">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7">
                            <div className="title-area text-center">
                                <span className="sec-title style2 text-warning">  
                                    Gallery
                                </span>     
                            </div>
                        </div>
                    </div>
                    <div
                        className="row global-carousel blog-slider5 slider-shadow"

                    >
                        <Slider {...settings}>
                            <div className="px-2">
                                <div className="blog-card style4">
                                    <div className="blog-img">
                                        <img src="assets/img/blog/blog_s5_4.png" alt="Ifreks" />
                                    </div>
                                </div>
                            </div>
                            <div className="px-2">
                                <div className="blog-card style4">
                                    <div className="blog-img">
                                        <img src="assets/img/blog/blog_s5_5.png" alt="Ifreks" />
                                    </div>
                                </div>
                            </div>
                            <div className="px-2">
                                <div className="blog-card style4">
                                    <div className="blog-img">
                                        <img src="assets/img/blog/blog_s5_6.png" alt="Ifreks" />
                                    </div>
                                </div>
                            </div>
                            <div className="px-2">
                                <div className="blog-card style4">
                                    <div className="blog-img">
                                        <img src="assets/img/blog/blog_s5_7.png" alt="Ifreks" />
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>

        </section>
    )
}

export default BlogFive