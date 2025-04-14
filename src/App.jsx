import { useState } from 'react'
import './App.css'
import { useAlert } from './Common/Toasts/AlertProvider'
import { useSuccess } from './Common/Toasts/SuccessProvider'
import { useLoader } from './Common/Loader/useLoader'
import { Route, Routes } from "react-router";
import SecureRoutes from './SecureRoutes/SecureRoutes'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Register from './Pages/Register'
import ForgotPassword from './Pages/ForgotPassword'
import ResetPassword from './Pages/ResetPassword'
import EmailVerify from './Pages/EmailVerify'

function App() {

  return (
    <>
      <Routes>
        <Route path='/sign-up' element={<Register />} />
        <Route path='/sign-in' element={<Login />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/email-verify' element={<EmailVerify />} />
        {/* <Route index element={<Home />} /> */}

        <Route path='/' element={<SecureRoutes />} >
          <Route index element={<Home />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
