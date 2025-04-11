import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { resetPassword } from '../Common/Apis/ApiService';
import { useSuccess } from '../Common/Toasts/SuccessProvider';
import { useAlert } from '../Common/Toasts/AlertProvider';
import { useLoader } from '../Common/Loader/useLoader';
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import LinkExpire from '../Components/LinkExpire';
import EmailSent from '../Components/EmailSent';

const ResetPassword = () => {

    const [showPassword, setShowPassword] = useState(true)
    const [showConfirmPassword, setShowConfirmPassword] = useState(true)
    const [showSentEmailModel, setShowSentEmailModel] = useState(false)
    const [showLinkExpireModel, setShowLinkExpireModel] = useState(false)

    const { alert } = useAlert()
    const { success } = useSuccess()
    const { startLoading, stopLoading } = useLoader();

    const validationSchema = Yup.object({
        password: Yup.string().min(6, 'Minimum 6 characters').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).*$/, 'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character').required('Password is required'),
        confirm_password: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Please confirm your password'),
    });

    const handleSubmit = async (data, actions) => {
        console.log('Form Submitted:', data);
        try {
            const queryParams = new URLSearchParams(window.location.search);
            const access_token = queryParams.get('accessToken');
            const token = queryParams.get('token');
            console.log("🚀 ~ handleSubmit ~ token:", token)

            if (!token || !access_token) {
                alert('Invalid Link!')
            } else {
                startLoading()
                const response = await resetPassword({ ...data, access_token, token })
                stopLoading()
                actions.resetForm()
                if (response.status) {
                    setShowSentEmailModel(true)
                } else {
                    setShowLinkExpireModel(true)
                }
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
                <EmailSent text='Your password has been updated!' subText='Please log in using your email and new password.' setValue={setShowSentEmailModel} navigateTo='/sign-in' />
            }
            {showLinkExpireModel &&
                <LinkExpire setValue={setShowLinkExpireModel} navigateTo='/sign-in' />
            }
            <div className='container mx-auto min-h-screen'>
                <div className='lg:mx-20'>
                    <div className="w-full min-h-screen flex items-center justify-center px-4 lg:px-0">
                        <div className="w-[650px] flex-wrap flex h-full p-4 my-auto rounded-[21px] box-shadow">
                            <div className="w-full py-15">
                                <div className="w-full h-full">
                                    <div className="flex flex-col items-center justify-center h-full">
                                        <div className="title flex flex-col items-center gap-1.5">
                                            <h1 className='text-[25px] md:text-[36px] text-primary font-semibold'>Reset your password?</h1>
                                            <span className='text-[14px] md:text-[16px] text-secondary'>
                                                Enter a new password
                                            </span>
                                        </div>

                                        <div className='w-full'>
                                            <Formik initialValues={{ confirm_password: '', password: '' }} validationSchema={validationSchema} onSubmit={handleSubmit}>
                                                {({ values }) => (
                                                    <Form className="form w-full flex justify-center">
                                                        <div className="flex flex-col w-full lg:w-5/7 gap-4 mt-10">

                                                            <div>
                                                                <div className="w-full border border-primary rounded-[6px] overflow-hidden flex relative">
                                                                    <Field className="p-3 outline-0 w-full" type={showPassword ? 'password' : 'text'} name="password" placeholder="Enter Your Password" />
                                                                    <div className="icon absolute flex items-center right-0 top-1/2 translate-[-50%]">
                                                                        <button type='button' onClick={() => setShowPassword(!showPassword)} className='form-icon text-2xl'>
                                                                            {
                                                                                showPassword ? <LuEye strokeWidth={1.3} /> : <LuEyeOff strokeWidth={1.3} />
                                                                            }

                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <ErrorMessage name="password" component="div" className="text-red-500 text-[13px] mt-1" />
                                                            </div>

                                                            <div>
                                                                <div className="w-full border border-primary rounded-[6px] overflow-hidden flex relative">
                                                                    <Field className="p-3 outline-0 w-full" type={showConfirmPassword ? 'password' : 'text'} name="confirm_password" placeholder="Confirm Password" />
                                                                    <div className="icon absolute flex items-center right-0 top-1/2 translate-[-50%]">
                                                                        <button type='button' onClick={() => setShowConfirmPassword(!showConfirmPassword)} className='form-icon text-2xl'>
                                                                            {
                                                                                showConfirmPassword ? <LuEye strokeWidth={1.3} /> : <LuEyeOff strokeWidth={1.3} />
                                                                            }

                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <ErrorMessage name="confirm_password" component="div" className="text-red-500 text-[13px] mt-1" />
                                                            </div>

                                                            {/* Submit Button */}
                                                            <button type="submit" className="mt-5 mb-0.5 w-full bg-primary text-[18px] text-white font-medium p-3 rounded-[6px] cursor-pointer">
                                                                Reset Password
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

export default ResetPassword