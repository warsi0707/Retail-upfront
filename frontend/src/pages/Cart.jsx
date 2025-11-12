import { useSelector } from "react-redux";
import BackButton from "../components/BackButton";
import CartCard from "../components/CartCard";
import { BsCurrencyRupee } from "react-icons/bs";
import {Link} from "react-router"

export default function Cart(){
    const carts = useSelector(state=> state.product.cartItems)
    const amount = useSelector(state=> state.product.cartItems.reduce((sum, item)=> sum + (item.totalAmmount),0))
    const totalItem = useSelector(state=> state.product.cartItems.length)

    const handleGoback =()=>{
        window.history.back()
    }
    if(carts && carts.length <=0){
        return (
            <p className="w-full min-h-screen text-3xl flex justify-center mt-32">No cart available</p>
        )
    }
    return (
        <div className="w-full min-h-screen py-10 px-5 lg:px-32">
            <div className="pb-5">
                <BackButton onclick={handleGoback}/>                
            </div>
            <div className=" w-full flex flex-col-reverse gap-5 lg:min-h-screen lg:grid grid-cols-8">
                <div className="w-full col-span-5 flex flex-col gap-5 min-h-screen p-2">
                    {carts && carts.map((cart)=>(
                         <CartCard key={cart._id} cart={cart}/>
                    ))}
                </div>
                <div className="w-full col-span-3  lg:min-h-screen p-2">
                    <div className="border rounded-md py-10 border-gray-300 w-full flex flex-col gap-5 p-3">
                        <div className="flex justify-between items-center">
                            <p>Total items: </p>
                            <div className="flex items-center">
                                <p>{totalItem}</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <p>Discount </p>
                            <div className="flex items-center">
                                <p><BsCurrencyRupee/></p>
                                <p>0</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <p>Dilevery cost </p>
                            <div className="flex items-center">
                                <p><BsCurrencyRupee/></p>
                                <p>0</p>
                            </div>
                        </div>
                        <div className="border-t border-gray-500"></div>
                        <div className="flex justify-between text-2xl items-center">
                            <p>Total </p>
                            <div className="flex items-center">
                                <p><BsCurrencyRupee/></p>
                                <p>{amount}</p>
                            </div>
                        </div>
                        <Link to={`/checkout/${carts.map((cart)=> cart._id)}`} className="bg-green-primary p-2 text-xl text-center rounded-md cursor-pointer text-white">Go to checkout</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}