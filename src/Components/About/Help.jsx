import React from 'react'
import abouteImg from '../../../public/images/about/aboute.png'
import help1 from '../../../public/images/about/help1.png'
import help2 from '../../../public/images/about/help2.png'
import help3 from '../../../public/images/about/help3.png'
import help4 from '../../../public/images/about/help4.png'

const Help = () => {
    return (
        <section className='relative h-[1040px] sm:h-[630px] lg:h-[450px] xl:h-[480px]' style={{ backgroundImage: `url(${abouteImg})`, backgroundSize: 'cover', backgroundPosition: '100%' }}>
            <div className="py-5 bg-overlay back-overlay px-2">
                <div className="container mx-auto">
                    <div className="w-full mt-1">
                        <div className="title-help text-white">
                            <p className='text-center'>We Help People</p>
                            <h4 className='text-center text-[33px] font-medium mt-0 my-1'>Stay to Help You</h4>
                            <p className='text-center text-[12px] lg:text-[14px] font-extralight text-[#C0C0C0]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry's standard.</p>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="w-full flex flex-wrap mt-8 gap-4 sm:gap-0 items-stretch">

                            <div className="px-2 w-full sm:w-1/2 lg:w-1/4">
                                <div className="w-full rounded-[42px] bg-white overflow-hidden pt-8 pb-10">
                                    <div className="w-full">
                                        <div className="w-full flex flex-col text-[#C30000] gap-2 items-center">
                                            <div className="w-1/7">
                                                <img src={help1} className="w-full object-cover mt-1.5" alt="" />
                                            </div>
                                            <p className='text-[18px]'>2349</p>
                                            <p>SUCCESS LIFE SAVE</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="px-2 w-full sm:w-1/2 lg:w-1/4">
                                <div className="w-full rounded-[42px] bg-white overflow-hidden pt-8 pb-10">
                                    <div className="w-full">
                                        <div className="w-full flex flex-col text-[#C30000] gap-2 items-center">
                                            <div className="w-1/7">
                                                <img src={help2} className="w-full object-cover" alt="" />
                                            </div>
                                            <p className='text-[18px]'>2315</p>
                                            <p>SUCCESS SMILE</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="px-2 w-full sm:w-1/2 lg:w-1/4 sm:mt-4 lg:mt-0">
                                <div className="w-full rounded-[42px] bg-white overflow-hidden pt-8 pb-10">
                                    <div className="w-full">
                                        <div className="w-full flex flex-col text-[#C30000] gap-2 items-center">
                                            <div className="w-1/7">
                                                <img src={help3} className="w-full object-cover" alt="" />
                                            </div>
                                            <p className='text-[18px]'>1257</p>
                                            <p>HAPPY RECIPIENT</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="px-2 w-full sm:w-1/2 lg:w-1/4 sm:mt-4 lg:mt-0">
                                <div className="w-full rounded-[42px] bg-white overflow-hidden pt-8 pb-10">
                                    <div className="w-full">
                                        <div className="w-full flex flex-col text-[#C30000] gap-2 items-center">
                                            <div className="w-1/7">
                                                <img src={help4} className="w-full object-cover" alt="" />
                                            </div>
                                            <p className='text-[18px]'>1245</p>
                                            <p>TOTAL AWARDS</p>
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

export default Help