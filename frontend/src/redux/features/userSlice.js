import { createSlice } from "@reduxjs/toolkit";
import { signinThunk, signupThunk } from "./userThunk";
import toast from "react-hot-toast";

const userSlice = createSlice({
    name: "user",
    initialState: {
        token: localStorage.getItem('token') || null,
        user: JSON.parse(localStorage.getItem("user")) | {},
        userLoading : false,
        isAuthenticated: false,
        error: false
    },
    reducers: {
        verifyUser : (state, action)=>{
            const token = localStorage.getItem('token')
            const user = JSON.parse(localStorage.getItem("user"))
            if(token && token.length >0){
                state.isAuthenticated = true
                state.token = localStorage.getItem('token') || null
                state.user = user
            }
        },
        logoutUser: (state)=>{
            const token = localStorage.getItem('token')
            if(token && token.length >0){
                toast.success("Logout")
                localStorage.removeItem('token')
                localStorage.removeItem('user')
                state.token = null
                state.user= null
                state.isAuthenticated = false
            }
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(signinThunk.pending, (state)=>{
            state.userLoading = true
        })
        .addCase(signinThunk.rejected, (action)=>{
        })
        .addCase(signinThunk.fulfilled, (state, action)=>{
            state.token = action.payload.token
            localStorage.setItem("token", action.payload.token)
            localStorage.setItem("user", JSON.stringify(action.payload.user))
            state.isAuthenticated = true
            state.user = action.payload.user
        })
        .addCase(signupThunk.pending, (state)=>{
            state.userLoading = true
        })
        .addCase(signupThunk.rejected, (state)=>{
            state.error = true
            state.userLoading = false
        })
        .addCase(signupThunk.fulfilled, (state, action)=>{
            state.userLoading = false
            state.error = false
        })
    }
})

export const {verifyUser,logoutUser} = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;