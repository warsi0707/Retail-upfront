import { Link } from "react-router";
import { GoPlus } from "react-icons/go";
import { useCallback, useEffect, useState } from "react";
import AdminProductCard from "../components/AdminProductCard";
import AdminOrderCard from "../components/AdminOrderCard";
import {useDispatch, useSelector} from "react-redux"
import { deleteProductThunk, fetchAllOrders, fetchProducts } from "../redux/features/productThunk";

export default function AdminDashboard(){
    const dispatch = useDispatch()
    const [dashboard, setDashboard] = useState(["Products", "Orders"])
    const [active, setActive] = useState("Products")
    const products = useSelector(state=> state.product.products)
    const orders = useSelector(state => state.product.orders)

    

    const handleDeleteProduct =(id)=>{
        dispatch(deleteProductThunk(id))
    }

    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch])
    useEffect(()=>{
         dispatch(fetchAllOrders())
    },[active,dispatch])
    return (
        <div className="w-full min-h-screen  ">
            <div className="w-full  lg:px-32 flex justify-between text-xl p-3 border-b border-gray-300">
                <h1>Admin Dashboard</h1>
                <div className="flex items-center gap-3">
                    <Link to={"/admin-upload-product"} className="flex items-center bg-purple-primary text-white p-1 px-4 rounded-md cursor-pointer">
                        <p className="text-2xl"><GoPlus/></p>
                        <p>Add product</p>
                    </Link>
                </div>
            </div>
            <div className="w-full min-h-screen grid grid-cols-10 lg:px-32">
                <div className="col-span-2 bg-gray-primary p-3s min-h-screen flex flex-col gap-3 border-r border-gray-400">
                    {dashboard.map((item)=>(
                         <button onClick={()=> setActive(item)} className={`${active === item?"bg-purple-secondry ": "bg-gray-primary" } w-full p-1 text-xl cursor-pointer border-`}>{item}</button>
                    ))}
                </div>
                <div className=" min-h-screen col-span-8">
                    {active === "Products" &&
                    <div className="w-full min-h-screen  p-2">
                        <div className="w-full flex justify-between p-2 px-8">
                            <p>Image</p>
                            <p>Title</p>
                            <p>Status</p>
                            <p>Inventory</p>
                            <p>Price</p>
                            <p>Action</p>
                        </div>
                        <div className="flex flex-col gap-2">
                           {products && products.map((product)=>(
                             <AdminProductCard key={product._id} product={product} handleDeleteProduct={()=>handleDeleteProduct(product._id)}/>
                           ))}
                        </div>
                    </div>}
                    {active ==="Orders" && <div className="w-full flex flex-col gap-2 min-h-screen  p-2">
                        <AdminOrderCard/>
                        <AdminOrderCard/>
                        <AdminOrderCard/>
                        <AdminOrderCard/>
                    </div>}
                </div>
            </div>

        </div>
    )
}