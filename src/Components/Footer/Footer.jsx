import React from 'react'
import arrowImg from '../../../public/images/home/arrow.png'
import news1 from '../../../public/images/home/news1.png'
import news2 from '../../../public/images/home/news2.png'

const Footer = () => {
    return (
        <footer className='bg-[#EDEDED] py-15'>
            <div className="container mx-auto">
                <div className="w-full">
                    <div className="w-full flex">
                        <div className="w-6/9">
                            <div className="w-full">
                                <div className="w-full flex flex-wrap">
                                    <div className="w-1/3">
                                        <div className="w-full h-full flex flex-col">
                                            <div>
                                                <h3 className='text-[#C30000] text-[27px] mb-3'>About Us</h3>
                                                <div className='mt-3'>
                                                    <p className='my-2 pe-4 text-[#4B4B4B] text-[14px] mb-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p>
                                                    <span className='font-semibold'>Phone : <span className='font-normal'>+91 92657 39309</span></span>
                                                </p>
                                                <p className='mt-1'>
                                                    <span className='font-semibold'>Email : <span className='font-normal'>bloodbank.official.01@gmail.com</span></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-1/3">
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

                                    <div className="w-1/3">
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
                        <div className="w-3/9">
                            <div className="w-full">
                                <div className="w-full">
                                    <h3 className='text-[#C30000] text-[27px]'>Latest News</h3>
                                    <ul className='flex flex-col gap-8 mt-4 w-full'>
                                        <li className='w-full flex'>
                                            <div className='w-[80px] h-[80px] aspect-square rounded-sm overflow-hidden'>
                                                <div className="w-full h-full">
                                                    <img src={news1} className='w-full h-full object-cover' alt="" />
                                                </div>
                                            </div>
                                            <p className='text-[#4B4B4B] text-[14px] w-[calc(100%-80px)] px-4 pe-15'>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                                            </p>
                                        </li>

                                        <li className='w-full flex'>
                                            <div className='w-[80px] h-[80px] aspect-square rounded-sm overflow-hidden'>
                                                <div className="w-full h-full">
                                                    <img src={news2} className='w-full h-full object-cover' alt="" />
                                                </div>
                                            </div>
                                            <p className='text-[#4B4B4B] text-[14px] w-[calc(100%-80px)] px-4 pe-15'>
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