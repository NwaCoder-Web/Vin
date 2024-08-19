import React from 'react'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Layouts from './Layouts/Layouts'
import Cards from './components/Cards/Cards'
import Categories from './components/Categories/Categories'
import Category from './components/Categories/Category'
import Carts from './components/CartPage/Carts'
import Detail from './components/DetailPage/Detail'
import SignUp from './Auth/Auth/SignUp'
import Login from './Auth/Auth/Login'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckOut from './components/CheckOut/CheckOut'
// import CheckOut from './components/CheckOut/CheckOut'
// import Auth from "./Auth/Auth/ForgotPaaword"

const router=createBrowserRouter([
  {
    path: "/",
  element: <SignUp/>
  },
  {
    path: "login",
  element: <Login/>
  },
  {
    element:<Layouts/>,
    children:[
    
      // {
      //   path: "forgetpassword",
      // element: <Forgotpaaword/>
      // },
      {
        path:"home",
        element:<Cards/>
      },
      {
        path:"categories",
        element:<Categories/>
      },
      {
        path:"category/:category",
        element:<Category/>

      },
      {
        path:"carts",
        element:<Carts/>
      },
      {
        path: "detail",
        element: <Detail/>
      },
      {
        path: "checkout",
        element: <CheckOut/>
      }
    ]
  }
])

const App = () => {
  return (
    <>
    <RouterProvider router={router}/>
    <ToastContainer position="top-right" autoClose="1000" />
    </>
  )
}

export default App