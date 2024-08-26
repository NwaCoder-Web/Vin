import React, { useEffect, useState } from 'react'
import './Header.css'
import { FaCircleUser } from 'react-icons/fa6'
import Aos from 'aos';
import "aos/dist/aos.css"
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../Global/Slice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cart=useSelector((state)=>state.cart?.loggedInUser?.cart)
    const loggedInUser=useSelector((state)=>state.cart?.loggedInUser)
    const loggedIn=useSelector((state)=>state.cart?.loggedIn)
    // console.log(cart, "cart")
    const [showAuth,setShowAuth]=useState(false);
    useEffect(()=>{   
        Aos.init();
        if (!loggedIn) {
            navigate("/")
        }
    },[loggedIn])
  return (
    <div className='Header-Body'>
        <div className='logo'>
        <img src="https://files.oaiusercontent.com/file-HMjphBARLkOUvWlIp1EVjADG?se=2024-08-14T01%3A34%3A33Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D3e3aee8e-0914-4be6-909f-07c7a1180a00.webp&sig=vCkRCLD1c0%2Bl3nXG8WQIZ3yPPXxrv5MdUPr2XUCr%2Bqw%3D" alt="" />
            La curve La chaw
        </div>
        <div className='menu'>
            <nav><NavLink to={"/home"}>Menu</NavLink></nav>
            <nav><NavLink to={"/carts"}>Order({cart?.length})</NavLink></nav>
            <nav><NavLink to={"/categories"}>Vendors</NavLink></nav>
            {/* <nav><NavLink to={"/detail"}>Details</NavLink></nav> */}
        </div>
        <div className='auth' onClick={()=>setShowAuth(!showAuth)}>
            <FaCircleUser/>
            User
            {
                showAuth?<div className='auth-menu' data-aos="fade-down">
                    <button ><NavLink to={"/SignUp"}>{loggedInUser.fullName}</NavLink></button>
                    <button onClick={()=> dispatch(logOut())}>log out</button>
                </div>:null
            }
        </div>
    </div>
  )
}

export default Header