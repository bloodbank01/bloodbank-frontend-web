import React, { useEffect, useState } from 'react'
import bloodImg from '../../../public/images/home/blood.png'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from "react-router";
import { useAlert } from '../../Common/Toasts/AlertProvider';
import { useLoader } from '../../Common/Loader/useLoader'
import { useSuccess } from '../../Common/Toasts/SuccessProvider'
import { useNavigate } from 'react-router';
import { createAppointment, getBloodGroup, getHospital } from '../../Common/Apis/ApiService'
import { bloodGroupList, hospitalList } from '../../Redux/Action'

const Appointment = () => {

    const hospitalData = useSelector(state => state.handle.hospitalList);
    const bloodGroupData = useSelector(state => state.handle.bloodGroupList);
    const doctorData = useSelector(state => state.handle.doctorList);
    let dispatch = useDispatch()
    const navigate = useNavigate();
    const { alert } = useAlert()
    const { success } = useSuccess()
    const { startLoading, stopLoading } = useLoader();

    const initialValues = {
        first_name: '',
        last_name: '',
        phone_no: '',
        hospital_id: '',
        request_type: '',
        message: ''
    }

    const validationSchema = Yup.object({
        first_name: Yup.string().required('First Name is required'),
        last_name: Yup.string().required('Last Name is required'),
        phone_no: Yup.string().required('Phone number is required'),
        hospital_id: Yup.string().required('Hospita required'),
        blood_id: Yup.string().required('Blood Group required'),
        request_type: Yup.string().required('Request Type is required'),
        message: Yup.string().required('Message is required')
    })

    const onSubmit = async (data) => {
        try {
            startLoading()
            const response = await createAppointment({...data, phone_no : data.phone_no?.toString()})
            stopLoading()

            if (response.status) {
                success(response.message)
                navigate('/appointment')
            } else {
                alert(response.message)
            }

        } catch (error) {
            console.log(error)
            stopLoading()
            alert("Please Try Again!")
        }
    }

    useEffect(() => {
        (async () => {
            try {
                startLoading()
                const response = await getHospital()
                const blood_group_list = await getBloodGroup()

                if (response.status) {
                    dispatch(hospitalList(response.data))
                } else {
                    alert(response.message)
                }

                if (blood_group_list.status) {
                    dispatch(bloodGroupList(blood_group_list.data))
                } else {
                    alert(blood_group_list.message)
                }
                stopLoading()

            } catch (error) {
                console.log(error)
                stopLoading()
                alert("Please Try Again!")
            }
        })()
    }, [])

    return (
        <section className='px-2 md:px-0'>
            <div className="container mx-auto pb-20">
                <div className="w-full">
                    <div className="w-full flex flex-wrap pb-12">
                        <div className="section-title w-full flex flex-col items-center">
                            <h3 className='text-web-primary mb-2.5 font-medium text-center'>APPOINTMENT & REQUEST</h3>
                            <h2 className='text-[30px] md:text-[32px] font-semibold text-center'>Fastest Blood Services</h2>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="w-full flex flex-wrap gap-4 justify-center">
                            <div className="w-full md:w-3/7 md:pe-1 lg:pe-4">
                                <div className="w-full box-shadow rounded-2xl overflow-hidden ps-2">
                                    <div className="w-full px-4 pt-6 pb-12">
                                        <h2 className='text-[#C30000] font-semibold tracking-wide text-[22px] pb-5'>Current Blood Request</h2>

                                        <div className="w-full">
                                            <ul className='flex flex-col w-full'>
                                                <li className='border-b py-4 border-[#D4D4D4]'>
                                                    <div className='flex w-full gap-4 items-center'>
                                                        <div className='w-[14px] h-auto'>
                                                            <img className='w-full object-cover' src={bloodImg} alt="bloodImg" />
                                                        </div>
                                                        <div>
                                                            <span className='text-[#838383] tracking-widest'>
                                                                B+ Surat, Gujarat (13.02.2022)
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li className='border-b py-4 border-[#D4D4D4]'>
                                                    <div className='flex w-full gap-4 items-center'>
                                                        <div className='w-[14px] h-auto'>
                                                            <img className='w-full object-cover' src={bloodImg} alt="bloodImg" />
                                                        </div>
                                                        <div>
                                                            <span className='text-[#838383] tracking-widest'>
                                                                A+ Vadodara, Gujarat (13.02.2022)
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li className='border-b py-4 border-[#D4D4D4]'>
                                                    <div className='flex w-full gap-4 items-center'>
                                                        <div className='w-[14px] h-auto'>
                                                            <img className='w-full object-cover' src={bloodImg} alt="bloodImg" />
                                                        </div>
                                                        <div>
                                                            <span className='text-[#838383] tracking-widest'>
                                                                O+ Surat, Gujarat (13.02.2022)
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li className='border-b py-4 border-[#D4D4D4]'>
                                                    <div className='flex w-full gap-4 items-center'>
                                                        <div className='w-[14px] h-auto'>
                                                            <img className='w-full object-cover' src={bloodImg} alt="bloodImg" />
                                                        </div>
                                                        <div>
                                                            <span className='text-[#838383] tracking-widest'>
                                                                AB+ Navsari, Gujarat (13.02.2022)
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li className='border-b py-4 border-[#D4D4D4]'>
                                                    <div className='flex w-full gap-4 items-center'>
                                                        <div className='w-[14px] h-auto'>
                                                            <img className='w-full object-cover' src={bloodImg} alt="bloodImg" />
                                                        </div>
                                                        <div>
                                                            <span className='text-[#838383] tracking-widest'>
                                                                AB+ Ahmedabad, Gujarat (13.02.2022)
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li className='border-b py-4 border-[#D4D4D4]'>
                                                    <div className='flex w-full gap-4 items-center'>
                                                        <div className='w-[14px] h-auto'>
                                                            <img className='w-full object-cover' src={bloodImg} alt="bloodImg" />
                                                        </div>
                                                        <div>
                                                            <span className='text-[#838383] tracking-widest'>
                                                                O+ Surat, Gujarat (13.02.2022)
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li className='border-b py-4 border-[#D4D4D4]'>
                                                    <div className='flex w-full gap-4 items-center'>
                                                        <div className='w-[14px] h-auto'>
                                                            <img className='w-full object-cover' src={bloodImg} alt="bloodImg" />
                                                        </div>
                                                        <div>
                                                            <span className='text-[#838383] tracking-widest'>
                                                                A+ Navsari, Gujarat (13.02.2022)
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li className='border-b py-4 border-[#D4D4D4]'>
                                                    <div className='flex w-full gap-4 items-center'>
                                                        <div className='w-[14px] h-auto'>
                                                            <img className='w-full object-cover' src={bloodImg} alt="bloodImg" />
                                                        </div>
                                                        <div>
                                                            <span className='text-[#838383] tracking-widest'>
                                                                B+ Surat, Gujarat (13.02.2022)
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 md:ps-1 lg:ps-4">
                                <div className="w-full box-shadow rounded-2xl overflow-hidden ps-2">
                                    <div className="w-full px-4 pt-6 pb-12">
                                        <h2 className='text-[#C30000] font-semibold tracking-wide text-[22px] pb-5'>Get Appointment</h2>

                                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                                            <Form className="w-full flex flex-wrap gap-4">
                                                <div className="w-full flex flex-wrap gap-4 lg:gap-0">
                                                    <div className="w-full lg:w-1/2 lg:pe-2">
                                                        <Field
                                                            name="first_name"
                                                            placeholder="First Name"
                                                            className="w-full p-3 border rounded-md border-[#B5B5B5]"
                                                            type="text"
                                                        />
                                                        <ErrorMessage name="first_name" component="div" className="text-red-500 text-sm mt-1" />
                                                    </div>
                                                    <div className="w-full lg:w-1/2 lg:ps-2">
                                                        <Field
                                                            name="last_name"
                                                            placeholder="Last Name"
                                                            className="w-full p-3 border rounded-md border-[#B5B5B5]"
                                                            type="text"
                                                        />
                                                        <ErrorMessage name="last_name" component="div" className="text-red-500 text-sm mt-1" />
                                                    </div>
                                                </div>

                                                <div className="w-full flex flex-wrap gap-4 lg:gap-0">
                                                    <div className="w-full lg:w-1/2 lg:pe-2">
                                                        <Field
                                                            name="phone_no"
                                                            placeholder="Phone"
                                                            className="w-full p-3 border rounded-md border-[#B5B5B5]"
                                                            type="number"
                                                        />
                                                        <ErrorMessage name="phone_no" component="div" className="text-red-500 text-sm mt-1" />
                                                    </div>
                                                    {/* <div className="w-full lg:w-1/2 lg:ps-2">
                                                        <Field
                                                            name="hospital_id"
                                                            placeholder="Hospital"
                                                            className="w-full p-3 border rounded-md border-[#B5B5B5]"
                                                            type="text"
                                                        />
                                                        <ErrorMessage name="hospital_id" component="div" className="text-red-500 text-sm mt-1" />
                                                    </div> */}
                                                    <div className="w-full lg:w-1/2 lg:ps-2">
                                                        <div className="mb-4 w-full relative">
                                                            <label className="block text-sm font-medium text-gray-700 mb-1 absolute left-[10px] px-1 top-[-10px] bg-white">
                                                                Hospital <span className="text-red-500">*</span>
                                                            </label>
                                                            <Field as="select" name="hospital_id" className="outline-none p-3 py-[13px] pe-4 border rounded-md border-[#B5B5B5] w-full" >
                                                                <option value="">Select Hospital</option>

                                                                {hospitalData.map((el) => (
                                                                    <option value={el.id}>{el.name}</option>
                                                                ))}

                                                            </Field>
                                                            <ErrorMessage name="hospital_id" component="div" className="text-red-500 text-sm mt-1" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="w-full flex flex-wrap gap-4 lg:gap-0">
                                                    {/* <div className="w-full lg:w-1/2 lg:pe-2">
                                                        <Field
                                                            name="time"
                                                            className="w-full p-3 border rounded-md border-[#B5B5B5]"
                                                            type="time"
                                                        />
                                                        <ErrorMessage name="time" component="div" className="text-red-500 text-sm mt-1" />
                                                    </div> */}
                                                    <div className="w-full lg:w-1/2 lg:pe-2">
                                                        <div className="mb-4 w-full relative">
                                                            <label className="block text-sm font-medium text-gray-700 mb-1 absolute left-[10px] px-1 top-[-10px] bg-white">
                                                                Blood Group <span className="text-red-500">*</span>
                                                            </label>
                                                            <Field as="select" name="blood_id" className="outline-none p-3 py-[13px] pe-4 border rounded-md border-[#B5B5B5] w-full" >
                                                                <option value="">Select Blood Group</option>
                                                                {bloodGroupData.map((el) => (
                                                                    <option value={el.id}>{el.name}</option>
                                                                ))}
                                                            </Field>
                                                            <ErrorMessage name="blood_id" component="div" className="text-red-500 text-sm mt-1" />
                                                        </div>
                                                    </div>


                                                    <div className="w-full lg:w-1/2 lg:ps-2">
                                                        <div className="mb-4 w-full relative">
                                                            <label className="block text-sm font-medium text-gray-700 mb-1 absolute left-[10px] px-1 top-[-10px] bg-white">
                                                                Request Type <span className="text-red-500">*</span>
                                                            </label>
                                                            <Field as="select" name="request_type" className="outline-none p-3 py-[13px] pe-4 border rounded-md border-[#B5B5B5] w-full" >
                                                                <option value="">Select Request Type</option>
                                                                <option value="Donate">Donate</option>
                                                                <option value="Get_blood">Get Blood</option>
                                                            </Field>
                                                            <ErrorMessage name="request_type" component="div" className="text-red-500 text-sm mt-1" />
                                                        </div>
                                                    </div>

                                                    {/* <div className="w-full lg:w-1/2 lg:ps-2">
                                                        <Field
                                                            name="date"
                                                            className="w-full p-3 border rounded-md border-[#B5B5B5]"
                                                            type="date"
                                                        />
                                                        <ErrorMessage name="date" component="div" className="text-red-500 text-sm mt-1" />
                                                    </div> */}
                                                </div>

                                                <div className="w-full">
                                                    <Field
                                                        as="textarea"
                                                        name="message"
                                                        rows={6}
                                                        placeholder="Message"
                                                        className="border rounded-md w-full border-[#B5B5B5] px-4 py-2 outline-0"
                                                    />
                                                    <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
                                                </div>

                                                <div className="w-full flex justify-center md:justify-start">
                                                    <button
                                                        type="submit"
                                                        className="mt-2 w-full md:w-auto bg-primary py-2 text-[16px] px-8 tracking-wider rounded-sm text-white md:text-[14px] lg:text-[15px] xl:text-[16px]"
                                                    >
                                                        Submit Now
                                                    </button>
                                                </div>
                                            </Form>
                                        </Formik>
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

export default Appointment