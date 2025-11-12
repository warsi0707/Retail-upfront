import { useDispatch, useSelector } from "react-redux";
import Filter from "../components/Filter";
import { lazy, useEffect } from "react";
import { fetchProducts } from "../redux/features/productThunk";
const ProductCard = lazy(()=> import("../components/ProductCard"))

export default function Home(){
    const dispatch = useDispatch()
    const products = useSelector(state=> state.product.products)

    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch])

    if(products.length <=0){
        return (
            <p>Product not found</p>
        )
    }
    return (
        <>
            <Filter/>
            <div className="w-full px-10 lg:px-32 flex flex-wrap py-10 justify-center md:justify-between gap-10  min-h-screen mx-auto">
                {products && products.map((product)=>(
                    <ProductCard key={product._id} product={product}/>
                ))}
            </div>
        </>
    )
}