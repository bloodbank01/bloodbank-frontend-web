import React from 'react'

const DonationProcess = () => {
    return (
        <section className='py-20 pb-25 px-2'>
            <div className="container mx-auto">
                <div className="w-full">
                    <div className="w-full">
                        <div className="w-full flex flex-wrap">
                            <div className="section-title w-full flex flex-col items-center">
                                <h3 className='text-web-primary text-[17px] mb-1 font-medium'>What We do</h3>
                                <h2 className='text-[32px] font-semibold'>Donation Process</h2>
                            </div>
                        </div>
                        <div className="w-full mt-8">
                            <div className="w-full flex flex-wrap relative">
                                <div className="w-full md:w-[45%]">
                                    <div className="w-full flex flex-col items-center xl:items-end">
                                        <div className="w-full sm:w-2/3 md:w-11/12 lg:w-11/12 xl:w-5/6 2xl:w-1/2 pb-30">
                                            <div className="w-full relative bg-white box-shadow-full">
                                                <div className="absolute top-[100%] left-[50%] w-[50px] z-[0] h-[50px] md:top-[50%] rounded-full bg-white md:left-[100%] transform-translate flex justify-center items-center text-[16px] font-semibold">1.</div>
                                                <div className="absolute top-[100%] left-[50%] w-[50px] h-[50px] md:top-[50%] z-[-1] rounded-full bg-white box-shadow-right-full md:left-[100%] transform-translate flex justify-center items-center text-[18px]"></div>
                                                <div className="p-4 px-5">
                                                    <p className='text-[#C30000] font-semibold text-[18px]'>Registration</p>
                                                    <p className='text-[12px] text-[#C0C0C0] mt-3'>Register now to donate blood and make a life-saving difference for those in need.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-full sm:w-2/3 md:w-11/12 lg:w-11/12 xl:w-5/6 2xl:w-1/2 pb-30 md:hidden">
                                            <div className="w-full relative bg-white box-shadow-full">
                                                <div className="absolute top-[100%] left-[50%] w-[50px] z-[0] h-[50px] md:top-[50%] rounded-full bg-white md:left-[0%] transform-translate flex justify-center items-center text-[16px] font-semibold">2.</div>
                                                <div className="absolute top-[100%] left-[50%] w-[50px] h-[50px] md:top-[50%] z-[-1] rounded-full bg-white box-shadow-right-full md:left-[0%] transform-translate flex justify-center items-center text-[18px]"></div>
                                                <div className="p-4 px-5">
                                                    <p className='text-[#C30000] font-semibold text-[18px]'>Screening Test</p>
                                                    <p className='text-[12px] text-[#C0C0C0] mt-3'>A quick screening test ensures safe blood donation for both donors and recipients.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-full sm:w-2/3 md:w-11/12 lg:w-11/12 xl:w-5/6 2xl:w-1/2">
                                            <div className="w-full relative bg-white box-shadow-full">
                                                <div className="absolute top-[100%] left-[50%] w-[50px] z-[0] h-[50px] md:top-[50%] rounded-full bg-white md:left-[100%] transform-translate flex justify-center items-center text-[16px] font-semibold">3.</div>
                                                <div className="absolute top-[100%] left-[50%] w-[50px] h-[50px] md:top-[50%] z-[-1] rounded-full bg-white box-shadow-right-full md:left-[100%] transform-translate flex justify-center items-center text-[18px]"></div>
                                                <div className="p-4 px-5">
                                                    <p className='text-[#C30000] font-semibold text-[18px]'>Donation</p>
                                                    <p className='text-[12px] text-[#C0C0C0] mt-3'>Donate blood today—your contribution can save lives and make a lasting impact on others.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-[10%] md:relative">
                                    <div className="absolute hidden 2xl:block z-[-2] w-[181px] border-b-3 border-dashed border-[#FF0000]" style={{transform: 'rotate(48deg)', top: '118px', left: '-9px'}}></div>
                                    <div className="absolute hidden 2xl:block z-[-2] w-[181px] border-b-3 border-dashed border-[#FF0000]" style={{transform: 'rotate(-44deg)', top: '220px', left: '-9px'}}></div>
                                    <div className="absolute hidden 2xl:block z-[-2] w-[181px] border-b-3 border-dashed border-[#FF0000]" style={{transform: 'rotate(48deg)', top: '340px', left: '-9px'}}></div>
                                

                                    <div className="dash-1 absolute 2xl:hidden z-[-2] md:w-[173px] lg:w-[181px] w-[3px] h-[130px] md:h-[105px] border-s-3 md:border-s-0 2xl:w-[181px] 2xl:rotate-[48deg] 2xl:top-[118px] 2xl:left-[-9px] md:border-b-3 border-dashed border-[#FF0000] rotate-0 md:rotate-[61deg] lg:rotate-[48deg] md:top-[31px] top-[135px] lg:top-[18px] left-[50%] md:left-[-9px] xl:left-[19px] xl:top-[36px] xl:rotate-[55deg]"></div>
                                    <div className="dash-2 absolute 2xl:hidden z-[-2] md:w-[173px] lg:w-[181px] w-[3px] h-[130px] md:h-[105px] border-s-3 md:border-s-0 2xl:w-[181px] 2xl:rotate-[-44deg] 2xl:top-[220px] 2xl:left-[-9px] md:border-b-3 border-dashed border-[#FF0000] rotate-0 md:rotate-[-55deg] lg:rotate-[-44deg] top-[350px] md:left-[-84px] lg:left-[-65px] lg:top-[134px] md:top-[138px] left-[50%] xl:left-[-73px] xl:top-[151px] xl:rotate-[-50deg]"></div>
                                    <div className="dash-3 absolute 2xl:hidden z-[-2] md:w-[173px] lg:w-[181px] w-[3px] h-[130px] md:h-[105px] border-s-3 md:border-s-0 2xl:w-[181px] 2xl:rotate-[48deg] 2xl:top-[340px] 2xl:left-[-9px] md:border-b-3 border-dashed border-[#FF0000] rotate-0 md:rotate-[61deg] lg:rotate-[48deg] md:top-[257px] top-[550px] left-[50%] md:left-[-9px] lg:top-[250px] xl:rotate-[52deg] xl:left-[19px] xl:top-[269px]"></div>
                                </div>
                                <div className="w-full md:w-[45%]">
                                    <div className="w-full flex flex-col items-center xl:items-start">
                                        <div className="w-full sm:w-2/3 md:w-11/12 lg:w-11/12 xl:w-5/6 2xl:w-1/2 py-30 hidden md:block">
                                            <div className="w-full relative bg-white box-shadow-full">
                                                <div className="absolute top-[100%] left-[50%] w-[50px] z-[0] h-[50px] md:top-[50%] rounded-full bg-white md:left-[0%] transform-translate flex justify-center items-center text-[16px] font-semibold">2.</div>
                                                <div className="absolute top-[100%] left-[50%] w-[50px] h-[50px] md:top-[50%] z-[-1] rounded-full bg-white box-shadow-right-full md:left-[0%] transform-translate flex justify-center items-center text-[18px]"></div>
                                                <div className="p-4 px-5">
                                                    <p className='text-[#C30000] font-semibold text-[18px]'>Screening Test</p>
                                                    <p className='text-[12px] text-[#C0C0C0] mt-3'>A quick screening test ensures safe blood donation for both donors and recipients.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-full sm:w-2/3 md:w-11/12 lg:w-11/12 xl:w-5/6 2xl:w-1/2 pt-30 md:pt-0">
                                            <div className="w-full relative bg-white box-shadow-full">
                                                <div className="absolute top-[100%] left-[50%] w-[50px] z-[0] h-[50px] md:top-[50%] rounded-full bg-white md:left-[0%] transform-translate flex justify-center items-center text-[16px] font-semibold">4.</div>
                                                <div className="absolute top-[100%] left-[50%] w-[50px] h-[50px] md:top-[50%] z-[-1] rounded-full bg-white box-shadow-right-full md:left-[0%] transform-translate flex justify-center items-center text-[18px]"></div>
                                                <div className="p-4 px-5">
                                                    <p className='text-[#C30000] font-semibold text-[18px]'>Rest & Refresh</p>
                                                    <p className='text-[12px] text-[#C0C0C0] mt-3'>Rest and hydrate after donating blood to help your body recover and feel rejuvenated.</p>
                                                </div>
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

export default DonationProcess