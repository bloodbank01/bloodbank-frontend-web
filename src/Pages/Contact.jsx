import React from 'react'
import Banner from '../Components/Contact/ContactBanner'
import ContactTouch from '../Components/Contact/ContactTouch'
import Maps from '../Components/Contact/Maps'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

const Contact = () => {
    return (
        <>
            <Header />
            <Banner />
            <ContactTouch />
            <Maps />
            <Footer />
        </>
    )
}

export default Contact