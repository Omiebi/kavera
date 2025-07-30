import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../views/pages/home/home';
import About from '../views/pages/about/About';
import Services from '../views/pages/services/Services';
// import About from './pages/About';
// import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    
  },
  {
    path: '/about',
    element: <About/>,
    
  },
  {
    path: '/our-services',
    element: <Services/>,
    
  },
  {
    path: '/subsidiaries',
    element: <Home />,
    
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
