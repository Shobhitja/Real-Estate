import React from 'react'
import image from '../images/logo.png'
const Footer = () => {
    return (
        <>
            <footer>
                {/* main footer */}
                <div className="xsm:p-12 xsm:mx-5 md:p-24 md:mx-12">
                    {/* row1 */}<div className="ro">

                        {/* col1 */}
                        <div className="col1 flex flex-col  w-full relative  ">
                            <img className='align-middle md:m-auto md:w-72 md:h-auto xsm:m-auto xsm:w-[5rem] xsm:h-[4rem]  ' src={image} alt="" srcset="" />

                            <div className="xsm:text-center md:text-center">
                                <p className=' mt-5 text-lg text-[#1e247e] '>© Copyright 2022. <br /> Made by Shobhit</p>
                            </div>
                        </div>





                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
