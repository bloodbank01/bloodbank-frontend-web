import React from 'react'
import bannerImg from '../../../../public/images/banners/banner.png'

const Banner = () => {
    return (
        <section className='w-full h-[400px] lg:h-[550px] xl:h-[620px] 2xl:h-[710px] bg-cover relative banner' style={{ backgroundImage: `url(${bannerImg})`}}>
            <div className="back-overlay bg-[rgba(0,0,0,0.1)]">
                <div className="container mx-auto h-full">
                    <div className="w-full h-full flex items-center px-2">
                        <div className="w-full flex flex-col lg:gap-4">
                            <div>
                                <div className="sub-title text-center md:text-start">
                                    <span className='lg:text-[30px] xl:text-[34px] text-[20px] text-primary-dark font-extrabold'>Donate Blood, Save Life!</span>
                                </div>
                                <div className="title text-center md:text-start w-full md:leading-11 lg:leading-18 xl:leading-19 2xl:leading-20 font-bold mb-8 mt-3 sm:mb-7 sm:mt-4 lg:mb-9 lg:mt-6">
                                    <h1 className='text-[32px] lg:text-[55px] xl:text-[60px] 2xl:text-[63px]'>Donate Blood And Inspires Others</h1>
                                </div>
                            </div>
                            <div className='text-center banner-btn md:text-start'>
                                <button type="button" className="bg-primary py-2 px-5 tracking-wider rounded-md text-white text-[12px] md:text-[14px] lg:text-[15px] xl:text-[16px] font-semibold">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner