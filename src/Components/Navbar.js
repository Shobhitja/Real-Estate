import React from 'react'
import image from '../images/logo.png'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>

            <header className='  px-10 py-5 '>
                <div className='flex items-center'>

                    {/* //left header */}

                    <div className="left header ">
                        <a href="/">
                            <img src={image} alt="logo" srcset="" /></a>
                    </div>

                    {/* // right header */}

                    <div className="right header ml-auto">

                        {/* //contact */}
                        <div className="no float-right text-[rgba(30,36,126,0.7)] text-xl  ml-16 tracking-widest ">
                            <p>
                                <a href="#">
                                    <i className='icon  text-2xl  align-middle text-[rgba(30,36,126,0.7)]  mr-2 '><i class="fa-solid fa-phone mb-2"></i></i>
                                    <span className='font-semibold'> 1800 234 567</span>
                                </a>
                            </p>
                        </div>
                        {/* //menu */}

                        <div className="menu float-right relative  ">
                            <ul className='list text-lg leading-7'>
                                <li className='float-left relative ml-12'>
                                    <Link to="/" className='text-black font-semibold hover:text-sky-800 focus:text-sky-800'>HOME</Link>
                                </li>
                                <li className='float-left relative ml-12'>
                                    <Link to="about" className='text-black font-semibold hover:text-sky-800 focus:text-sky-800'>ABOUT</Link>
                                </li>
                                <li className='float-left relative ml-12'>
                                    <Link to="properties" className='text-black font-semibold hover:text-sky-800 focus:text-sky-800'>PROPERTIES</Link>
                                </li>
                                <li className='float-left relative ml-12'>
                                    <Link to="services" className='text-black font-semibold hover:text-sky-800 focus:text-sky-800'>SERVICES</Link>
                                </li>
                                <li className='float-left relative ml-12'>
                                    <Link to="contact" className='text-black font-semibold hover:text-sky-800 focus:text-sky-800'>CONTACT</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </header>

        </div>
    )
}

export default Navbar
