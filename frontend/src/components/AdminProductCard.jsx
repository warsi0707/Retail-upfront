import { memo, useEffect, useState } from "react"
import { Link } from "react-router"
import { LuTrash } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { toggleStatusThunk } from "../redux/features/productThunk";
import { useCallback } from "react";

function AdminProductCard({product,handleDeleteProduct}){
   


    return (
        <div className="w-full border h-24 rounded-md p-2 flex items-center justify-between">
             <img src={`http://localhost:3000/${product?.imageUrl}`} className="w-28 rounded-md h-full" alt="" />
             <p>{product.title}</p>
             <p className={`${product?.status ==="ACTIVE"? "text-green-primary": "text-red-500" }`}>{product?.status}</p>
             <p>{product.stock} in stock</p>
             <p>{product.price}</p>
             <div className="flex justify-center gap-1">
               
                <Link to={`/product/${product._id}`} className="border p-1 lg:p-2 lg:px-3 rounded-md text-green-primary">Dtails</Link>
                <Link to={""} className="border p-1 lg:p-2 lg:px-3 rounded-md ">Edit</Link>
                <button onClick={handleDeleteProduct} className="border cursor-pointer p-2 text-xl rounded-md text-red-500"><LuTrash/></button>
             </div>
        </div>
    )
}

export default memo(AdminProductCard)