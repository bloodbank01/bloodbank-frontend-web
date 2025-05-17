import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useAlert } from '../../Common/Toasts/AlertProvider'
import { useSuccess } from '../../Common/Toasts/SuccessProvider'
import { useLoader } from '../../Common/Loader/useLoader'
import { useNavigate } from 'react-router'
import { createContact } from '../../Common/Apis/ApiService'

const ContactTouch = () => {

  const navigate = useNavigate()

  const { alert } = useAlert()
  const { success } = useSuccess()
  const { startLoading, stopLoading } = useLoader();

  
const initialValues = {
  first_name: '',
  last_name: '',
  email: '',
  phone_no: '',
  message: ''
}

const validationSchema = Yup.object({
  first_name: Yup.string().required('First name is required'),
  last_name: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone_no: Yup.string().required('Mobile number is required'),
  message: Yup.string().required('Message is required')
})

const onSubmit = async (data) => {
  console.log('Form data:', data)
  try {
    startLoading()
    const response = await createContact(data)
    stopLoading()

    if (response.status) {
      success(response.message)
      navigate('/')
    } else {
      alert(response.message)
    }

  } catch (error) {
    console.log(error)
    stopLoading()
    alert("Please Try Again!")
  }
}


  return (
    <section className='pb-15 pt-10 g:py-15 px-2 lg:px-0'>
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
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                  <Form className="w-full flex flex-wrap gap-4 lg:gap-6">
                    <div className="w-full flex gap-4 flex-wrap lg:gap-0">
                      <div className="w-full lg:w-1/2 lg:pe-3">
                        <div className="w-full">
                          <Field
                            type="text"
                            name="first_name"
                            placeholder="First Name"
                            className="w-full border border-[#9A9791] p-4"
                          />
                          <ErrorMessage name="first_name" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                      </div>

                      <div className="w-full lg:w-1/2 lg:ps-3">
                        <div className="w-full">
                          <Field
                            type="text"
                            name="last_name"
                            placeholder="Last Name"
                            className="w-full border border-[#9A9791] p-4"
                          />
                          <ErrorMessage name="last_name" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                      </div>
                    </div>

                    <div className="w-full flex gap-4 flex-wrap lg:gap-0">
                      <div className="w-full lg:w-1/2 lg:pe-3">
                        <div className="w-full">
                          <Field
                            type="email"
                            name="email"
                            placeholder="E-mail Address"
                            className="w-full border border-[#9A9791] p-4"
                          />
                          <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                      </div>

                      <div className="w-full lg:w-1/2 lg:ps-3">
                        <div className="w-full">
                          <Field
                            type="text"
                            name="phone_no"
                            placeholder="Mobile Number"
                            className="w-full border border-[#9A9791] p-4"
                          />
                          <ErrorMessage name="phone_no" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                      </div>
                    </div>

                    <div className="w-full flex gap-4 flex-wrap lg:gap-0">
                      <div className="w-full">
                        <Field
                          as="textarea"
                          name="message"
                          rows={5}
                          placeholder="Message *"
                          className="border w-full border-[#9A9791] px-4 py-2 outline-0"
                        />
                        <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
                      </div>
                    </div>

                    <div className="w-full flex justify-center md:justify-start">
                      <button
                        type=""
                        className="w-full md:w-auto bg-primary py-2 text-[16px] px-8 tracking-wider rounded-sm text-white md:text-[14px] lg:text-[15px] xl:text-[16px]"
                      >
                        Submit
                      </button>
                    </div>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactTouch