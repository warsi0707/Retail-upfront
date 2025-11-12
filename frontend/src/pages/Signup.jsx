import { Link, useNavigate } from "react-router";
import LogInput from "../components/LogInput";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupThunk } from "../redux/features/userThunk";

export default function Signup(){
    const dispatch = useDispatch()
    const loading = useSelector(state => state.user.userLoading)
    const navigate = useNavigate()
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState(false)

    const handleSignup =async()=>{
        await dispatch(signupThunk({fullName, email, password})).unwrap()
        navigate("/signin")
    }

    return (
         <div className="w-full min-h-screen  p-5 lg:px-32 py-10">
            <div className="w-full  min-h-screen flex">
                <div className="hidden md:flex w-full h-full p-5 pt-10">
                    <img src="/Login.png" className="w-full" alt="" />
                </div>
                <div className="w-full min-h-screen  p-5 pt-24 flex flex-col gap-5">
                    <h1 className="text-3xl">Register as new user</h1>
                    <div className="flex flex-col gap-3">
                        <LogInput values={fullName} onchange={(e)=> setFullName(e.target.value)} lable={"Full Name"} placeholder={"Jonh"} type={"text"}/>
                        <LogInput values={email} onchange={(e)=> setEmail(e.target.value)} lable={"Email"} placeholder={"Jonh@gmail.com"} type={"email"}/>
                        <LogInput values={password} onchange={(e)=> setPassword(e.target.value)} lable={"Password"} placeholder={"password"} type={"password"}/>
                        <div className="flex">
                            <p>Already have an account ?</p>
                            <Link to={"/signup"} className="hover:underline">Login</Link>
                        </div>
                        <button onClick={handleSignup} className="w-full bg-blue-500 text-white p-2 rounded-md text-xl cursor-pointer">{loading ? "Loading...": "Register"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}