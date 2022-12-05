import React from 'react'
import image from '../images/logo.png'
const Footer = () => {
    return (
        <>
            <footer>
                {/* main footer */}
                <div className="p-24 mx-12">
                    {/* row1 */}<div className="row xsm:bg-yellow-500 ">

                        {/* col1 */}
                        <div className="col1 flex flex-col  w-full relative px-4 sm:bg-amber-900 md:bg-red-600">
                            <img className='align-middle w-72 m-auto xsm:w-[5rem] xsm:h-[4rem]  ' src={image} alt="" srcset="" />

                            <div className="xsm:ml-[-3rem]">
                                <p className='xsm:text-green-900 md:text-yellow-700 mt-5 text-lg text-[#1e247e] mx-auto xsm:text-xl xsm:w-[15rem] md:w-auto '>© Copyright 2022. <br /> Made by Shobhit</p>
                            </div>
                        </div>





                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
