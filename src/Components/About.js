import React from 'react'
import img2 from '../images/img2.jpg'

const About = () => {
    return (
        <>
            <section>
                <div className="flex flex-wrap flex-row">
                    {/* col1 */}
                    <div className="col1 max-w-[50%] px-24 pr-24">

                        {/* heading */}
                        <div className="heading mb-10">
                            <h2 className='mb-5 text-6xl text-[#1e247e] font-semibold'>We Connect People With Their Dreams</h2>
                            <p className='font-semibold mt-9 text-lg leading-7'>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt soluta nobis assumenda labore quod maxime.</p>
                        </div>

                        {/* text */}
                        <p className='font-semibold leading-7 text-lg'>
                            There are many variations of passages of lorem ipsum available. Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime but the majority have suffered alteration in some form by injected humour or randomised words which don't look even slightly believable.
                        </p>

                        {/* bottom row */}
                        <div className="lower row mt-8 flex flex-wrap ">
                            {/* col1 */}
                            <div className="col1 flex flex-col max-w-[50%] px-4 ">
                                <p className='text-green-600 mb-4 font-semibold text-3xl'>$1,40,221+</p>
                                <p className='font-medium text-lg'>Average buyer savings</p>
                            </div>

                            <div className="col2  flex flex-col max-w-[50%] px-4 ">
                                <p className='text-green-600 mb-4 text-3xl font-semibold'>#1</p>
                                <p className='font-medium text-lg'>Resource for housing info</p>
                            </div>

                            {/* col2 */}


                        </div>


                    </div>

                    <div className="img flex  max-w-[50%] w-100% px-4">
                        <img src={img2} alt="image" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
