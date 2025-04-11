import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { useGoogleLogin } from "@react-oauth/google";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FcGoogle } from "react-icons/fc";
import signup from '../../public/images/auth/signup.jpeg'
import { googleSSO, signIn, signUp } from '../Common/Apis/ApiService';
import { useSuccess } from '../Common/Toasts/SuccessProvider';
import { useAlert } from '../Common/Toasts/AlertProvider';
import { useLoader } from '../Common/Loader/useLoader';
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import Handler from '../Common/Handler';

const Login = () => {

    const [showPassword, setShowPassword] = useState(true)
    const navigate = useNavigate()

    const { alert } = useAlert()
    const { success } = useSuccess()
    const { startLoading, stopLoading } = useLoader();

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string()
    });

    const handleSubmit = async (data, actions) => {
        try {
            startLoading()
            const response = await signIn({ ...data })
            console.log(response, 'ppppppppppppppp')
            stopLoading()

            if (response.status) {
                localStorage.setItem('token', response.data.jwt)
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

    const handleGoogleLoginSuccess = async (response) => {
        const token = response.access_token;

        try {
            console.log('object-----------------------------------------------------')
            startLoading()
            const response = await googleSSO({ token })
            stopLoading()

            if (response.status) {
                await Handler.setItem('token', response.data.jwt)
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
        <div className='container mx-auto min-h-screen'>
            <div className='lg:mx-20'>
                <div className="w-full min-h-screen flex items-center py-[50px]">
                    <div className="w-full flex-wrap flex h-auto p-4 my-auto rounded-[21px] md-box-shadow">

                        <div className="hidden lg:block lg:w-1/2 p-4 rounded-[6px]">
                            <div className="w-full h-full rounded-[6px] overflow-hidden max-h-[760px] relative">
                                <div className="absolute w-full h-full top-0 left-0 bg-[rgba(0,0,0,0)]">

                                </div>
                                <img style={{ objectPosition: '70% 100%' }} className='w-full h-full object-cover object-center' src={signup} alt="Sign Up" />
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 py-15">
                            <div className="w-full h-full">
                                <div className="flex flex-col items-center justify-center h-full">
                                    <div className="title flex flex-col items-center gap-1.5">
                                        <h1 className='text-[32px] md:text-[36px] text-primary font-semibold'>Log In</h1>
                                        <span className='text-[14px] md:text-[16px] text-secondary'>
                                            Don’t have an account? <Link className='text-primary' to='/sign-up'>Register</Link>
                                        </span>
                                    </div>

                                    <div className='w-full'>
                                        <Formik initialValues={{ email: '', password: '' }} validationSchema={validationSchema} onSubmit={handleSubmit}>
                                            {({ values, handleChange }) => (
                                                <Form className="form w-full flex justify-center">
                                                    <div className="flex flex-col w-full lg:w-5/7 gap-4 mt-10">

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
                                                            <div className="w-full flex justify-end">
                                                                <div className="w-full flex justify-between">
                                                                    <div className="w-auto">
                                                                        <ErrorMessage name="password" component="div" className="text-red-500 text-[13px] mt-1" />
                                                                    </div>
                                                                    <div className="w-auto">
                                                                        <Link to='/forgot-password' className='text-[13px] text-secondary'>Forgot Password?</Link>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        {/* Submit Button */}
                                                        <button type="submit" className="mt-5 mb-0.5 w-full bg-primary text-[18px] text-white font-medium p-3 rounded-[6px] cursor-pointer">
                                                            Login
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login