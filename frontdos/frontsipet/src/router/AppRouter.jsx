import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import LoginPage from "../components/auth/LoginPage"
const router = createBrowserRouter([
    {
        path:"/",
        element:<LoginPage/>
    }
]);
const AppRouter = ()=>{
    return <RouterProvider router={router}/>;
};
export default AppRouter;