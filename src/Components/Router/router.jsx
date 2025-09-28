import { createBrowserRouter, Routes } from "react-router-dom";
import { Home } from '../Home';
import { Layout } from "../Layout";
import { PdfVisualizer } from "../PdfVisualizer";


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
            {
                path:'Carta',
                element: <PdfVisualizer />
            }
            // {
            //     path:'/register',
            //     element: <Register />
            // }
        ]
    }
])

