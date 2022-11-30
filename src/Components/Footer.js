import React from 'react'
import image from '../images/logo.png'
const Footer = () => {
    return (
        <>
            <footer>
                {/* main footer */}
                <div className="p-24 mx-12">
                    {/* row1 */}<div className="row flex flex-wrap ">

                        {/* col1 */}
                        <div className="col1 flex flex-col  w-full relative px-4">
                            <img className='align-middle w-72 m-auto' src={image} alt="" srcset="" />
                            <p className='mt-5 text-lg text-[#1e247e] mx-auto'>© Copyright 2022. Made by Shobhit</p>
                        </div>





                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
