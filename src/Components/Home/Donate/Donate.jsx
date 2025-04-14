import React, { useEffect, useRef, useState } from 'react'
import exitImg from '../../../../public/images/home/exit.png'

const Donate = () => {

    const divRef = useRef(null);
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
  
    useEffect(() => {
      if (divRef.current) {
          setHeight(divRef.current.offsetHeight);
          console.log(divRef.current.offsetHeight, 'height')
      }
    }, []);

    useEffect(() => {
        if (divRef.current) {
            setWidth(divRef.current.offsetWidth);
            console.log(divRef.current.offsetWidth, 'width')
        }
      }, []);

    return (
        // <section className='w-full md:mt-[-50px] lg:mt-[-80px] px-2 py-4 md:py-0 z-1 relative'>
        <section className={`w-full px-2 py-4 md:py-0 z-1 relative md:mt-[-60px] lg:mt-[-80px] 2xl:mt-[-100px] md:h-auto`} style={{height : width >= 767 ?`${height}px` : 'auto'}}>
            <div className="w-full relative h-auto">
                <div ref={divRef} className="w-full md:absolute z-10">
                    <div className="container mx-auto">
                        <div className="w-full">
                            <div className="w-full flex flex-wrap gap-4 md:gap-0">
                                <div className="w-full rounded-xl md:rounded-[0px] md:w-1/2 bg-primary">
                                    <div className="w-full px-3 py-4 lg:p-8">
                                        <div className="w-full">
                                            <h4 className='text-[23px] md:text-[21px] xl:text-[28px] lg:text-[26px] sm:text-[24px] text-white font-semibold tracking-widest'>Request Now</h4>
                                            <p className='text-[12px] md:text-[11px] lg:text-[16px] pe-5 sm:pe-20 sm:text-[14px] lg:pe-0 lg:w-5/6 text-[#C8C8C8] xl:w-6/8 mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                                            <div className="icon w-full flex justify-end pt-4">
                                                <button>
                                                    <div className='w-2/4 lg:w-2/3 '>
                                                        <img className='w-full' src={exitImg} alt="exit icon" />
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full rounded-xl md:rounded-[0px] md:w-1/2 bg-black">
                                    <div className="w-full px-3 py-4 lg:p-8">
                                        <div className="w-full">
                                            <h4 className='text-[23px] md:text-[21px] xl:text-[28px] lg:text-[26px] sm:text-[24px] text-white font-semibold tracking-widest'>Donate Now</h4>
                                            <p className='text-[12px] md:text-[11px] lg:text-[16px] pe-5 sm:pe-20 sm:text-[14px] lg:pe-0 lg:w-5/6 text-[#C8C8C8] xl:w-6/8 mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                                            <div className="icon w-full flex justify-end pt-4">
                                                <button>
                                                    <div className='w-2/4 lg:w-2/3 '>
                                                        <img className='w-full' src={exitImg} alt="exit icon" />
                                                    </div>
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

export default Donate