import React from 'react'
import arrowImg from '../../../public/images/home/arrow.png'
import news1 from '../../../public/images/home/news1.png'
import news2 from '../../../public/images/home/news2.png'

const Footer = () => {
    return (
        <footer className='bg-[#EDEDED] pt-5 pb-10 px-2 xl:py-15'>
            <div className="container mx-auto">
                <div className="w-full">
                    <div className="w-full flex flex-wrap">
                        <div className="w-full xl:w-6/9">
                            <div className="w-full">
                                <div className="w-full flex flex-wrap gap-6 md:gap-0">
                                    <div className="w-full lg:w-1/3 md:mb-6">
                                        <div className="w-full h-full flex flex-col">
                                            <div>
                                                <h3 className='text-[#C30000] text-[27px] mb-3'>About Us</h3>
                                                <div className='mt-3'>
                                                    <p className='my-2 pe-4 text-[#4B4B4B] text-[14px] mb-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p>
                                                    <span className='font-semibold text-[14px] xl:text-[15px]'>Phone : <span className='font-normal'>+91 92657 39309</span></span>
                                                </p>
                                                <p className='mt-1'>
                                                    <span className='font-semibold text-[14px] xl:text-[15px]'>Email : <span className='font-normal'>bloodbank.official.01@gmail.com</span></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full md:w-1/2 lg:w-1/3">
                                        <div className="w-full">
                                            <h3 className='text-[#C30000] text-[27px]'>Quick Links</h3>
                                            <ul className='flex flex-col gap-2 mt-3'>
                                                <li className='flex gap-2 items-center'>
                                                    <div className='w-[15px]'>
                                                        <div className="w-full">
                                                            <img src={arrowImg} className='w-full' alt="" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className='text-[#4B4B4B] text-[15px]'>Services</span>
                                                    </div>
                                                </li>

                                                <li className='flex gap-2 items-center'>
                                                    <div className='w-[15px]'>
                                                        <div className="w-full">
                                                            <img src={arrowImg} className='w-full' alt="" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className='text-[#4B4B4B] text-[15px]'>About Us</span>
                                                    </div>
                                                </li>

                                                <li className='flex gap-2 items-center'>
                                                    <div className='w-[15px]'>
                                                        <div className="w-full">
                                                            <img src={arrowImg} className='w-full' alt="" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className='text-[#4B4B4B] text-[15px]'>New Campaign</span>
                                                    </div>
                                                </li>

                                                <li className='flex gap-2 items-center'>
                                                    <div className='w-[15px]'>
                                                        <div className="w-full">
                                                            <img src={arrowImg} className='w-full' alt="" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className='text-[#4B4B4B] text-[15px]'>Latest News</span>
                                                    </div>
                                                </li>

                                                <li className='flex gap-2 items-center'>
                                                    <div className='w-[15px]'>
                                                        <div className="w-full">
                                                            <img src={arrowImg} className='w-full' alt="" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className='text-[#4B4B4B] text-[15px]'>Contact</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="w-full md:w-1/2 lg:w-1/3">
                                        <div className="w-full">
                                            <h3 className='text-[#C30000] text-[27px]'>Our Services</h3>
                                            <ul className='flex flex-col gap-2 mt-3'>
                                                <li className='flex gap-2 items-center'>
                                                    <div className='w-[15px]'>
                                                        <div className="w-full">
                                                            <img src={arrowImg} className='w-full' alt="" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className='text-[#4B4B4B] text-[15px]'>Blood Donaiton</span>
                                                    </div>
                                                </li>

                                                <li className='flex gap-2 items-center'>
                                                    <div className='w-[15px]'>
                                                        <div className="w-full">
                                                            <img src={arrowImg} className='w-full' alt="" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className='text-[#4B4B4B] text-[15px]'>Health Check</span>
                                                    </div>
                                                </li>

                                                <li className='flex gap-2 items-center'>
                                                    <div className='w-[15px]'>
                                                        <div className="w-full">
                                                            <img src={arrowImg} className='w-full' alt="" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className='text-[#4B4B4B] text-[15px]'>Blood Bank</span>
                                                    </div>
                                                </li>

                                                <li className='flex gap-2 items-center'>
                                                    <div className='w-[15px]'>
                                                        <div className="w-full">
                                                            <img src={arrowImg} className='w-full' alt="" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className='text-[#4B4B4B] text-[15px]'>Donate Process</span>
                                                    </div>
                                                </li>

                                                <li className='flex gap-2 items-center'>
                                                    <div className='w-[15px]'>
                                                        <div className="w-full">
                                                            <img src={arrowImg} className='w-full' alt="" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className='text-[#4B4B4B] text-[15px]'>Blood Info</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full xl:w-3/9 mt-6 xl:mt-0">
                            <div className="w-full">
                                <div className="w-full">
                                    <h3 className='text-[#C30000] text-[27px]'>Latest News</h3>
                                    <ul className='flex flex-col md:flex-row gap-8 mt-4 w-full xl:flex-col'>
                                        <li className='w-full flex flex-wrap gap-3 md:flex-nowrap md:gap-2'>
                                            <div className='w-[100px] h-[100px] md:w-[80px] md:h-[80px] aspect-square rounded-sm overflow-hidden'>
                                                <div className="w-full h-full">
                                                    <img src={news1} className='w-full h-full object-cover' alt="" />
                                                </div>
                                            </div>
                                            <p className='w-full text-[13px] xl:text-[14px] text-[#4B4B4B] text-[14px] md:w-[calc(100%-80px)] lg:px-4 lg:pe-15 pe-1'>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                                            </p>
                                        </li>

                                        <li className='w-full flex flex-wrap gap-3 md:gap-2 md:flex-nowrap'>
                                            <div className='w-[100px] h-[100px] md:w-[80px] md:h-[80px] aspect-square rounded-sm overflow-hidden'>
                                                <div className="w-full h-full">
                                                    <img src={news2} className='w-full h-full object-cover' alt="" />
                                                </div>
                                            </div>
                                            <p className='w-full text-[13px] xl:text-[14px] text-[#4B4B4B] text-[14px] md:w-[calc(100%-80px)] lg:px-4 lg:pe-15 pe-1'>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                                            </p>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer