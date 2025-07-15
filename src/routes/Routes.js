import React from 'react'
import VisionMission from '../pages/VisionMission';
import Services from '../pages/Services';
import ControlPanel from '../pages/ControlPanel';
const Navbar = React.lazy(() => import('../layout/Navbar'));
const HomePage = React.lazy(() => import('../pages/HomePage'));

function Routes() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Services />
      <VisionMission />
      <ControlPanel />
    </div>
  )
}

export default Routes
