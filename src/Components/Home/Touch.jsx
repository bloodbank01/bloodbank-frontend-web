import React from 'react'

const Touch = () => {
  return (
    <section className='pb-15 lg:py-15 px-2 lg:px-0'>
      <div className="container mx-auto">
        <div className="w-full">
          <div className="w-full flex justify-between flex-wrap gap-8 md:gap-0">
            <div className="w-full md:w-1/2 lg:w-2/7 md:pe-3 lg:pe-0">
              <div className="w-full flex flex-col justify-center md:justify-start h-full">
                <div className="w-full">
                  <span className='text-[#FF0000] tracking-widest'>Reach Us</span>
                  <p className='text-black text-[40px] tracking-widest my-4'>Get in Touch</p>
                  <p className='text-[#888888] text-[14px]'>Which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when untrammelled and when nothing prevents</p>

                  <button type="button" className="mt-10 w-full md:w-auto bg-primary py-2 text-[16px] px-8 tracking-wider rounded-sm text-white md:text-[14px] lg:text-[15px] xl:text-[16px]">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-4/7 md:ps-3 lg:ps-0">
              <div className="w-full">
                <div className="w-full flex flex-wrap gap-4 lg:gap-6">
                  <div className="w-full flex gap-4 flex-wrap lg:gap-0">
                    <div className="w-full lg:w-1/2 lg:pe-3">
                      <div className="w-full border border-[#9A9791] p-4">
                        <input type="text" className='w-full' placeholder='First Name' name='first_name' />
                      </div>
                    </div>

                    <div className="w-full lg:w-1/2 lg:ps-3">
                      <div className="w-full border border-[#9A9791] p-4">
                        <input type="text" className='w-full' placeholder='Last Name' name='last_name' />
                      </div>
                    </div>
                  </div>

                  <div className="w-full flex gap-4 flex-wrap lg:gap-0">
                    <div className="w-full lg:w-1/2 lg:pe-3">
                      <div className="w-full border border-[#9A9791] p-4">
                        <input type="text" className='w-full' placeholder='E-mail Address' name='email' />
                      </div>
                    </div>

                    <div className="w-full lg:w-1/2 lg:ps-3">
                      <div className="w-full border border-[#9A9791] p-4">
                        <input type="text" className='w-full' placeholder='Mobile Number' name='mobile_no' />
                      </div>
                    </div>
                  </div>

                  <div className="w-full flex gap-4 flex-wrap lg:gap-0">
                    <div className="w-full">
                      <textarea name="message" rows={5} className='border w-full border-[#9A9791] px-4 py-2 outline-0' placeholder='Message *'></textarea>
                    </div>
                  </div>

                  <div className="w-full flex justify-center md:justify-start">
                    <button type="button" className="w-full md:w-auto bg-primary py-2 text-[16px] px-8 tracking-wider rounded-sm text-white md:text-[14px] lg:text-[15px] xl:text-[16px]">
                      Submit
                    </button>
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

export default Touch