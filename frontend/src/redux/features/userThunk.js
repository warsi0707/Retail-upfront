import { createAsyncThunk } from "@reduxjs/toolkit";
import { BackendUrl } from "../../utils/BackendUrl";
import toast from "react-hot-toast";

export const signinThunk = createAsyncThunk("fetch/signin", async({email, password}, {rejectWithValue})=>{
    try{
        const response = await fetch(`${BackendUrl}/auth/signin`,{
            method: 'POST',
            headers: {
                 "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password})
        })
        const result = await response.json()
        if(response.status ==200){
            toast.success(result.message)
            return result;
        }else{
            toast.error(result.error)
            return rejectWithValue(result)
        }
    }catch(error){
        return rejectWithValue(error)
    }
})
export const signupThunk = createAsyncThunk("fetch/signup", async({fullName,email, password}, {rejectWithValue})=>{
    try{
        const response = await fetch(`${BackendUrl}/auth/signup`,{
            method: 'POST', 
            headers: {
                 "Content-Type": "application/json"
            },
            body: JSON.stringify({fullName,email, password})
        })
        const result = await response.json()
        if(response.status ==200){
            toast.success(result.message)
            return result;
        }else{
            toast.error(result.error)
            return rejectWithValue(result)
        }
    }catch(error){
        return rejectWithValue(error)
    }
})
