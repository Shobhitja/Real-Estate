import React from 'react'

const Contact = () => {
    return (
        <>
            <section className='relative xsm:mx-5 xsm:p-0 md:mx-12 md:p-24 '>

                {/* row1 */}
                <div className="row flex flex-col flex-wrap">

                    <div className="text-center ml-[auto] w-full xsm:px-2 md:px-4">

                        {/* heading starts */}
                        <div className="heading mb-10 text-center">
                            <h2 className='mb-5 xsm:text-4xl md:text-6xl font-semibold text-[#1e247e]'>Get In Touch With Us</h2>
                            <p className='xsm:text-xl md:text-2xl font-medium text-[rgba(30,36,126,0.7)] leading-relaxed'>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod <br />
                                tempor incididunt ut labore et dolore.
                            </p>
                        </div>

                        {/* form starts */}

                        <div className="form md:ml-56 xsm:ml-0">

                            <div class="block p-6 rounded-lg shadow-2xl max-w-3xl ">
                                {/* //form starts */}

                                <form>
                                    {/* nawme */}
                                    <div class="form-group mb-6">
                                        <input type="text" class="form-control block
        w-full
        xsm:px-5
        xsm:py-5
        md:px-6
        md:py-6
        xsm:text-lg md:text-xl
        font-medium
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-600
        rounded
        transition
        ease-in-out
        m-0
        
        focus:text-gray-700 focus:bg-white focus:border-blue-800 focus:outline-none" id="exampleInput7"
                                            placeholder="Name" />
                                    </div>
                                    {/* //emaill */}

                                    <div class="form-group mb-6">
                                        <input type="email" class="form-control block
        w-full
        xsm:px-5
        xsm:py-5
        md:px-6
        md:py-6
        xsm:text-base md:text-xl
        font-medium
        text-gray-900
        bg-white bg-clip-padding
        border border-solid border-gray-600
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-800 focus:outline-none" id="exampleInput8"
                                            placeholder="Email address" />
                                    </div>


                                    {/* //textarea */}
                                    <div class="form-group mb-6">
                                        <textarea
                                            class="
        form-control
        block
        w-full
        px-6
        py-4
        xsm:text-lg md:text-xl
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-600
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-800 focus:outline-none
      "
                                            id="exampleFormControlTextarea13"
                                            rows="3"
                                            placeholder="I am Looking For.. 
                                            "
                                        ></textarea>
                                    </div>







                                    <button type="submit" class="
      w-36
      xsm:px-5
      xsm:py-4
      md:px-6
      md:py-5
      bg-blue-600
      text-white
      font-medium
      text-base
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out mt-5">Send</button>
                                </form>
                            </div>




                            {/* ************************************************************ */}
                            <div className="div h-20"></div>
                            <p className='mb-4 xsm:mr-0 md:mr-48 text-xl font-semibold text-[rgba(30,36,126,0.7)]'> 007, Bond Street, Mighty Meadows, Australia <br />  1 800 234 56 78</p>
                            <div className="tagline  xsm:text-2xl md:text-4xl xsm:mr- md:mr-48 font-medium text-[#79caa1]">sales@examplereales.com</div>

                        </div>

                    </div>

                </div>


            </section>


        </>
    )
}

export default Contact
