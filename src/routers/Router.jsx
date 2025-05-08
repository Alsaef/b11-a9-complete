import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Root from "../Root/Root";
import App from "../App";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import CompanyDetails from "../Pages/JobDetils";
import NotFound from "../Pages/NotFound";
import Profile from "../Pages/Profile";
import UpdateProfile from "../Pages/UpdateProfile";
import PrivateRoute from "../Private/PrivateRoute";
import ForgatePassword from "../Pages/ForgatePassword";
import Details from '../Pages/Detils';
import About from "../Pages/About";
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<App></App>
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
            path:'/my-profile',
            element:<PrivateRoute><Profile></Profile></PrivateRoute>
        },
        {
            path:'/update-profile',
            element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
        },
        {
            path:'/company/:id',
            element:<PrivateRoute><CompanyDetails></CompanyDetails></PrivateRoute>,
            loader:()=>fetch('/jobdata.json')
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/Forgot-password',
            element:<ForgatePassword></ForgatePassword>
        },
      ]
    },
    {
        path:'*',
        element:<NotFound></NotFound>
    }
  ]);

