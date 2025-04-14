import React from 'react'
import aboutImg from '../../../public/images/home/aboute.png'
import about2Img from '../../../public/images/home/aboute2.png'
import { BsCheck } from "react-icons/bs";

const Aboute = () => {
    return (
        <section className='w-full py-6 pt-12 sm:pt-13 md:pt-15 xl:pt-35'>
            <div className="container mx-auto">
                <div className="w-full">
                    <div className="w-full flex flex-wrap px-2 sm:flex sm:justify-center md:justify-start">
                        <div className="w-full sm:w-3/4 md:w-1/2 relative md:flex md:items-center">
                            <div className="w-full 2xl:ps-[100px] lg:h-[550px] 2xl:h-[540px]">
                                <div className="aspect-square lg:w-[400px] lg:h-[420px] bg-green rounded-xl overflow-hidden">
                                    <img className='w-full h-full object-cover' src={aboutImg} alt="" />
                                </div>
                                <div className="hidden lg:block w-[280px] h-[280px] absolute top-[40%] xl:top-[40%] left-[40%] xl:left-[calc(35%+100px)]">
                                    <div className="w-full h-full p-0.2 bg-white rounded-full overflow-hidden">
                                        <img className='w-full h-full object-cover' src={about2Img} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-3/4 md:w-1/2 py-4 md:ps-4 lg:px-0">
                            <div className="w-full">
                                <h5 className='text-[#C30000] text-[19px] lg:text-[22px] xl:text-[18px] font-medium mb-3'>About Us</h5>
                                <h2 className='md:w-full lg:w-6/8 mb-4 pe-3 lg:pe-0 text-[25px] lg:text-[28px] xl:text-[32px] font-semibold'>Together We Can Make World More Health & Better</h2>
                                <p className='md:text-[12px] text-[#888888] pe-3 lg:pe-0 text-[13px] lg:text-[13px] lg:w-6/8 pb-6 md:pb-3 lg:pb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <div className="list">
                                    <div className="w-full flex gap-15 md:gap-20 lg:gap-25">
                                        <div className="w-auto">
                                            <ul className="flex flex-col md:gap-0.5 lg:gap-3">
                                                <li>
                                                    <span className='flex items-center ms-[-6px]'>
                                                        <span className='pe-0.3 text-[26px] text-[#C30000]'><BsCheck /></span>
                                                        <span className='text-[16px] ps-1 font-medium'>Good Service</span>
                                                    </span>
                                                </li>

                                                <li>
                                                    <span className='flex items-center ms-[-6px]'>
                                                        <span className='pe-0.3 text-[26px] text-[#C30000]'><BsCheck /></span>
                                                        <span className='text-[16px] ps-1 font-medium'>Help People</span>
                                                    </span>
                                                </li>

                                                <li>
                                                    <span className='flex items-center ms-[-6px]'>
                                                        <span className='pe-0.3 text-[26px] text-[#C30000]'><BsCheck /></span>
                                                        <span className='text-[16px] ps-1 font-medium'>Hygine Tools</span>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="w-auto">
                                            <ul className="flex flex-col md:gap-0.5 lg:gap-3">
                                                <li>
                                                    <span className='flex items-center ms-[-6px]'>
                                                        <span className='pe-0.3 text-[26px] text-[#C30000]'><BsCheck /></span>
                                                        <span className='text-[16px] ps-1 font-medium'>24/7 Service</span>
                                                    </span>
                                                </li>

                                                <li>
                                                    <span className='flex items-center ms-[-6px]'>
                                                        <span className='pe-0.3 text-[26px] text-[#C30000]'><BsCheck /></span>
                                                        <span className='text-[16px] ps-1 font-medium'>Health Check</span>
                                                    </span>
                                                </li>

                                                <li>
                                                    <span className='flex items-center ms-[-6px]'>
                                                        <span className='pe-0.3 text-[26px] text-[#C30000]'><BsCheck /></span>
                                                        <span className='text-[16px] ps-1 font-medium'>Blood Bank</span>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="w-full flex justify-center md:justify-start">
                                        <button type="button" className="mt-9 w-full md:w-auto lg:mt-12 bg-primary py-2 text-[16px] px-8 tracking-wider rounded-md text-white md:text-[14px] lg:text-[15px] xl:text-[16px]">
                                            Aboute Us
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Aboute