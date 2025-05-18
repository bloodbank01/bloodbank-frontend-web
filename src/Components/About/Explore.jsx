import React from 'react'
import explore from '../../../public/images/about/explore.png'
import { Link } from 'react-router-dom'


const Explore = () => {
    return (
        <section className='w-full py-4 sm:pt-8 md:py-15 px-2'>
            <div className="container mx-auto">
                <div className="w-full">
                    <div className="w-full flex flex-wrap sm:flex sm:justify-center md:justify-start">
                    <div className="w-full sm:w-3/4 md:w-1/2 py-4 md:ps-4 lg:px-0 md:hidden">
                            <div className="w-full">
                                <div className="w-full h-[350px]">
                                    <img className='w-full h-full object-cover' src={explore} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-3/4 md:w-1/2 py-4 md:ps-4 lg:px-0">
                            <div className="w-full">
                                <h5 className='text-[#C30000] text-[19px] lg:text-[22px] xl:text-[18px] font-medium mb-3'>About Us</h5>
                                <h2 className='md:w-full lg:w-6/8 mb-4 pe-3 lg:pe-0 text-[25px] lg:text-[28px] xl:text-[32px] font-semibold'>We are here not for income, but for outcome</h2>
                                <p className='md:text-[12px] text-[#888888] pe-3 lg:pe-0 text-[13px] lg:text-[13px] lg:w-6/8 pb-6 md:pb-3 lg:pb-4'>We are a healthcare facility with a dedicated blood bank, committed to providing quality care and safe blood support for those in need. Our mission is to save lives with compassion and trust.</p>
                                <div>
                                    <div className="w-full flex justify-center md:justify-start">
                                        <button type="button" className="mt-4 w-full md:w-auto lg:mt-12 bg-web-primary py-2 text-[16px] px-8 tracking-wider rounded-md text-white md:text-[14px] lg:text-[15px] xl:text-[16px]">
                                        <Link to='/about'>Explore Now</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block w-full sm:w-3/4 md:w-1/2 py-4 md:ps-4 lg:px-0">
                            <div className="w-full">
                                <div className="w-full h-[300px] lg:h-[400px]">
                                    <img className='w-full h-full object-cover' src={explore} alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Explore