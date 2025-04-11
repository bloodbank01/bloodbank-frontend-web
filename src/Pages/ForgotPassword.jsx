import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { forgotPassword } from '../Common/Apis/ApiService';
import { useSuccess } from '../Common/Toasts/SuccessProvider';
import { useAlert } from '../Common/Toasts/AlertProvider';
import { useLoader } from '../Common/Loader/useLoader';
import Handler from '../Common/Handler';
import EmailSent from '../Components/EmailSent';

const ForgotPassword = () => {

    const { alert } = useAlert()
    const { success } = useSuccess()
    const { startLoading, stopLoading } = useLoader();
    const [showSentEmailModel, setShowSentEmailModel] = useState(false)

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email').required('Email is required'),
    });

    const handleSubmit = async (data, actions) => {
        try {
            startLoading()
            const response = await forgotPassword({ ...data })
            stopLoading()
            actions.resetForm()

            if (response.status) {
                setShowSentEmailModel(true)
            } else {
                alert(response.message)
            }

        } catch (error) {
            console.log(error)
            stopLoading()
            alert("Please Try Again!")
        }
    };

    return (
        <>
            {showSentEmailModel &&
                <EmailSent text='Reset password link has been sent to your email' setValue={setShowSentEmailModel} navigateTo='/sign-in' />
            }
            <div className='container mx-auto min-h-screen'>
                <div className='lg:mx-20'>
                    <div className="w-full min-h-screen flex items-center justify-center px-4 lg:px-0">
                        <div className="w-[650px] flex-wrap flex h-full p-4 my-auto rounded-[21px] box-shadow">
                            <div className="w-full py-15">
                                <div className="w-full h-full">
                                    <div className="flex flex-col items-center justify-center h-full">
                                        <div className="title flex flex-col items-center gap-1.5">
                                            <h1 className='text-[25px] md:text-[36px] text-primary font-semibold'>Forgot your password?</h1>
                                            <span className='text-[14px] md:text-[16px] text-secondary'>
                                                Enter your email to reset it!
                                            </span>
                                        </div>

                                        <div className='w-full'>
                                            <Formik initialValues={{ email: '', password: '' }} validationSchema={validationSchema} onSubmit={handleSubmit}>
                                                {({ values }) => (
                                                    <Form className="form w-full flex justify-center">
                                                        <div className="flex flex-col w-full lg:w-5/7 gap-4 mt-10">

                                                            {/* Email */}
                                                            <div>
                                                                <div className="w-full border border-primary rounded-[6px] overflow-hidden">
                                                                    <Field className="p-3 rounded-[6px] outline-0 w-full" type="email" name="email" placeholder="Enter Email" />
                                                                </div>
                                                                <ErrorMessage name="email" component="div" className="text-red-500 text-[13px] mt-1" />
                                                            </div>


                                                            {/* Submit Button */}
                                                            <button type="submit" className="mt-5 mb-0.5 w-full bg-primary text-[18px] text-white font-medium p-3 rounded-[6px] cursor-pointer">
                                                                Send Link
                                                            </button>

                                                        </div>
                                                    </Form>
                                                )}
                                            </Formik>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword