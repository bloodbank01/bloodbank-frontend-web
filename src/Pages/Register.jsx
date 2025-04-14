import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { useGoogleLogin } from "@react-oauth/google";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FcGoogle } from "react-icons/fc";
import signup from '../../public/images/auth/signup.jpeg'
import { googleSSO, signUp } from '../Common/Apis/ApiService';
import { useSuccess } from '../Common/Toasts/SuccessProvider';
import { useAlert } from '../Common/Toasts/AlertProvider';
import { useLoader } from '../Common/Loader/useLoader';
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import Handler from '../Common/Handler';
import EmailSent from '../Components/EmailSent';

const Register = () => {

    const [showPassword, setShowPassword] = useState(true)
    const [showConfirmPassword, setShowConfirmPassword] = useState(true)
    const [showSentEmailModel, setShowSentEmailModel] = useState(false)
    const navigate = useNavigate()

    const { alert } = useAlert()
    const { success } = useSuccess()
    const { startLoading, stopLoading } = useLoader();

    const validationSchema = Yup.object({
        username: Yup.string().required('Username is required').min(3, 'Minimum 3 characters'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(6, 'Minimum 6 characters').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).*$/, 'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character').required('Password is required'),
        confirm_password: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Please confirm your password'),
        terms: Yup.boolean().oneOf([true], 'You must accept the terms'),
    });

    const handleSubmit = async (data, actions) => {
        console.log('Form Submitted:', data);
        try {
            delete data.confirm_password
            delete data.terms
            startLoading()
            const response = await signUp({ ...data })
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

    const handleGoogleLoginSuccess = async (response) => {
        const token = response.access_token;

        try {
            console.log('object-----------------------------------------------------')
            startLoading()
            const response = await googleSSO({ token })
            stopLoading()

            if (response.status) {
                await Handler.setItem('token', response.data.jwt)
                await Handler.setItem('vr', response.data.vr)
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

    };

    // Google login error handler
    const handleGoogleLoginFailure = () => {
        console.error("Google login failed");
        alert("Google Login Failed!")
    };

    const login = useGoogleLogin({
        onSuccess: (tokenResponse) => handleGoogleLoginSuccess(tokenResponse),
        onError: () => handleGoogleLoginFailure(),
    })

    return (
        <>
        {showSentEmailModel &&
            <EmailSent setValue={setShowSentEmailModel} navigateTo='/sign-in'/>
        }
            <div className='container mx-auto min-h-screen'>
                <div className='lg:mx-20'>
                    <div className="w-full min-h-screen flex items-center  py-[50px] lg:px-0">
                        <div className="w-full flex-wrap flex h-auto p-4 my-auto rounded-[21px] md-box-shadow">
                            <div className="w-full lg:w-1/2 py-15">
                                <div className="w-full h-full">
                                    <div className="flex flex-col items-center justify-center h-full">
                                        <div className="title flex flex-col items-center gap-1.5">
                                            <h1 className='text-[32px] md:text-[36px] text-primary font-semibold'>Create an account</h1>
                                            <span className='text-[14px] md:text-[16px] text-secondary'>
                                                Already have an account? <Link className='text-primary' to='/sign-in'>Log in</Link>
                                            </span>
                                        </div>


                                        <div className="w-full">
                                            <Formik initialValues={{ username: '', email: '', password: '', confirm_password: '', terms: false, }} validationSchema={validationSchema} onSubmit={handleSubmit}>
                                                {({ values, handleChange }) => (
                                                    <Form className="form w-full flex justify-center">
                                                        <div className="flex flex-col w-full lg:w-5/7 gap-4 mt-10">

                                                            {/* Username */}
                                                            <div>
                                                                <div className="w-full border border-primary rounded-[6px] overflow-hidden">
                                                                    <Field className="p-3 rounded-[6px] outline-0 w-full" type="text" name="username" placeholder="Username" />
                                                                </div>
                                                                <ErrorMessage name="username" component="div" className="text-red-500 text-[13px] mt-1" />
                                                            </div>

                                                            {/* Email */}
                                                            <div>
                                                                <div className="w-full border border-primary rounded-[6px] overflow-hidden">
                                                                    <Field className="p-3 rounded-[6px] outline-0 w-full" type="email" name="email" placeholder="Enter Email" />
                                                                </div>
                                                                <ErrorMessage name="email" component="div" className="text-red-500 text-[13px] mt-1" />
                                                            </div>

                                                            {/* Password */}
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

                                                            {/* Confirm Password */}
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

                                                            {/* Terms Checkbox */}
                                                            <div>
                                                                <div className="w-full mt-1 rounded-[6px] flex items-center">
                                                                    <Field id="term_condition" type="checkbox" name="terms" className="peer hidden" />
                                                                    <label htmlFor="term_condition" className="w-[16px] h-[16px] flex items-center justify-center border border-black rounded-[3px] peer-checked:bg-black peer-checked:after:content-['✔'] peer-checked:after:text-white peer-checked:after:text-[12px] peer-checked:after:leading-none peer-checked:after:scale-100 after:scale-0 after:transition-all duration-200"></label>
                                                                    <label htmlFor="term_condition" className="text-[13px] ps-2.5 cursor-pointer">
                                                                        I agree to the Terms & Conditions
                                                                    </label>
                                                                </div>
                                                                <ErrorMessage name="terms" component="div" className="text-red-500 text-[13px] mt-1" />
                                                            </div>

                                                            {/* Submit Button */}
                                                            <button type="submit" className="mt-5 mb-0.5 w-full bg-primary text-[18px] text-white font-medium p-3 rounded-[6px] cursor-pointer">
                                                                Create account
                                                            </button>

                                                            {/* Divider */}
                                                            <div className="w-full flex relative">
                                                                <div className="flex items-center w-full my-4">
                                                                    <hr className="flex-grow border-t border-primary" />
                                                                    <span className="px-3 text-sm text-[#B88687]">Or register with</span>
                                                                    <hr className="flex-grow border-t border-primary" />
                                                                </div>
                                                            </div>

                                                            {/* Google Login */}
                                                            <div className="w-full rounded-[6px]">
                                                                <button onClick={() => login()} type="button" className="p-3 bg-white w-full flex border border-primary rounded-[6px] justify-center">
                                                                    <span className="flex items-center gap-3">
                                                                        <span className="text-[25px]"><FcGoogle /></span>
                                                                        <span className="text-[#3c4043]">Sign In With Google</span>
                                                                    </span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </Form>
                                                )}
                                            </Formik>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden lg:block lg:w-1/2 p-4 rounded-[6px]">
                                <div className="w-full h-full rounded-[6px] overflow-hidden max-h-[760px] relative">
                                    <div className="absolute w-full h-full top-0 left-0 bg-[rgba(0,0,0,0)]">

                                    </div>
                                    <img style={{ objectPosition: '70% 100%' }} className='w-full h-full object-cover object-center' src={signup} alt="Sign Up" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register