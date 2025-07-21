import React from 'react'
import HomePage from './HomePage'
import AboutSection from './AboutSection'
import OurCustomers from './OurCustomers'
import OurPartners from './OurPartners'
import ContactUs from './ContactUs'

function Home() {
    return (
        <div className='bg-gradient-to-tr from-graybg to-secondarybg'>
            <HomePage />
            <div id="about">
                <AboutSection />
            </div>
            <OurCustomers />
            <OurPartners />
            <div id="contact">
                <ContactUs />
            </div>
        </div>
    )
}

export default Home
