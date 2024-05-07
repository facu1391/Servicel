import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from '../Pages/Home/Home';
import Equipo from '../Pages/Equipo/Equipo';
import Accesorios from '../Pages/Accesorios/Accesorios';
import Servicios from '../Pages/Servicios/Servicios';

import PageLayout from '../Layout/PageLayout';


const routes = createBrowserRouter([
    {
        path: "/",
        element:  <PageLayout> <Home /> </PageLayout> ,
    },
    {
        path: "/equipo",
        element: <PageLayout> <Equipo /> </PageLayout> , 
    },
    {
        path: "/accesorios",
        element: <PageLayout> <Accesorios /> </PageLayout> ,
    },
    {
        path: "/servicios",
        element: <PageLayout> <Servicios /> </PageLayout>, 
    },
]);

const Navigation = () => {
    return <RouterProvider router={routes} />;
  };
  
export default Navigation;