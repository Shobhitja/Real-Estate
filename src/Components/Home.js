import React from 'react'
import img1 from '../images/img-1.jpg'
import row1 from '../images/row1.png'
import row2 from '../images/row2.png'
import row3 from '../images/row3.png'


const Home = () => {
    return (
        <>
            <section className='mx-12  pt-8'>
                <div className="box">
                    {/* row 1 */}
                    <div className=" flex flex-row flex-wrap ">
                        {/* col 1 */}

                        <div className="max-w-[50%] ">
                            <img src={img1} alt="" srcset="" />
                        </div>

                        {/* col 2 */}
                        <div className="max-w-[50%]  px-24 py-24">
                            <h1 className='text-6xl text-[#1e247e] tracking-tighter leading-snug mb-5 font-semibold'>Elegant homes
                                <br />
                                for sale</h1>
                            <p className='mb-12  text-[#1e247e] leading-8 text-lg font-medium'>There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form by injected humour or randomised words which don't look even slightly believable.</p>

                            {/* button1 */}

                            <a href="#" className='bg-[#1e247e]  text-white px-4 py-5 
                            w-auto h-auto rounded-lg cursor-pointer relative border-2  text-center mr-2  hover:bg-blue-900'>VIEW PROPERTIES</a>

                            {/* button2 */}

                            <a href="#" className=' bg-sky-600  text-white px-4 py-5 
                            w-auto h-auto rounded-lg cursor-pointer relative border-2  text-center hover:bg-sky-800 '>GET IN TOUCH</a>

                            {/* below twxt */}
                            <div className="space h-24 block"></div>
                            <p className='text-[#1e247e] tracking-widest font-semibold mb-2'>Price Starts at</p>
                            <p className='text-green-600 text-6xl  bg-[rgb(241 245 249)]'>$2,50,000</p>

                        </div>
                    </div>
                </div>
                <div className="relative py-24 ">
                    {/* //heading */}
                    <div className="heading mb-10  text-[#1e247e] font-normal text-left">
                        <h2 className='text-6xl font-bold'>We handle everything</h2>
                        <p className='mt-9 text-2xl font-medium'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
                            <br />
                            incididunt soluta nobis assumenda labore quod maxime.</p>
                    </div>

                    {/* //row 1 */}

                    <div className="flex flex-wrap ">
                        {/* //col 1 */}
                        <div className="col1 mb-12 pr-4 pl-4 max-w-[33.33%] w-[100%]">
                            <div className="img mb-8 relative">
                                <img src={row1} alt="image" />
                            </div>
                            <h4 className='text-[#1e247e]  font-semibold text-xl'>Home Appraisal</h4>
                            <p className='mt-2 font-semibold text-black leading-7'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliquais ipsum ultrices.</p>
                        </div>

                        {/* //col 2 */}

                        <div className="col1 mb-12 pr-4 pl-4 max-w-[33.33%] w-[100%]">
                            <div className="img mb-8 relative">
                                <img src={row2} alt="image" />
                            </div>
                            <h4 className='text-[#1e247e] font-semibold text-xl '>Price Negotiation</h4>
                            <p className='mt-2 font-semibold text-black leading-7' >Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliquais ipsum ultrices.</p>
                        </div>

                        {/* //col 3 */}

                        <div className="col1 mb-12 pr-4 pl-4 max-w-[33.33%] w-[100%]">
                            <div className="img mb-8 relative">
                                <img src={row3} alt="image" />
                            </div>
                            <h4 className='text-[#1e247e] font-semibold text-xl '>Paperwork Handling</h4>
                            <p className='mt-2 font-semibold text-black leading-7'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliquais ipsum ultrices.</p>
                        </div>

                    </div>



                </div>
            </section>


        </>
    )
}

export default Home
