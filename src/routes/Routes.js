import React from 'react'
import Layout from '../layout';
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
    ]
  },
];

export default WebsiteRoutes;
