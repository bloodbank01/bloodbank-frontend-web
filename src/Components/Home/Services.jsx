import React from 'react'
import service1 from '../../../public/images/home/service1.png'
import service2 from '../../../public/images/home/service2.png'
import service3 from '../../../public/images/home/service3.png'

const Services = () => {
    return (
        <section className='pb-10 md:py-20'>
            <div className="container mx-auto">
                <div className="w-full">
                    <div className="w-full flex flex-wrap">
                        <div className="section-title w-full flex flex-col items-center">
                            <h3 className='text-web-primary mb-2.5 font-medium'>WHAT WE DO</h3>
                            <h2 className='text-[32px] font-semibold'>Our Best Services</h2>
                        </div>
                    </div>
                    <div className="w-full flex flex-wrap mt-8 gap-12">
                        <div className="w-full">
                            <div className="w-full flex flex-wrap">
                                <div className="w-full md:w-1/2 md:pe-2">
                                    <div className="w-full h-[230px] sm:h-[300px] md:h-[350px] lg:h-[380px] xl:h-[430px] overflow-hidden relative">
                                        <div className="absolute left-0 bottom-0 z-10">
                                            <div className='p-2 md:hidden md:p-0'>
                                                <span className='text-[70px] mb-0 pb-0 text-[#FFDEDE] font-bold' style={{ lineHeight: '1' }}>01</span>
                                            </div>
                                        </div>
                                        <img className='w-full h-full object-cover' src={service1} alt="" />
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 md:ps-2 pt-8 md:pt-0">
                                    <div className="w-full h-full flex items-center">
                                        <div className="w-full">
                                            <div className="flex flex-col gap-3 items-center md:items-start">
                                                <span className='hidden text-[90px] md:text-[100px] mb-0 pb-0 text-[#CECECE] font-bold' style={{ lineHeight: '1' }}>01</span>
                                                <span className='font-semibold text-[25px] md:text-[20px]'>Blood Donation</span>
                                                <p className='text-[#8B8B8B] text-center md:text-start text-[13px] sm:text-[15px] md:text-[14px] w-9/10 md:w-full lg:w-8/9 xl:w-8/10 xl:text-[16px]'>Blood donation is a selfless act that can save up to three lives with just one donation. It's a simple, safe way to make a big difference in your community.</p>
                                            </div>
                                            <div className="w-full flex justify-center md:justify-start">
                                                <button type="button" className="mt-10 sm:mt-8 w-auto md:w-auto lg:mt-10 bg-primary py-2 text-[16px] px-8 tracking-wider rounded-md text-white md:text-[14px] lg:text-[15px] xl:text-[16px]">
                                                    Read More
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="w-full flex flex-wrap">
                                <div className="w-full md:w-1/2 md:ps-2 md:hidden">
                                    <div className="w-full h-[230px] sm:h-[300px] md:h-[350px] lg:h-[380px] xl:h-[430px] overflow-hidden relative">
                                        <div className="absolute right-0 bottom-0 z-10">
                                            <div className='p-2 md:hidden md:p-0'>
                                                <span className='text-[70px] mb-0 pb-0 text-[#FFDEDE] font-bold' style={{ lineHeight: '1' }}>02</span>
                                            </div>
                                        </div>
                                        <img className='w-full h-full object-cover' src={service2} alt="" />
                                    </div>
                                </div>

                                <div className="w-full md:w-1/2 md:pe-2 pt-8 md:pt-0">
                                    <div className="w-full h-full flex items-center">
                                        <div className="w-full">
                                            <div className="flex flex-col gap-3 items-center md:items-end">
                                                <span className='hidden text-[90px] md:text-[100px] mb-0 pb-0 text-[#CECECE] font-bold' style={{ lineHeight: '1' }}>02</span>
                                                <span className='font-semibold text-[25px] md:text-[20px]'>Health Check</span>
                                                <p className='text-[#8B8B8B] text-center md:text-end text-[13px] sm:text-[15px] md:text-[14px] w-9/10 md:w-full lg:w-8/9 xl:w-8/10 xl:text-[16px]'>Regular health check-ups help detect potential health issues early, ensuring timely treatment and better long-term well-being. They are key to maintaining a healthy, balanced lifestyle.</p>
                                            </div>
                                            <div className="w-full flex justify-center md:justify-end">
                                                <button type="button" className="mt-10 sm:mt-8 w-auto md:w-auto lg:mt-10 bg-primary py-2 text-[16px] px-8 tracking-wider rounded-md text-white md:text-[14px] lg:text-[15px] xl:text-[16px]">
                                                    Read More
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 md:ps-2 hidden md:block">
                                    <div className="w-full h-[230px] sm:h-[300px] md:h-[350px] lg:h-[380px] xl:h-[430px] overflow-hidden">
                                        <img className='w-full h-full object-cover' src={service2} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="w-full flex flex-wrap">
                                <div className="w-full md:w-1/2 md:pe-2">
                                    <div className="w-full h-[230px] sm:h-[300px] md:h-[350px] lg:h-[380px] xl:h-[430px] overflow-hidden relative">
                                        <div className="absolute left-0 bottom-0 z-10">
                                            <div className='p-2 md:hidden md:p-0'>
                                                <span className='text-[70px] mb-0 pb-0 text-[#FFDEDE] font-bold' style={{ lineHeight: '1' }}>03</span>
                                            </div>
                                        </div>
                                        <img className='w-full h-full object-cover' src={service3} alt="" />
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 md:ps-2 pt-8 md:pt-0">
                                    <div className="w-full h-full flex items-center">
                                        <div className="w-full">
                                            <div className="flex flex-col gap-3 items-center md:items-start">
                                                <span className='hidden text-[90px] md:text-[100px] mb-0 pb-0 text-[#CECECE] font-bold' style={{ lineHeight: '1' }}>03</span>
                                                <span className='font-semibold text-[25px] md:text-[20px]'>Blood Bank</span>
                                                <p className='text-[#8B8B8B] text-center md:text-start text-[13px] sm:text-[15px] md:text-[14px] w-9/10 md:w-full lg:w-8/9 xl:w-8/10 xl:text-[16px]'>A blood bank is a facility that collects, stores, and distributes blood for medical use. It plays a vital role in saving lives during surgeries, accidents, and for patients with chronic illnesses.</p>
                                            </div>
                                            <div className="w-full flex justify-center md:justify-start">
                                                <button type="button" className="mt-10 sm:mt-8 w-auto md:w-auto lg:mt-10 bg-primary py-2 text-[16px] px-8 tracking-wider rounded-md text-white md:text-[14px] lg:text-[15px] xl:text-[16px]">
                                                    Read More
                                                </button>
                                            </div>
                                        </div>
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

export default Services