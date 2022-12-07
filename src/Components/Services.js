import React from 'react'
import service1 from '../images/Service1.jpg'
import service2 from '../images/Service2.jpg'
import service3 from '../images/Service3.jpg'
const Services = () => {
    return (
        <>
            <section className='relative overflow-hidden xsm:p-10 md:p-2 xsm:ml-auto md:ml-12 '>

                {/* row1 */}
                <div className="flex flex-wrap mb-20 md:flex-row xsm:flex-col">

                    {/* col1 */}
                    <div className="heading mb-10 xsm:w-[100%] md:max-w-[50%] md:mr-6">
                        <h2 className='xsm:text-center md:text-left xsm:text-5xl md:text-6xl mb-12 font-semibold text-[#1e247e] '>Our Services</h2>
                        <p className='xsm:text-center md:text-left font-semibold text-2xl text-[rgba(30,36,126,0.7)]'>Lorem ipsum dolor sit amet consectetur adipiscing
                            <br />
                            elit sed do eiusmod tempor.
                        </p>
                    </div>

                    {/* //col2 */}

                    <div className="col2 xsm:mb-20 md:mb-12 flex flex-col xsm:w-[100%]  md:max-w-[23%] xsm:px-auto md:px-4 w-full">
                        {/* icon */}
                        <div className="icon w-14 h-14 text-center border rounded xsm:mb-6 md:mb-7 bg-[#dbe7fe] text-4xl text-blue-900  xsm:m-auto md:ml-0 ">
                            <i class="fa-solid fa-building mt-3"></i>
                        </div>
                        <h5 className='mb-5 text-[#1e247e] text-2xl font-medium xsm:text-center md:text-left'>Leasing Advisory</h5>
                        <p className='font-medium text-lg text-[rgba(30, 36, 126, 0.7)]  xsm:text-center   md:text-left'>There are many variations of passages of lorem ipsum available. </p>
                    </div>

                    {/* //col3 */}

                    <div className="col3 xsm:mb-auto md:mb-12 flex flex-col xsm:w-[100%]  md:max-w-[25%] xsm:px-auto md:px-6 w-full">
                        {/* icon */}
                        <div className="icon w-14 h-14 text-center border rounded xsm:mb-6 md:mb-7 bg-[#dbe7fe]
                        text-4xl text-amber-800 xsm:m-auto md:ml-0">
                            <i class="fa-solid fa-user mt-3 bg-[#dbe7fe]"></i>
                        </div>
                        <h5 className='mb-5 text-[#1e247e] text-2xl font-medium xsm:text-center md:text-left'>Strategy & Consulting</h5>
                        <p className='font-medium text-lg xsm:text-center md:text-left'>There are many variations of passages of lorem ipsum available. </p>
                    </div>

                </div>



                {/* //row2 */}
                <div className="row2 grid sm:grid-cols-3 md:grid-row-3 ">

                    {/* /col1 */}
                    <div className="col1 xsm:mb-20 md:mb-12 flex flex-col  w-full px-4">
                        {/* icon */}
                        <div className="icon w-14 h-14 border rounded xsm:mb-6 md:mb-7 text-green-900  text-4xl
                        bg-[#dbe7fe] xsm:m-auto md:ml-0
                        ">
                            <i class="fa-solid fa-person-walking ml-3 mt-2 bg-[#dbe7fe] "></i>
                        </div>

                        <h5 className='mb-5 text-2xl text-[#1e247e] font-semibold xsm:text-center md:text-left'>Portfolio Services</h5>
                        <p className='text-xl font-medium xsm:text-center   md:text-left '>There are many variations of <br /> passages of lorem ipsum <br /> available.</p>
                    </div>

                    {/* //col2 */}
                    <div className="col1  xsm:mb-20 md:mb-12  flex flex-col  w-full px-4">
                        {/* icon */}
                        <div className="icon w-14 h-14 border rounded  xsm:mb-6 md:mb-7  text-green-900  text-4xl
                        bg-[#dbe7fe]  xsm:m-auto md:ml-0
                        ">
                            <i class="fa-solid fa-door-open ml-2 mt-2 bg-[#dbe7fe]"></i>
                        </div>
                        <h5 className='mb-5 text-2xl text-[#1e247e] font-semibold xsm:text-center md:text-left'>Space Enablement </h5>
                        <p className='text-xl font-medium xsm:text-center   md:text-left '>There are many variations of <br /> passages of lorem ipsum <br /> available.</p>
                    </div>


                    {/* //col3 */}
                    <div className="col1  xsm:mb-20 md:mb-12  flex flex-col  w-full px-4">
                        {/* icon */}
                        <div className="icon w-14 h-14 border rounded mb-7 xsm:mb-6 md:mb-7 text-green-900  text-4xl
                        bg-[#dbe7fe]  xsm:m-auto md:ml-0
                        ">
                            <i class="fa-solid fa-wind ml-2 bg-[#dbe7fe] mt-2"></i>
                        </div>
                        <h5 className='mb-5 text-2xl text-[#1e247e] font-semibold xsm:text-center md:text-left'>Facilities Management</h5>
                        <p className='text-xl font-medium  xsm:text-center md:text-left'>There are many variations of <br /> passages of lorem ipsum <br /> available.</p>
                    </div>

                </div>

            </section>

            {/* //Blog Section */}

            <section className='md:py-9 xsm:mx-auto md:mx-11 '>
                {/* heading */}
                <div className="mb-10">
                    <h2 className=' xsm:text-5xl md:text-7xl xsm:text-center md:text-left font-semibold text-[#1e247e]'>Recent News</h2>
                    <p className='text-2xl mt-8 text-[rgba(30,36,126,0.7)] font-medium xsm:text-center md:text-left '>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod <br />
                        tempor incididunt labore et dolore magna aliqua
                    </p>
                </div>

                {/* /row */}
                <div className="row grid sm:grid-cols-3 md:grid-rows-3">

                    {/* //col1 */}
                    <div className="flex flex-col w-full md:pl-4 xsm:mb-16 md:mb-0 ">

                        {/* item */}
                        <div className="item   ">
                            {/* //img */}
                            <div className="img xsm:w-[90%] md:w-[100%] xsm:m-auto">
                                <img src={service1} alt="" srcset="" />
                            </div>

                            {/* content */}
                            <div className="p-8 mt-[-100px]  relative z-10  ">

                                <span className='bg-[#69aef8] text-white p-1.5  border rounded  text-center font-medium text-2xl'>Property</span>
                                <h5 className='mb-5 mt-5'>
                                    <a href="#" className='xsm:text-3xl md:text-4xl  font-semibold text-[#1e247e] hover:text-blue-600'> How to achieve <br /> financial independence <br /> through  real estate</a>
                                </h5>
                                <p className='  my-5 text-lg font-medium text-[rgba(30,36,126,0.7)]'>There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form by injected humour or randomised words.</p>


                                <div className="   relative z-20 ">
                                    <span className=' text-xl font-medium text-[rgb(27,44,195)]'>By Amrik Malhans</span>
                                </div>

                            </div>




                        </div>


                    </div>



                    {/* //col2 */}
                    <div className="flex flex-col w-full md:pl-4 xsm:mb-16 md:mb-0 ">

                        {/* item */}
                        <div className="item   ">
                            {/* //img */}
                            <div className="img xsm:w-[90%] md:w-[100%] xsm:m-auto">
                                <img src={service2} alt="" srcset="" />
                            </div>

                            {/* content */}
                            <div className="p-8 mt-[-100px]  relative z-10  ">

                                <span className='bg-[#69aef8] text-white px-2 py-1.5  border rounded  text-center font-medium text-2xl'>Listing</span>
                                <h5 className='mb-5 mt-5'>
                                    <a href="#" className='xsm:text-3xl md:text-4xl font-semibold text-[#1e247e] hover:text-blue-600'> The most popular cities <br /> for homebuyers </a>
                                </h5>
                                <p className='my-5 text-lg font-medium text-[rgba(30,36,126,0.7)]'>There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form by injected humour or randomised words.</p>


                                <div className="   relative z-20 ">
                                    <span className=' text-xl font-medium text-[rgb(27,44,195)]'>By Shobhit jaguri</span>
                                </div>

                            </div>



                        </div>


                    </div>


                    {/* col3 */}

                    <div className="flex flex-col w-full md:pl-4 xsm:mb-16 md:mb-0  ">

                        {/* item */}
                        <div className="item   ">
                            {/* //img */}
                            <div className="img  xsm:w-[90%] md:w-[100%] xsm:m-auto ">
                                <img src={service3} alt="" srcset="" />
                            </div>

                            {/* content */}
                            <div className="p-8 mt-[-100px]  relative z-10  ">

                                <span className='bg-[#69aef8] text-white p-1.5  border rounded  text-center font-medium text-2xl'>Commercial</span>
                                <h5 className='mb-5 mt-5'>
                                    <a href="#" className='xsm:text-3xl md:text-4xl font-semibold text-[#1e247e] hover:text-blue-600'> Learn how real estate <br /> really shapes our future</a>
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
