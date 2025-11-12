import { createAsyncThunk } from "@reduxjs/toolkit";
import { BackendUrl } from "../../utils/BackendUrl";
import toast from "react-hot-toast";

export const fetchProducts = createAsyncThunk('fetch/products', async(_,{rejectWithValue})=>{
    try{
        const response = await fetch(`${BackendUrl}/product`)
        const result = await response.json()
        if(response.status == 200){
            return result
        }else{
            return rejectWithValue(result)
        }
    }catch(error){
        return rejectWithValue(error)
    }
})
export const postProductsThunk = createAsyncThunk("fetch/postProduct", async(formData,{rejectWithValue})=>{
    try{
        const response = await fetch(`${BackendUrl}/admin/product`,{
            method: 'POST',
            headers: {
                // 'Content-Type': "multipart/form-data",
                token: localStorage.getItem('token')
            },
            body: formData,
        })
        const result = await response.json()
        console.log(result)
        if(response.status == 200){
            toast.success(result.message)
            return result
        }else{
            toast.error(result.error)
            return rejectWithValue(result)
        }
    }catch(error){
        return rejectWithValue(error)
    }
})
export const deleteProductThunk = createAsyncThunk("fetch/deleteProduct", async(id, {rejectWithValue})=>{
     try{
        const response = await fetch(`${BackendUrl}/admin/product/${id}`,{
            method: 'DELETE',
            headers: {
                token: localStorage.getItem('token')
            }
        })
        const result = await response.json()
        if(response.status == 200){
            toast.success(result.message)
            return result
        }else{
            toast.error(result.error)
            return rejectWithValue(result)
        }
    }catch(error){
        return rejectWithValue(error)
    }
})
export const getProductByIdThunk = createAsyncThunk("fetch/getProductById", async(id, {rejectWithValue})=>{
     try{
        const response = await fetch(`${BackendUrl}/product/${id}`)
        const result = await response.json()
        if(response.status == 200){
            return result
        }else{
            return rejectWithValue(result)
        }
    }catch(error){
        return rejectWithValue(error)
    }
})
export const postOrderThunk = createAsyncThunk("fetch/postOrder", async({id,fullName, email, address, city, pincode, contact, totalPrice, quantity}, {rejectWithValue})=>{
    try{
        const response = await fetch(`${BackendUrl}/user/booking/${id}`,{
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
                token: localStorage.getItem('token')
            },
            body: JSON.stringify({fullName, email, address, city, pincode, contact, totalPrice, quantity})
        })
        const result = await response.json()
        if(response.status == 200){
            toast.success(result.message)
            return result
        }else{
            toast.error(result.error)
            return rejectWithValue(result)
        }
    }catch(error){
        return rejectWithValue(error)
    }
})
export const getOrdersThunk = createAsyncThunk("fetch/getOrder", async(_, {rejectWithValue})=>{
    try{
        const response = await fetch(`${BackendUrl}/user/bookings`,{
            method: 'GET',
            headers: {
                token: localStorage.getItem('token')
            },
        })
        const result = await response.json()
        if(response.status == 200){
            return result
        }else{
            toast.error(result.error)
            return rejectWithValue(result)
        }
    }catch(error){
        return rejectWithValue(error)
    }
})
export const searchProductThunk = createAsyncThunk("fetch/searchProducts", async({query}, {rejectWithValue})=>{
    try{
        const response = await fetch(`${BackendUrl}/product/search?query=${query}`)
        const result = await response.json()
        if(response.status == 200){
            return result
        }else{
            toast.error(result.error)
            return rejectWithValue(result)
        }
    }catch(error){
        return rejectWithValue(error)
    }
})
export const toggleStatusThunk = createAsyncThunk('fetch/togleStatus',async({id, status}) =>{
    try{
        const response = await fetch(`${BackendUrl}/admin/product/down/${id}`,{
            method: 'PUT', 
            headers: {
                "Content-Type" : "application/json",
                 token: localStorage.getItem('token')
            },
            body: JSON.stringify({status})
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
export const fetchAllOrders = createAsyncThunk('fetch/allOrders',async(_,{rejectWithValue}) =>{
    try{
        const response = await fetch(`${BackendUrl}/admin/orders`,{
            headers: {
                 token: localStorage.getItem('token')
            },
        })
        const result = await response.json()
        if(response.status ==200){
            return result;
        }else{
            toast.error(result.error)
            return rejectWithValue(result)
        }
    }catch(error){
        return rejectWithValue(error)
    }
})


