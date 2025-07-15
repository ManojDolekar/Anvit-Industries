import React from 'react'
import VisionMission from '../pages/VisionMission';
import Services from '../pages/Services';
import ControlPanel from '../pages/ControlPanel';
import ElectricalPower from '../pages/ElectricalPower';
import OurCustomers from '../pages/OurCustomers';
import OurPartners from '../pages/OurPartners';
import AboutSection from '../pages/AboutSection';
import ContactUs from '../pages/ContactUs';
const Navbar = React.lazy(() => import('../layout/Navbar'));
const HomePage = React.lazy(() => import('../pages/HomePage'));

function Routes() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <AboutSection/>
      <Services />
      <VisionMission />
      <ControlPanel />
      <ElectricalPower />
      <OurCustomers />
      <OurPartners />
      <ContactUs/>
    </div>
  )
}

export default Routes
