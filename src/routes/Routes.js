import React from 'react'
import Layout from '../layout';
import ContactUs from '../pages/ContactUs';
import AboutSection from '../pages/AboutSection';
const Home = React.lazy(() => import('../pages/Home'));
const Vission = React.lazy(() => import('../pages/VisionMission'));
const Services = React.lazy(() => import('../pages/Services'));

const WebsiteRoutes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/vision",
        element: <Vission />,
      },
      {
        path: "/about",
        element: <AboutSection />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ]
  },
];

export default WebsiteRoutes;
