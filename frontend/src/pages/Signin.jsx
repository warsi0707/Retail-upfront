import { Link, useNavigate } from "react-router";
import LogInput from "../components/LogInput";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signinThunk } from "../redux/features/userThunk";

export default function Signin(){
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState(false)
    const navigate = useNavigate()

    const handleSignin =async()=>{
        await dispatch(signinThunk({email, password})).unwrap()
        navigate("/")
    }

    return (
        <div className="w-full min-h-screen  p-5 lg:px-32 py-10">
            <div className="w-full  min-h-screen flex">
                <div className="hidden md:flex w-full h-full p-5 pt-10">
                    <img src="/Login.png" className="w-full" alt="" />
                </div>
                <div className="w-full min-h-screen  p-5 pt-24 flex flex-col gap-5">
                    <h1 className="text-3xl">Login</h1>
                    <div className="flex flex-col gap-3">
                        <LogInput values={email} onchange={(e)=> setEmail(e.target.value)} lable={"Email"} placeholder={"user@gmail.com"} type={"email"}/>
                        <LogInput values={password} onchange={(e)=> setPassword(e.target.value)} lable={"Password"} placeholder={"password"} type={"password"}/>
                        <div className="flex">
                            <p>New user ?</p>
                            <Link to={"/signup"} className="hover:underline">Register</Link>
                        </div>
                        <button onClick={handleSignin} className="w-full bg-blue-500 text-white p-2 rounded-md text-xl cursor-pointer">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}