import React from 'react'
import doctor1 from '../../../public/images/home/doctor1.png'
import doctor2 from '../../../public/images/home/doctor2.png'
import doctor3 from '../../../public/images/home/doctor3.png'
import doctor4 from '../../../public/images/home/doctor4.png'

const Expert = () => {
    return (
        <section className="pb-20">
            <div className="container mx-auto">
                <div className="w-full">
                    <div className="w-full flex flex-wrap">
                        <div className="section-title w-full flex flex-col items-center">
                            <h3 className='text-web-primary mb-2.5 font-medium'>OUR TEAM</h3>
                            <h2 className='text-[32px] font-semibold'>Expert Doctors</h2>
                        </div>
                    </div>
                    <div className="w-full mt-8">
                        <div className="w-full flex flex-wrap gap-5 sm:gap-0">
                            <div className="w-full sm:w-1/2 lg:w-1/4 xl:w-1/4 px-2">
                                <div className="full bg-[#FFD7D7] rounded-lg">
                                    <div className="w-full p-4 py-5">
                                        <div className="w-full aspect-square rounded-lg overflow-hidden">
                                            <img className='w-full h-full object-cover' src={doctor1} alt="doctor" />
                                        </div>
                                        <div className="titlas mt-6">
                                            <h2 className='text-[20px] font-semibold text-center'>Dr. Rajesh Mehta</h2>
                                            <p className='text-[#737373] text-center mt-1'>Hematologist</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full sm:w-1/2 lg:w-1/4 xl:w-1/4 px-2">
                                <div className="full bg-[#FFD7D7] rounded-lg">
                                    <div className="w-full p-4 py-5">
                                        <div className="w-full aspect-square rounded-lg overflow-hidden">
                                            <img className='w-full h-full object-cover' src={doctor2} alt="doctor" />
                                        </div>
                                        <div className="titlas mt-6">
                                            <h2 className='text-[20px] font-semibold text-center'>Dr. Priya Nair</h2>
                                            <p className='text-[#737373] text-center mt-1'>General Physician</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full sm:w-1/2 lg:w-1/4 xl:w-1/4 px-2 sm:mt-4 lg:mt-0">
                                <div className="full bg-[#FFD7D7] rounded-lg">
                                    <div className="w-full p-4 py-5">
                                        <div className="w-full aspect-square rounded-lg overflow-hidden">
                                            <img className='w-full h-full object-cover' src={doctor3} alt="doctor" />
                                        </div>
                                        <div className="titlas mt-6">
                                            <h2 className='text-[20px] font-semibold text-center'>Dr. Sneha Patil</h2>
                                            <p className='text-[#737373] text-center mt-1'>Internal Medicine Specialist</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full sm:w-1/2 lg:w-1/4 xl:w-1/4 px-2 sm:mt-4 lg:mt-0">
                                <div className="full bg-[#FFD7D7] rounded-lg">
                                    <div className="w-full p-4 py-5">
                                        <div className="w-full aspect-square rounded-lg overflow-hidden">
                                            <img className='w-full h-full object-cover' src={doctor4} alt="doctor" />
                                        </div>
                                        <div className="titlas mt-6">
                                            <h2 className='text-[20px] font-semibold text-center'>Dr. Vikram Sharma</h2>
                                            <p className='text-[#737373] text-center mt-1'>Pathologist</p>
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

export default Expert