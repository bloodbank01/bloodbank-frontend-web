import React from 'react'
import service1 from '../../../public/images/about/service1.png'
import service2 from '../../../public/images/about/service2.png'
import service3 from '../../../public/images/about/service3.png'

const Service = () => {
    return (
        <section className='w-full px-2 xl:px-0 pb-8'>
            <div className="w-full pb-10 md:pb-10 md:pt-2">
                <div className="container mx-auto">
                    <div className="w-full h-full">
                        <div className="flex flex-wrap gap-3 md:gap-0 justify-center w-full h-full">
                            <div className="w-full lg:w-1/3 md:w-1/2 md:pe-2 relative">
                                <div className="hidden absolute w-[0.5px] h-[80%] xl:h-[95%] right-0 top-[50%] translate-[-50%] bg-[#FF8C8C]"></div>
                                <div className="w-full h-full flex flex-col justify-between bg-[#FF0000] py-8">
                                    <div className="w-full flex flex-col items-center gap-4">
                                        <div className="w-1/9 sm:w-1/12 md:w-1/11">
                                            <img className='w-full' src={service1} alt="icon" />
                                        </div>
                                        <p className='text-white text-[20px]'>Blood Donation</p>
                                        <p className='text-white text-[13px] text-center px-4 xl:px-15 py-2'>
                                            Save lives with a single act. Donate blood, share hope, and make a difference today.
                                        </p>
                                    </div>
                                    <button className='text-white text-[15px] font-semibold mt-3 tracking-wider'>
                                        Learn More
                                    </button>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3 md:w-1/2 md:ps-2 md:pe-2 relative">
                                <div className="hidden absolute w-[0.5px] h-[80%] xl:h-[95%] right-0 top-[50%] translate-[-50%] bg-[#FF8C8C]"></div>
                                <div className="w-full h-full flex flex-col justify-between py-8 bg-[#FF0000]">
                                    <div className="w-full flex flex-col items-center gap-4">
                                        <div className="w-1/9 sm:w-1/12 md:w-1/11">
                                            <img className='w-full object-cover' src={service2} alt="icon" />
                                        </div>
                                        <p className='text-white text-[20px]'>Health Check</p>
                                        <p className='text-white text-[13px] text-center px-4 xl:px-15 py-2'>
                                            Regular health check-ups are essential for early detection and prevention of illnesses.
                                        </p>
                                    </div>
                                    <button className='text-white text-[15px] font-semibold mt-3 tracking-wider'>
                                        Learn More
                                    </button>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3 md:w-1/2 md:ps-2 md:pe-2 relative md:mt-4 lg:mt-0">
                                <div className="w-full h-full flex flex-col justify-between py-8 bg-[#FF0000]">
                                    <div className="w-full flex flex-col items-center gap-4">
                                        <div className="w-1/8 sm:w-1/11 md:w-1/9">
                                            <img className='w-full object-cover' src={service3} alt="icon" />
                                        </div>
                                        <p className='text-white text-[20px]'>Blood Bank</p>
                                        <p className='text-white text-[13px] text-center px-4 xl:px-15 py-2'>
                                            A lifeline in emergencies, our blood bank ensures safe and timely blood for those in need.
                                        </p>
                                    </div>
                                    <button className='text-white text-[15px] font-semibold mt-3 tracking-wider'>
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service