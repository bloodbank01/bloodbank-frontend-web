import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router";
import SecureRoutes from './SecureRoutes/SecureRoutes'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Register from './Pages/Register'
import ForgotPassword from './Pages/ForgotPassword'
import ResetPassword from './Pages/ResetPassword'
import EmailVerify from './Pages/EmailVerify'
import Contact from './Pages/Contact'
import About from './Pages/About'
import { useDispatch } from 'react-redux';
import { useLocation } from "react-router-dom";
import { useAlert } from './Common/Toasts/AlertProvider';
import { bloodGroupList, doctorList, hospitalList } from './Redux/Action'
import { useLoader } from './Common/Loader/useLoader'
import { useEffect } from 'react';
import { getBloodGroup, getDoctor, getHospital } from './Common/Apis/ApiService';
import Profile from './Pages/Profile';
import EditProfile from './Pages/EditProfile';
import ViewAppointment from './Pages/ViewAppointment';

function App() {

  const location = useLocation();
  let dispatch = useDispatch()
  const { alert } = useAlert()
  // const { success } = useSuccess()
  const { startLoading, stopLoading } = useLoader();

  useEffect(() => {
    (async () => {
      try {
        startLoading()
        const response = await getHospital()
        stopLoading()

        if (response.status) {
          dispatch(hospitalList(response.data))
        } else {
          alert(response.message)
        }

        startLoading()
        const response_doctor = await getDoctor()
        stopLoading()

        if (response_doctor.status) {
          dispatch(doctorList(response_doctor.data))
        } else {
          alert(response_doctor.message)
        }

        startLoading()
        const blood_group_list = await getBloodGroup()
        stopLoading()

        if (blood_group_list.status) {
          dispatch(bloodGroupList(blood_group_list.data))
        } else {
          alert(blood_group_list.message)
        }

      } catch (error) {
        console.log(error)
        stopLoading()
        alert("Please Try Again!")
      }

    })()

  }, [])

  return (
    <>
      <Routes>
        <Route path='/sign-up' element={<Register />} />
        <Route path='/sign-in' element={<Login />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/email-verify' element={<EmailVerify />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/about' element={<About />} />
        {/* <Route index element={<Home />} /> */}

        <Route path='/' element={<SecureRoutes />} >
          <Route index element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/profile/update' element={<EditProfile />} />
          <Route path='/pages' element={<EditProfile />} />
          <Route path='/appointment' element={<ViewAppointment />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
