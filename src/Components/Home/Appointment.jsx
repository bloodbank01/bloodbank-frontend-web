import React, { useState } from 'react'
import bloodImg from '../../../public/images/home/blood.png'
const Appointment = () => {

    const [startDate, setStartDate] = useState(new Date());

    return (
        <section className='px-2 md:px-0'>
            <div className="container mx-auto pb-20">
                <div className="w-full">
                    <div className="w-full flex flex-wrap pb-12">
                        <div className="section-title w-full flex flex-col items-center">
                            <h3 className='text-web-primary mb-2.5 font-medium text-center'>APPOINTMENT & REQUEST</h3>
                            <h2 className='text-[30px] md:text-[32px] font-semibold text-center'>Fastest Blood Services</h2>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="w-full flex flex-wrap gap-4 justify-center">
                            <div className="w-full md:w-3/7 md:pe-1 lg:pe-4">
                                <div className="w-full box-shadow rounded-2xl overflow-hidden ps-2">
                                    <div className="w-full px-4 pt-6 pb-12">
                                        <h2 className='text-[#C30000] font-semibold tracking-wide text-[22px] pb-5'>Current Blood Request</h2>

                                        <div className="w-full">
                                            <ul className='flex flex-col w-full'>
                                                <li className='border-b py-4 border-[#D4D4D4]'>
                                                    <div className='flex w-full gap-4 items-center'>
                                                        <div className='w-[14px] h-auto'>
                                                            <img className='w-full object-cover' src={bloodImg} alt="bloodImg" />
                                                        </div>
                                                        <div>
                                                            <span className='text-[#838383] tracking-widest'>
                                                                B+ Surat, Gujarat (13.02.2022)
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li className='border-b py-4 border-[#D4D4D4]'>
                                                    <div className='flex w-full gap-4 items-center'>
                                                        <div className='w-[14px] h-auto'>
                                                            <img className='w-full object-cover' src={bloodImg} alt="bloodImg" />
                                                        </div>
                                                        <div>
                                                            <span className='text-[#838383] tracking-widest'>
                                                                A+ Vadodara, Gujarat (13.02.2022)
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li className='border-b py-4 border-[#D4D4D4]'>
                                                    <div className='flex w-full gap-4 items-center'>
                                                        <div className='w-[14px] h-auto'>
                                                            <img className='w-full object-cover' src={bloodImg} alt="bloodImg" />
                                                        </div>
                                                        <div>
                                                            <span className='text-[#838383] tracking-widest'>
                                                                O+ Surat, Gujarat (13.02.2022)
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li className='border-b py-4 border-[#D4D4D4]'>
                                                    <div className='flex w-full gap-4 items-center'>
                                                        <div className='w-[14px] h-auto'>
                                                            <img className='w-full object-cover' src={bloodImg} alt="bloodImg" />
                                                        </div>
                                                        <div>
                                                            <span className='text-[#838383] tracking-widest'>
                                                                AB+ Navsari, Gujarat (13.02.2022)
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li className='border-b py-4 border-[#D4D4D4]'>
                                                    <div className='flex w-full gap-4 items-center'>
                                                        <div className='w-[14px] h-auto'>
                                                            <img className='w-full object-cover' src={bloodImg} alt="bloodImg" />
                                                        </div>
                                                        <div>
                                                            <span className='text-[#838383] tracking-widest'>
                                                                AB+ Ahmedabad, Gujarat (13.02.2022)
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li className='border-b py-4 border-[#D4D4D4]'>
                                                    <div className='flex w-full gap-4 items-center'>
                                                        <div className='w-[14px] h-auto'>
                                                            <img className='w-full object-cover' src={bloodImg} alt="bloodImg" />
                                                        </div>
                                                        <div>
                                                            <span className='text-[#838383] tracking-widest'>
                                                                O+ Surat, Gujarat (13.02.2022)
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li className='border-b py-4 border-[#D4D4D4]'>
                                                    <div className='flex w-full gap-4 items-center'>
                                                        <div className='w-[14px] h-auto'>
                                                            <img className='w-full object-cover' src={bloodImg} alt="bloodImg" />
                                                        </div>
                                                        <div>
                                                            <span className='text-[#838383] tracking-widest'>
                                                                A+ Navsari, Gujarat (13.02.2022)
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li className='border-b py-4 border-[#D4D4D4]'>
                                                    <div className='flex w-full gap-4 items-center'>
                                                        <div className='w-[14px] h-auto'>
                                                            <img className='w-full object-cover' src={bloodImg} alt="bloodImg" />
                                                        </div>
                                                        <div>
                                                            <span className='text-[#838383] tracking-widest'>
                                                                B+ Surat, Gujarat (13.02.2022)
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 md:ps-1 lg:ps-4">
                                <div className="w-full box-shadow rounded-2xl overflow-hidden ps-2">
                                    <div className="w-full px-4 pt-6 pb-12">
                                        <h2 className='text-[#C30000] font-semibold tracking-wide text-[22px] pb-5'>Get Appointment</h2>

                                        <div className="w-full flex flex-wrap gap-4">
                                            <div className="w-full flex flex-wrap gap-4 lg:gap-0">
                                                <div className="w-full lg:w-1/2 lg:pe-2">
                                                    <div className="w-full p-3 border rounded-md border-[#B5B5B5]">
                                                        <input className='w-full' type="text" name='name' placeholder='Name' />
                                                    </div>
                                                </div>

                                                <div className="w-full lg:w-1/2 lg:ps-2">
                                                    <div className="w-full p-3 border rounded-md border-[#B5B5B5]">
                                                        <input className='w-full' type="email" name='email' placeholder='Email' />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="w-full flex flex-wrap gap-4 lg:gap-0">
                                                <div className="w-full lg:w-1/2 lg:pe-2">
                                                    <div className="w-full p-3 border rounded-md border-[#B5B5B5]">
                                                        <input className='w-full' type="number" name='mobile_no' placeholder='Phone' />
                                                    </div>
                                                </div>

                                                <div className="w-full lg:w-1/2 lg:ps-2">
                                                    <div className="w-full p-3 border rounded-md border-[#B5B5B5]">
                                                        <input className='w-full' type="text" name='center_name' placeholder='Donation Center' />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="w-full flex flex-wrap gap-4 lg:gap-0">
                                                <div className="w-full lg:w-1/2 lg:pe-2">
                                                    <div className="w-full p-3 border rounded-md border-[#B5B5B5]">
                                                        <input className='w-full' type="date" name='date' placeholder='Date' />
                                                    </div>
                                                </div>

                                                <div className="w-full lg:w-1/2 lg:ps-2">
                                                    <div className="w-full p-3 border rounded-md border-[#B5B5B5]">
                                                        <input className='w-full' type="time" name='time' placeholder='Time' />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="w-full flex">
                                                <div className="w-full">
                                                    <textarea name="message" rows={6} className='border rounded-md w-full border-[#B5B5B5] px-4 py-2 outline-0' placeholder='Message'></textarea>
                                                </div>
                                            </div>

                                            <div className="w-full flex justify-center md:justify-start">
                                                <button type="button" className="mt-2 w-full md:w-auto bg-primary py-2 text-[16px] px-8 tracking-wider rounded-sm text-white md:text-[14px] lg:text-[15px] xl:text-[16px]">
                                                    Submit Now
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

export default Appointment