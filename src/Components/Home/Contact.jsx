import React from 'react'
import hospitalImg from '../../../public/images/home/hospital.png'
import emergancyImg from '../../../public/images/home/emergancy.png'
import serviceImg from '../../../public/images/home/24_7_service.png'

const Contact = () => {
    return (
        <section className='w-full px-2 xl:px-0'>
            <div className="w-full pb-10 md:pb-10 md:pt-2 xl:py-10 lg:py-15 lg:bg-red-500">
                <div className="container mx-auto">
                    <div className="w-full h-full">
                        <div className="flex flex-wrap gap-3 md:gap-0 justify-center w-full h-full">
                            <div className="w-full lg:w-1/3 md:w-1/2 xl:w-1/3 md:pe-2 lg:pe-0 lg:p-0 relative">
                                <div className="hidden lg:block absolute w-[0.5px] h-[80%] xl:h-[95%] right-0 top-[50%] translate-[-50%] bg-[#FF8C8C]"></div>
                                <div className="w-full h-full flex flex-col justify-between bg-red-500 lg:bg-transparent py-8 lg:py-0">
                                    <div className="w-full flex flex-col items-center gap-4">
                                        <div className="w-1/9 sm:w-1/12 md:w-1/9">
                                            <img className='w-full' src={hospitalImg} alt="icon" />
                                        </div>
                                        <p className='text-white text-[20px]'>Hospitality</p>
                                        <p className='text-white text-[13px] text-center px-4 xl:px-15 py-2'>
                                            Clinical excellence must be the priority for any health care service provider.
                                        </p>
                                    </div>
                                    <button className='text-white text-[18px] font-semibold mt-3 tracking-wider'>
                                        Apply For A Bed
                                    </button>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3 md:w-1/2 xl:w-1/3 md:ps-2 lg:ps-0 lg:p-0 relative">
                                <div className="hidden lg:block absolute w-[0.5px] h-[80%] xl:h-[95%] right-0 top-[50%] translate-[-50%] bg-[#FF8C8C]"></div>
                                <div className="w-full h-full flex flex-col justify-between py-8 lg:py-0 bg-red-500 lg:bg-transparent">
                                    <div className="w-full flex flex-col items-center gap-4">
                                        <div className="w-1/9 sm:w-1/12 md:w-1/11">
                                            <img className='w-full' src={emergancyImg} alt="icon" />
                                        </div>
                                        <p className='text-white text-[20px]'>Emergency Care</p>
                                        <p className='text-white text-[13px] text-center px-4 xl:px-15 py-2'>
                                            Emergency blood care ensures fast, life-saving transfusions throughquick donor response and rapid blood delivery.
                                        </p>
                                    </div>
                                    <button className='text-white text-[18px] font-semibold mt-3 tracking-wider'>
                                        Call Now
                                    </button>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3 md:w-1/2 xl:w-1/3 md:pt-4 lg:p-0 relative">
                                <div className="w-full h-full flex flex-col justify-between py-8 lg:py-0 bg-red-500 lg:bg-transparent">
                                    <div className="w-full flex flex-col items-center gap-4">
                                        <div className="w-1/9 sm:w-1/12 md:w-1/11">
                                            <img className='w-full' src={serviceImg} alt="icon" />
                                        </div>
                                        <p className='text-white text-[20px]'>24/7 Ambulance Services</p>
                                        <p className='text-white text-[13px] text-center px-4 xl:px-15 py-2'>
                                            24/7 ambulance services ensure rapid medical response and transport anytime, anywhere.
                                        </p>
                                    </div>
                                    <button className='text-white text-[18px] font-semibold mt-3 tracking-wider'>
                                        Call Now
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

export default Contact