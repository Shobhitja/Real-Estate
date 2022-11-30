import React from 'react'
import service1 from '../images/Service1.jpg'
import service2 from '../images/Service2.jpg'
import service3 from '../images/Service3.jpg'
const Services = () => {
    return (
        <>
            <section className='relative overflow-hidden p-24 ml-12 '>

                {/* row1 */}
                <div className="flex flex-wrap mb-20">

                    {/* col1 */}
                    <div className="heading mb-10 max-w-[50%] mr-6">
                        <h2 className='text-6xl mb-12 font-semibold text-[#1e247e] '>Our Services</h2>
                        <p className='font-semibold text-2xl text-[rgba(30,36,126,0.7)]'>Lorem ipsum dolor sit amet consectetur adipiscing
                            <br />
                            elit sed do eiusmod tempor.
                        </p>
                    </div>

                    {/* //col2 */}

                    <div className="col2 mb-12 flex flex-col max-w-[25%] px-4 w-full">
                        {/* icon */}
                        <div className="icon w-14 h-14 text-center border rounded mb-7 bg-[#dbe7fe] text-4xl text-blue-900">
                            <i class="fa-solid fa-building mt-3  "></i>
                        </div>
                        <h5 className='mb-5 text-[#1e247e] text-2xl font-medium '>Leasing Advisory</h5>
                        <p className='font-medium text-lg text-[rgba(30, 36, 126, 0.7)]'>There are many variations of passages of lorem ipsum available. </p>
                    </div>

                    {/* //col3 */}

                    <div className="col3 mb-12 flex flex-col max-w-[25%] w-[100%] px-4">
                        {/* icon */}
                        <div className="icon w-14 h-14 text-center border rounded mb-7 bg-[#dbe7fe]
                        text-4xl text-amber-800">
                            <i class="fa-solid fa-user mt-3 bg-[#dbe7fe]"></i>
                        </div>
                        <h5 className='mb-5 text-[#1e247e] text-2xl font-medium'>Strategy & Consulting</h5>
                        <p className='font-medium text-lg'>There are many variations of passages of lorem ipsum available. </p>
                    </div>

                </div>

                {/* //row2 */}
                <div className="row2 flex flex-wrap">

                    {/* /col1 */}
                    <div className="col1 mb-12 flex flex-col max-w-[33.33%] w-full px-4">
                        {/* icon */}
                        <div className="icon w-14 h-14 border rounded mb-7 text-green-900  text-4xl
                        bg-[#dbe7fe] 
                        ">
                            <i class="fa-solid fa-person-walking ml-3 mt-2 bg-[#dbe7fe] "></i>
                        </div>
                        <h5 className='mb-5 text-2xl text-[#1e247e] font-semibold'>Portfolio Services</h5>
                        <p className='text-xl font-medium '>There are many variations of <br /> passages of lorem ipsum <br /> available.</p>
                    </div>

                    {/* //col2 */}
                    <div className="col1 mb-12 flex flex-col max-w-[33.33%] w-full px-4">
                        {/* icon */}
                        <div className="icon w-14 h-14 border rounded mb-7 text-green-900  text-4xl
                        bg-[#dbe7fe] 
                        ">
                            <i class="fa-solid fa-door-open ml-2 mt-2 bg-[#dbe7fe]"></i>
                        </div>
                        <h5 className='mb-5 text-2xl text-[#1e247e] font-semibold'>Space Enablement </h5>
                        <p className='text-xl font-medium '>There are many variations of <br /> passages of lorem ipsum <br /> available.</p>
                    </div>


                    {/* //col3 */}
                    <div className="col1 mb-12 flex flex-col max-w-[33.33%] w-full px-4">
                        {/* icon */}
                        <div className="icon w-14 h-14 border rounded mb-7 text-green-900  text-4xl
                        bg-[#dbe7fe] 
                        ">
                            <i class="fa-solid fa-wind ml-2 bg-[#dbe7fe] mt-2"></i>
                        </div>
                        <h5 className='mb-5 text-2xl text-[#1e247e] font-semibold'>Facilities Management</h5>
                        <p className='text-xl font-medium '>There are many variations of <br /> passages of lorem ipsum <br /> available.</p>
                    </div>

                </div>

            </section>

            {/* //Blog Section */}

            <section className='py-24 mx-11 '>
                {/* heading */}
                <div className="mb-10">
                    <h2 className='text-7xl font-semibold text-[#1e247e]'>Recent News</h2>
                    <p className='text-2xl mt-8 text-[rgba(30,36,126,0.7)] font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod <br />
                        tempor incididunt labore et dolore magna aliqua
                    </p>
                </div>

                {/* /row */}
                <div className="row flex flex-wrap ">

                    {/* //col1 */}
                    <div className="flex flex-col max-w-[33.33%]  w-[100%] pl-4 ">

                        {/* item */}
                        <div className="item   ">
                            {/* //img */}
                            <div className="img">
                                <img src={service1} alt="" srcset="" />
                            </div>

                            {/* content */}
                            <div className="p-8 mt-[-100px]  relative z-10  ">

                                <span className='bg-[#69aef8] text-white p-1.5  border rounded  text-center font-medium text-2xl'>Property</span>
                                <h5 className='mb-5 mt-5'>
                                    <a href="#" className='text-4xl font-semibold text-[#1e247e] hover:text-blue-600'> How to achieve <br /> financial independence <br /> through  real estate</a>
                                </h5>
                                <p className='my-5 text-lg font-medium text-[rgba(30,36,126,0.7)]'>There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form by injected humour or randomised words.</p>


                                <div className="   relative z-20 ">
                                    <span className=' text-xl font-medium text-[rgb(27,44,195)]'>By Amrik Malhans</span>
                                </div>

                            </div>

                            {/* table */}


                        </div>


                    </div>



                    {/* //col2 */}
                    <div className="flex flex-col max-w-[33.33%]  w-[100%] pl-4 ">

                        {/* item */}
                        <div className="item   ">
                            {/* //img */}
                            <div className="img">
                                <img src={service2} alt="" srcset="" />
                            </div>

                            {/* content */}
                            <div className="p-8 mt-[-100px]  relative z-10  ">

                                <span className='bg-[#69aef8] text-white px-2 py-1.5  border rounded  text-center font-medium text-2xl'>Listing</span>
                                <h5 className='mb-5 mt-5'>
                                    <a href="#" className='text-4xl font-semibold text-[#1e247e] hover:text-blue-600'> The most popular cities <br /> for homebuyers </a>
                                </h5>
                                <p className='my-5 text-lg font-medium text-[rgba(30,36,126,0.7)]'>There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form by injected humour or randomised words.</p>


                                <div className="   relative z-20 ">
                                    <span className=' text-xl font-medium text-[rgb(27,44,195)]'>By Shobhit jaguri</span>
                                </div>

                            </div>



                        </div>


                    </div>


                    {/* col3 */}

                    <div className="flex flex-col max-w-[33.33%]  w-[100%] pl-4 ">

                        {/* item */}
                        <div className="item   ">
                            {/* //img */}
                            <div className="img">
                                <img src={service3} alt="" srcset="" />
                            </div>

                            {/* content */}
                            <div className="p-8 mt-[-100px]  relative z-10  ">

                                <span className='bg-[#69aef8] text-white p-1.5  border rounded  text-center font-medium text-2xl'>Commercial</span>
                                <h5 className='mb-5 mt-5'>
                                    <a href="#" className='text-4xl font-semibold text-[#1e247e] hover:text-blue-600'> Learn how real estate <br /> really shapes our future</a>
                                </h5>
                                <p className='my-5 text-lg font-medium text-[rgba(30,36,126,0.7)]'>There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form by injected humour or randomised words.</p>


                                <div className="   relative z-20 ">
                                    <span className=' text-xl font-medium text-[rgb(27,44,195)]'>By Anika Malhans</span>
                                </div>

                            </div>

                            {/* table */}


                        </div>


                    </div>


                </div>

            </section>
        </>
    )
}

export default Services
