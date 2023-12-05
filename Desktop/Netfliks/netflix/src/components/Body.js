import React, { useEffect } from 'react';
import Browse from './Browse';
import Login from './Login';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"

function Body() {
    const appRouter = createBrowserRouter([
        {
            path : "/",
            element : <Login/>
        },
        {
            path : "/browse",
            element : <Browse/>
        }
    ])



    return (
        <div className='relative    '>   
            <RouterProvider router={appRouter}>
                <Outlet/>
            </RouterProvider>
        </div>
    );
}

export default Body;