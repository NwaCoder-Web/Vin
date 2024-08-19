import React from 'react'
import "./ForgotPassWord.css"
import { useNavigate } from 'react-router-dom'
const ForgotPaaword = () => {
    const Nav = useNavigate()
  return (
    <div className='SignUpContainer'>
        <div className="signUpHolder">
            <div className="signUpText">
                <h2>Forgot Password</h2>
            </div>
            <div className="inputHolder">
               
                <input type="text"  placeholder='Email'/>
               
               <button onClick={()=>Nav("/ResetPassWord")}>Submit</button>
            </div>
        
        </div>
    </div>
  )
  }
  

export default ForgotPaaword