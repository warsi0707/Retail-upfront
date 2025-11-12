import { useDispatch, useSelector } from "react-redux";
import { lazy, useEffect } from "react";
import { getOrdersThunk } from "../redux/features/productThunk";
const OrderCard = lazy(()=> import("../components/OrderCard"))


export default function YourOrder(){
    const dispatch = useDispatch()
    const orders = useSelector(state => state.product.orders)

    useEffect(()=>{
        dispatch(getOrdersThunk())
    },[dispatch])
    if(orders && orders.length <=0){
        return (
            <p className="min-h-screen w-full text-3xl pt-32 text-center">No bookings available</p>
        )
    }
    return (
        <div className="w-full min-h-screen  lg:px-32">
            <div className=" w-full min-h-screen p-10">
                <h1 className="text-3xl py-3">Your orders</h1>
               <div className="flex flex-col gap-5">
                {orders && orders.map((order)=>(
                    <OrderCard key={order._id} order={order}/>
                ))}
               </div>
            </div>
        </div>
    )
}