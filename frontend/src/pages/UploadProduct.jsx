import { useState } from "react";
import ProductInput from "../components/ProductInput";
import { useDispatch } from "react-redux";
import {postProductsThunk } from "../redux/features/productThunk";
import { useNavigate } from "react-router";


export default function UploadProduct(){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    const [category, setCategory] = useState("")
    const [imageUrl, setImageUrl] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleUploadProduct = async(e)=>{
        e.preventDefault()
        const formData = new FormData()
        formData.append("title", title)
        formData.append("description", description)
        formData.append("price", price)
        formData.append("stock", stock)
        formData.append("category", category)
        formData.append('photo', imageUrl)
        await dispatch(postProductsThunk(formData)).unwrap()
        navigate("/admin-dashboard")
    }


    return (
        <div className="w-full min-h-screen flex items-center pb-32  px-32">
            <div className="bg-slate-100 flex flex-col gap-5 w-[700px] rounded-md mx-auto p-5">
                <h1 className="text-3xl">Post your product</h1>
                <form onSubmit={handleUploadProduct}  encType="multipart/form-data">
                <div className="flex flex-col gap-2">
                    <ProductInput values={title} onchange={(e)=>setTitle(e.target.value)} label={"Title"} placeholder={"Product title"} type={"text"}/>
                    <div className="flex justify-between gap-2">
                        <ProductInput values={price} onchange={(e)=> setPrice(e.target.value)} label={"Price"} placeholder={"Price"} type={'number'}/>
                        <ProductInput values={stock} onchange={(e)=> setStock(e.target.value)} label={"Stock"} placeholder={"stock"} type={'number'}/>
                        <ProductInput values={category} onchange={(e)=> setCategory(e.target.value)} label={"Category"} placeholder={"category"} type={'text'}/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="">Image</label>
                       <input onChange={(e)=> setImageUrl(e.target.files[0])} type="file" className="border rounded-md p-2"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="">Description</label>
                        <textarea value={description} onChange={(e)=> setDescription(e.target.value)} name=""  rows={4} className="border rounded-md p-2" placeholder="Write here..." id=""></textarea>
                    </div>
                    <button  type="submit"  className="bg-blue-500 text-white p-2 rounded-md text-xl cursor-pointer">Upload</button>
                </div>
                </form>
            </div>
        </div>
    )
}