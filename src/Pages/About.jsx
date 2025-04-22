import React from 'react'
import AboutBanner from '../Components/About/AboutBanner'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Explore from '../Components/About/Explore'
import Service from '../Components/About/Service'
import Expert from '../Components/About/Expert'
import Help from '../Components/About/Help'
import DonationProcess from '../Components/About/DonationProcess'

const About = () => {
  return (
    <>
      <Header />
      <AboutBanner />
      <Explore />
      <Service />
      <Expert />
      <Help />
      <DonationProcess />
      <Footer />
    </>
  )
}

export default About