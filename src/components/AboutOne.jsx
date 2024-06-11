import React from 'react'
import { Link } from 'react-router-dom'


const AboutOne = () => {
  return (
    <div className="about-area-1 position-relative space-top">

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
                
                About Us
              </span>

              <p className="sec-text text-dark mb-30">
                Ifrekstrading is a legally registered business with the
                Corporate Affairs Commission, operating under the
                business name ifreks.com . Our journey began as a
                cryptocurrency exchange in 2018, but we soon recognized
                the demand for crypto education. Consequently,

              </p>
              <p className="sec-text text-dark">
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
  );
};

export default AboutOne;
