import React from 'react'
import doctor1 from '../../../public/images/home/doctor1.png'
import doctor2 from '../../../public/images/home/doctor2.png'
import doctor3 from '../../../public/images/home/doctor3.png'
import doctor4 from '../../../public/images/home/doctor4.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Expert = () => {
    return (
        <section className="py-20 relative bg-[#F0F0F0]">
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
                            <Swiper className='swiper-slid' spaceBetween={30} modules={[Navigation]} navigation slidesPerView={1} loop={false} autoplay={{ delay: 3000 }} breakpoints={{580: { slidesPerView: 2 }, 768: { slidesPerView: 3 },1024: { slidesPerView: 4 },}}>
                                <SwiperSlide>
                                    <div className="w-full h-full">
                                        <div className="h-full bg-[#FFD7D7] rounded-lg">
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
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="w-full h-full">
                                        <div className="h-full bg-[#FFD7D7] rounded-lg">
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
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="w-full h-full">
                                        <div className="h-full bg-[#FFD7D7] rounded-lg">
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
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="w-full h-full">
                                        <div className="h-full bg-[#FFD7D7] rounded-lg">
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
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className="w-full">

                </div>
            </div>
        </section>
    )
}

export default Expert