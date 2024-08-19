import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "./Login.css";
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
import { login } from '../../Global/Slice';
import { toast } from 'react-toastify'
import { BeatLoader } from 'react-spinners'
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [seePassWord, setSeePassWord] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const { loading, error } = useSelector((state) => state.cart);
    const users = useSelector((state) => state.cart.users);
    const [loading, setloading] = useState(false)

    const user = z.object({
        email: z.string().email(),
        password: z.string({message: "must be a string"}).min(5, {message: "must be more than 5 characters"}).regex(/[!@#$%^&*(),.?":{}|<>]/g, {message: "must contain special characters"}),
    });

    const {register, handleSubmit, formState: {errors}, setError} = useForm({
        resolver: zodResolver(user),
    });

    const onSubmit = (data) =>{
        alert("SUCCESS");
        dispatch(login(data))
        setTimeout(() => {
             navigate("/home")
         }, 2000);
         
     }

    const handleLogin = () => {
        if (!email || !password) {
            toast.error("Please fill all fields")
      } else{
        setloading(true)
            // const ApiData={email, password: password}
            setloading(true)
            // famousfotune123@gmail.com
            const existingUserFind = users.find((e)=> e?.email == email )
            console.log(existingUserFind)
            // console.log(existingUsers, "existingUsers")
            if (!existingUserFind) {
                setTimeout(() => {
                    setloading(false)
                    toast.error("user doesn't exist")
                }, 2000);
            } else {
                
                if (existingUserFind.password !== password) {
                    setTimeout(() => {
                        setloading(false)
                        toast.error("wrong password")
                    }, 2000);
                } else {
                    setTimeout(() => {
                        toast.success(`successfully logged in ${existingUserFind.fullName}`)
                        dispatch(login(existingUserFind))
                        setloading(false)
                        setTimeout(() => {
                            navigate(`/home`)
                            // Nav(`/home/${existingUserFind.id}`)
                        }, 2000);
                    }, 2000);
                }
            }
        }
    };

    return (
        <div className='SignUpContainer'>
            <div className="signUpHolder">
                <div className="signUpText">
                    <h2>Login</h2>
                </div>
                <div className="inputHolder">
                    <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} {...register("email")} />
                    {errors.email && <span style={{color: "red", background: "white"}}>{errors.email.message}</span>}
                    <div className="passWordHolder">
                        <input type={seePassWord ? "password" : "text"} placeholder='Password'   {...register("password")}/>
                        {errors.password && <span style={{color: "red", background: "white"}}>{errors.password.message}</span>}
                        {seePassWord ? <FaRegEye size={30} onClick={() => setSeePassWord(false)} /> : <FaRegEyeSlash onClick={() => setSeePassWord(true)} />}
                    </div>
                    {/* <button onClick={handleLogin} >Login</button> */}
                    {
                        loading ? 
                        <button type='submit' disabled style={{background: "#9285857b"}} >
                            <BeatLoader /></button>
                        :
                        <button onClick={handleSubmit(onSubmit)} >Login</button>
                    }
                    {/* {error && <p className="error">{error}</p>} */}
                </div>
                <div className="alreadyHave">
                    <span onClick={() => navigate("/forgotPassWord")}> Forgot Password </span>
                </div>
            </div>
        </div>
    );
};

export default Login;
