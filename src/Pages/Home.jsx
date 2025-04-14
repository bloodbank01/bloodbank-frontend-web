import React from 'react'
import Banner from '../Components/Home/Banner/Banner'
import Donate from '../Components/Home/Donate/Donate'
import Aboute from '../Components/Home/Aboute'
import Contact from '../Components/Home/Contact'
import Services from '../Components/Home/Services'
import Expert from '../Components/Home/Expert'
import Appointment from '../Components/Home/Appointment'
import Touch from '../Components/Home/Touch'

const Home = () => {

  return (
    <>
      <main>
        <div className="w-full relative">
          <Banner />
          <Donate />
          <Aboute />
          <Contact />
          <Services />
          <Expert />
          <Appointment />
          <Touch />
        </div>
      </main>
    </>
  )
}

export default Home