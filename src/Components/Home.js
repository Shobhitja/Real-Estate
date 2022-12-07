import React from 'react'
import img1 from '../images/img-1.jpg'
import row1 from '../images/row1.png'
import row2 from '../images/row2.png'
import row3 from '../images/row3.png'


const Home = () => {
    return (
        <>

            <section className=' xsm:mx-5 xsm:pt-2  md:mx-12  md:pt-8  '>
                <div className="box">
                    {/* row 1 */}
                    <div className=" flex flex-col md:flex md:flex-row flex-wrap ">
                        {/* col 1 */}

                        <div className=" w-full md:max-w-[50%] ">
                            <img src={img1} alt="" srcset="" />
                        </div>

                        {/* col 2 */}
                        <div className="  w-full   md:max-w-[50%]  md:px-24 md:py-24">
                            <h1 className='xsm:text-5xl text-center mt-4 md:text-6xl text-[#1e247e] tracking-tighter xsm:leading-snug md:leading-snug mb-5 font-semibold'>Elegant homes
                                <br />
                                for sale</h1>
                            <p className='mb-12  text-[#1e247e] leading-8 text-lg  xsm:text-center md:text-left font-medium'>There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form by injected humour or randomised words which don't look even slightly believable.</p>

                            {/* button1 */}


                            <a href="#" className='px-3.5 py-3.5 m-auto bg-[#1e247e]  text-white md:px-4 md:py-5 
                            w-auto h-auto rounded-lg cursor-pointer relative border-2  text-center xsm:mr-3 md:mr-2  hover:bg-blue-900'>VIEW PROPERTIES</a>

                            {/* button2 */}

                            <a href="#" className='px-3.5 py-3.5 m-auto  bg-sky-600  text-white md:px-4 md:py-5 
                            w-auto h-auto rounded-lg cursor-pointer relative border-2  text-center hover:bg-sky-800 '>GET IN TOUCH</a>


                            {/* below twxt */}
                            <div className="space h-24 block"></div>
                            <p className=' text-[#1e247e] tracking-widest font-semibold mb-2'>Price Starts at</p>
                            <p className='text-green-600 text-5xl  bg-[rgb(241 245 249)]'>$2,50,000</p>

                        </div>
                    </div>
                </div>

                <div className=" relative   md:pb-0 ">
                    {/* //heading */}
                    <div className=" heading mb-10  text-[#1e247e] text-left">
                        <h2 className=' xsm:text-4xl md:text-5xl xsm:text-center md:text-left font-bold'>We handle everything easily </h2>
                        <p className='mt-9 text-2xl font-medium  xsm:text-center md:text-left'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
                            <br />
                            incididunt soluta nobis assumenda labore quod maxime.</p>
                    </div>


                    {/* //row 1 */}

                    <div className="  grid  md:grid-cols-3  xsm:grid-rows-3 md:mt-0 xsm:mt-16 ">
                        {/* //col 1 */}
                        <div className="col1 mb-12 pr-4 pl-4">
                            <div className="img mb-8 relative  ">
                                <img className='xsm:m-auto md:ml-0' src={row1} alt="image" />
                            </div>
                            <h4 className='text-[#1e247e]  font-semibold text-xl xsm:text-center md:text-left  '>Home Appraisal</h4>
                            <p className='mt-2 font-semibold text-black leading-7 xsm:text-center md:text-left'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliquais ipsum ultrices.</p>
                        </div>

                        {/* //col 2 */}

                        <div className="col3 mb-12 pr-4 pl-4">
                            <div className="img mb-8 relative">
                                <img className=' xsm:m-auto md:ml-0' src={row2} alt="image" />
                            </div>
                            <h4 className='text-[#1e247e] font-semibold text-xl xsm:text-center md:text-left'>Price Negotiation</h4>
                            <p className='mt-2 font-semibold text-black leading-7 xsm:text-center md:text-left' >Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliquais ipsum ultrices.</p>
                        </div>

                        {/* //col 3 */}

                        <div className="col3 mb-12 pr-4 pl-4">
                            <div className="img mb-8 relative">
                                <img className='xsm:m-auto md:ml-0' src={row3} alt="image" />
                            </div>
                            <h4 className='text-[#1e247e] font-semibold text-xl xsm:text-center  md:text-left'>Paperwork Handling</h4>
                            <p className='mt-2 font-semibold text-black leading-7 xsm:text-center md:text-left'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliquais ipsum ultrices.</p>
                        </div>

                    </div>



                </div>


            </section>


        </>
    )
}

export default Home
