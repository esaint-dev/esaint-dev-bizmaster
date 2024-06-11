import React from 'react'
import Marquee from "react-fast-marquee";
const MarqueeFour = () => {
    return (
        <section className='bg-dark2'>
            <div className="marquee-area bg-theme">
                <div className="container-fluid p-0 overflow-hidden">
                    <div className="slider__marquee style2">
                        <div className="marquee_mode">
                            <Marquee speed={100}>

                                <div className="px-3">
                                    <div className="client-logo">

                                        <img src="assets/img/client/4-6.png" alt="img" />

                                    </div>
                                </div>

                                <div className="px-3">
                                    <div className="client-logo">

                                        <img src="assets/img/client/4-7.png" alt="img" />

                                    </div>
                                </div>

                                <div className="px-3">
                                    <div className="client-logo">

                                        <img src="assets/img/client/4-8.png" alt="img" />

                                    </div>
                                </div>

                                
                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default MarqueeFour