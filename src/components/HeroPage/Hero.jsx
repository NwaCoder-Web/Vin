import React, { useEffect, useState } from 'react';
import './Hero.css'
import { useLocation } from 'react-router-dom';


const Hero = () => {
    const {pathname} =useLocation();
    const [url,setUrl]=useState("");

    useEffect(()=>{
     const title=pathname.slice(0).toUpperCase();
     setUrl(title)
    },[pathname])

  return (
    <div className='Hero-Body'>
        {url}
    </div>
  )
}

export default Hero