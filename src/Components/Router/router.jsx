import { createBrowserRouter, Routes } from "react-router-dom";
import { Home } from '../Home';
import { Login } from '../Login';
import { Layout } from "../Layout";
import { Register } from '../Register'

const userlogged = true;

export const MyRouter = createBrowserRouter([
    {
        path:'/',
        element: <Layout />,
        children:[
            {
                index: true,
                element: userlogged ? <Home /> : <Login />
            },
            // {
            //     path:'/register',
            //     element: <Register />
            // }
        ]
    }
])

