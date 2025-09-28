import { createBrowserRouter, Routes } from "react-router-dom";
import { Home } from '../Home';
import { Layout } from "../Layout";


const userlogged = true;

export const MyRouter = createBrowserRouter([
    {
        path:'/',
        element: <Layout />,
        children:[
            {
                index: true,
                element: <Home /> 
            },
            // {
            //     path:'/register',
            //     element: <Register />
            // }
        ]
    }
])

