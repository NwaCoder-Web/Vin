import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "./SignUp.css";
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
import { signUp } from '../../Global/Slice';
import { toast } from 'react-toastify'
import { BeatLoader } from 'react-spinners'
import { z } from 'zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';


const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [seePassWord, setSeePassWord] = useState(true);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setloading] = useState(false)
    const [password, setPassword] = useState('');
    const users = useSelector((state) => state.cart.users);

    const user = z.object({
    email: z.string(),
    // .email({message: "must be a valid email"}),
    name: z.string(),
    // role: z.string(),
    password: z.string({message: "must be a string"}).min(5, {message: "must be more than 5 characters"}).regex(/[!@#$%^&*(),.?":{}|<>]/g, {message: "must contain special characters"})

    })
    const {register, handleSubmit, formState: {errors}, setError} = useForm({
        resolver: zodResolver(user),
    });
   
    const onSubmit = (data) =>{
       alert("SUCCESS");
       dispatch(signUp(data))
       setTimeout(() => {
            navigate("/login")
        }, 2000);
        
    }

    // const handleSignUp = () => {
    //     if (!fullName || !email || !password) {
    //         toast.error("Please Enter all fields")
           
    //     // }else if (checkEmail) {
    //     //     toast.error("Invalid email format")
            
    //     // }else if (checkPassword) {
    //     //     toast.error("Invalid password format")
    //     } else{
    //         setloading(true)
    //         const existingUserFind = users.find((e)=> e?.email == email)
    //         // console.log(existingUserFind)
    //         // console.log(existingUsers, "existingUsers")
    //         if (existingUserFind) {
    //             setTimeout(() => {
    //                 setloading(false)
    //                 toast.error("user exist already")
    //             }, 2000);
    //         } else {
    //             setTimeout(() => {
    //                 const rand = Math.floor(Math.random() *10000000000000)
    //                     // console.log(rand, "rand")
    //                 const ApiData={id: rand, fullName, email, password, carts: []}
    //                 dispatch(signUp(ApiData))
    //                 setloading(false)
    //                 toast.success("successfully joined us")
    //                 setTimeout(() => {
    //                     navigate("/login")
    //                 }, 2000);
    //             }, 2000);
    //         }
    //     }
    // };

    return (
        <div className='SignUpContainer'>
            <div className="signUpHolder" >
               
                <div className="signUpText">
                    <h2>Sign Up</h2>
                </div>
                <div className="inputHolder">
                    <input type="text" placeholder='FullName'  {...register("name")} />
                    <input type="text" placeholder='Email'  {...register("email")}/>
                    {errors.email && <span style={{color: "red", background: "white"}}>{errors.email.message}</span>}
                    <div className="passWordHolder">
                        <input type={seePassWord ? "password" : "text"} placeholder='Password'  {...register("password")}/>
                        {seePassWord ? <FaRegEye size={30} onClick={() => setSeePassWord(false)} /> : <FaRegEyeSlash onClick={() => setSeePassWord(true)} />}
                    </div>
                    {
                        loading ? 
                        <button type='submit' disabled style={{background: "#9285857b"}} >
                            <BeatLoader /></button>
                        :
                        <button onClick={handleSubmit(onSubmit)} >Sign Up</button>
                    }
            
                    {/* {error && <p className="error">{error}</p>} */}
                </div>
                <div className="alreadyHave">
                    Already have an account?{" "}
                    <span onClick={() => navigate("/login")}> Login </span>
                </div>
                
            </div>
        </div>
    );
};

export default SignUp;
