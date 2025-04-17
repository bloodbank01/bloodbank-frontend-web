import React from 'react'
import banner from '../../../public/images/contact/banner.png'

const ContactBanner = () => {
    return (
        <section className='w-full h-[400px] relative' style={{ backgroundImage: `url(${banner})` }}>
            <div className="back-overlay bg-[rgba(0,0,0,0.6)] z-0">
                <div className="container mx-auto h-full">
                    <div className="w-full h-full">
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="title text-center">
                                <h1 className='text-white text-[40px] lg:text-[60px] font-semibold tracking-wide'>Contact us</h1>
                                <span className='text-white text-[16px] lg:text-[22px] tracking-wide'>Home  /  <span className='text-[#FF0000]'>Contact us</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactBanner