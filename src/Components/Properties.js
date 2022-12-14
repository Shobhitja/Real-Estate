import React from 'react'
import property1 from '../images/property1.jpg'
import property2 from '../images/property2.jpg'
import property3 from '../images/property3.jpg'
import '../App.css'


const Properties = () => {
    return (
        <>
            <section className='pt-24 pb-24'>
                <div className="layout xsm:mx-5 md:mx-12 ">

                    {/* heading div */}
                    <div className='mb-10'>
                        <h2 className='mb-5 xsm:text-3xl xsm:text-center md:text-left md:text-6xl font-semibold text-[#1e247e] '>Our Featured Properties For Sell</h2>
                        <p className='text-xl xsm:text-center md:text-left text-[rgba(30,36,126,0.7)] font-semibold'>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor
                            <br />
                            incididunt soluta nobis assumenda labore quod maxime.</p>
                    </div>

                    {/* //row 1  */}
                    <div className="row1 flex flex-wrap xsm:flex-col md:flex-row items-center mt-20 xsm:mb-24 md:mb-32">
                        {/* //col1 */}
                        <div className="col1 md:max-w-[50%]">
                            <div className="label relative text-left ">
                                <img className='max-w-[100%] xsm:h-[26rem] md:h-auto align-middle' src={property1} alt="" />
                            </div>
                        </div>


                        {/* //col2 */}
                        <div className="col2 flex xsm:w-full md:max-w-[50%] xsm:px-0 md:px-4  xsm:mt-10 md:mt-0">
                            <div className='xsm:pl-4 md:pl-10'>
                                <p className='text-lg font-medium mb-3 text-[#1e247e] '>Saharanpur Chowk , Dehradun</p>
                                <h2 className='mb-3 xsm:text-4xl md:text-5xl font-semibold text-[#1e247e]'>Best Deluxe Home</h2>
                                <p className='text-green-500 text-3xl font-bold mt-7'>$110,000,000</p>

                                <div className="mt-8 mb-8 flex flex-wrap ">
                                    {/* box1 */}
                                    <div className="box1 xsm:px-1 xsm:py-3 md:py-5 md:px-3 text-center text-base xsm:mr-1.5 md:mr-3 bg-[#dbe7fe] border rounded-lg font-medium">
                                        8
                                        <br />
                                        Bedrooms
                                    </div>

                                    {/* box2 */}

                                    <div className="box1 xsm:px-1 xsm:py-3 md:py-5 md:px-3 text-center text-base xsm:mr-1.5 md:mr-3 bg-[#dbe7fe] border rounded-lg font-medium">
                                        9
                                        <br />
                                        Bathrooms
                                    </div>

                                    {/* box3 */}

                                    <div className="box1 xsm:px-1 xsm:py-3 md:py-5 md:px-3 text-center text-base xsm:mr-1.5 md:mr-3 bg-[#dbe7fe] border rounded-lg font-medium">
                                        9542
                                        <br />
                                        Square Feet
                                    </div>
                                </div>


                                {/* //paraghjewgjh */}
                                <p className='mb-11 font-medium text-lg text-[rgba(30,36,126,0.7)]'>There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form by injected humour or randomised words which don't look even slightly believable. </p>

                                <a href="/" className='bg-[#1e247e] text-white border w-auto h-auto relative py-4 px-5 rounded-lg text-center text-base hover:bg-blue-900 '>TAKE A TOUR</a>

                            </div>

                        </div>



                    </div>



                    {/* row2 */}

                    <div className="row1 flex flex-wrap xsm:flex-col md:flex-row items-center mt-20 xsm:mb-24 md:mb-32">
                        {/* //col1 */}
                        <div className="col1 md:max-w-[50%]">
                            <div className="label relative text-left ">
                                <img className='max-w-[100%] xsm:h-[26rem] md:h-auto align-middle' src={property2} alt="" />
                            </div>
                        </div>


                        {/* //col2 */}
                        <div className="col2 flex xsm:w-full md:max-w-[50%] xsm:px-0 md:px-4  xsm:mt-10 md:mt-0">
                            <div className='xsm:pl-4 md:pl-10'>
                                <p className='text-lg font-medium mb-3 text-[#1e247e] '>Mahavir Chowk , Dehradun</p>
                                <h2 className='mb-3 xsm:text-4xl md:text-5xl font-semibold text-[#1e247e]'>Penthouse Duplex</h2>
                                <p className='text-green-500 text-3xl font-bold mt-7'>$50,000,000</p>

                                <div className="mt-8 mb-8 flex flex-wrap ">
                                    {/* box1 */}
                                    <div className="box1 xsm:px-1 xsm:py-3 md:py-5 md:px-3 text-center text-base xsm:mr-1.5 md:mr-3 bg-[#dbe7fe] border rounded-lg font-medium">
                                        6
                                        <br />
                                        Bedrooms
                                    </div>

                                    {/* box2 */}

                                    <div className="box1 xsm:px-1 xsm:py-3 md:py-5 md:px-3 text-center text-base xsm:mr-1.5 md:mr-3 bg-[#dbe7fe] border rounded-lg font-medium">
                                        7
                                        <br />
                                        Bathrooms
                                    </div>

                                    {/* box3 */}

                                    <div className="box1 xsm:px-1 xsm:py-3 md:py-5 md:px-3 text-center text-base xsm:mr-1.5 md:mr-3 bg-[#dbe7fe] border rounded-lg font-medium">
                                        6991
                                        <br />
                                        Square Feet
                                    </div>
                                </div>


                                {/* //paraghjewgjh */}
                                <p className='mb-11 font-medium text-lg text-[rgba(30,36,126,0.7)]'>There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form by injected humour or randomised words which don't look even slightly believable. </p>

                                <a href="/" className='bg-[#1e247e] text-white border w-auto h-auto relative py-4 px-5 rounded-lg text-center text-base hover:bg-blue-900 '>TAKE A TOUR</a>

                            </div>

                        </div>



                    </div>


                    {/* //row3 */}

                    <div className="row1 flex flex-wrap xsm:flex-col md:flex-row items-center mt-20 xsm:mb-24 md:mb-32">
                        {/* //col1 */}
                        <div className="col1 md:max-w-[50%]">
                            <div className="label relative text-left ">
                                <img className='max-w-[100%] xsm:h-[26rem] md:h-auto align-middle' src={property3} alt="" />
                            </div>
                        </div>


                        {/* //col2 */}
                        <div className="col2 flex xsm:w-full md:max-w-[50%] xsm:px-0 md:px-4  xsm:mt-10 md:mt-0">
                            <div className='xsm:pl-4 md:pl-10'>
                                <p className='text-lg font-medium mb-3 text-[#1e247e] '> Rajpur Road , Dehradun</p>
                                <h2 className='mb-3 xsm:text-4xl md:text-5xl font-semibold text-[#1e247e]'>Family House</h2>
                                <p className='text-green-500 text-3xl font-bold mt-7'>$7,261,300</p>

                                <div className="mt-8 mb-8 flex flex-wrap ">
                                    {/* box1 */}
                                    <div className="box1 xsm:px-1 xsm:py-3 md:py-5 md:px-3 text-center text-base xsm:mr-1.5 md:mr-3 bg-[#dbe7fe] border rounded-lg font-medium">
                                        5
                                        <br />
                                        Bedrooms
                                    </div>

                                    {/* box2 */}

                                    <div className="box1 xsm:px-1 xsm:py-3 md:py-5 md:px-3 text-center text-base xsm:mr-1.5 md:mr-3 bg-[#dbe7fe] border rounded-lg font-medium">
                                        4
                                        <br />
                                        Bathrooms
                                    </div>

                                    {/* box3 */}

                                    <div className="box1 xsm:px-1 xsm:py-3 md:py-5 md:px-3 text-center text-base xsm:mr-1.5 md:mr-3 bg-[#dbe7fe] border rounded-lg font-medium">
                                        5160
                                        <br />
                                        Square Feet
                                    </div>
                                </div>


                                {/* //paraghjewgjh */}
                                <p className='mb-11 font-medium text-lg text-[rgba(30,36,126,0.7)]'>There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form by injected humour or randomised words which don't look even slightly believable. </p>

                                <a href="/" className='bg-[#1e247e] text-white border w-auto h-auto relative py-4 px-5 rounded-lg text-center text-base hover:bg-blue-900 '>TAKE A TOUR</a>

                            </div>

                        </div>



                    </div>



                </div>
            </section>
        </>
    )
}

export default Properties
