import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6'
import "./ResetPassword.css"
const ResetPassword = () => {
        const Nav = useNavigate()
        const [seePassWord,setSeePassWord]=useState(true)
        const lookPassWord =()=>{
            setSeePassWord(false)
        }
      return (
        <div className='SignUpContainer'>
            <div className="signUpHolder">
                <div className="signUpText">
                    <h2>Reset Password</h2>
                </div>
                <div className="inputHolder">
                   
                <div className="passWordHolder">
              <input type={seePassWord?"password":"text"}  placeholder='Password'/>
              {
                  seePassWord?<FaRegEye  size={30} onClick={lookPassWord}/>:<FaRegEyeSlash  onClick={() => setSeePassWord(true)}/>
              }
              
              
              </div>
                   
                   <button onClick={()=>Nav("/login")}>Reset Password</button>
                </div>
            
            </div>
        </div>
      )
      }

export default ResetPassword