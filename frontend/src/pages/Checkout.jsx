import { memo } from "react";
import CheckoutMoneyCard from "../components/CheckoutMoneyCard";
import CheckoutInput from "../components/CheckoutInput";
import BackButton from "../components/BackButton";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {postOrderThunk} from "../redux/features/productThunk"
import { useNavigate, useParams } from "react-router";
import { useCallback } from "react";


function Checkout(){
    const {id} = useParams()
    const navigate = useNavigate()
    const amount = useSelector(state=> state.product.cartItems.reduce((sum, item)=> sum + (item.totalAmmount),0))
    const totalItem = useSelector(state=> state.product.cartItems.length)
    const dispatch = useDispatch()
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [contact, setContact] = useState("")
    const [city, setCity] = useState("")
    const [pincode, setPincode] = useState("")
    const [address, setAddress] = useState("")

    const handleBooking =async()=>{
        await dispatch(postOrderThunk({id, fullName, email, contact, city, pincode, address, quantity: totalItem, totalPrice: amount})).unwrap()
        navigate("/your-orders")
    }
    const handleGoBack =()=>{
        window.history.back()
    }

    return (
         <div className="w-full min-h-screen py-10 px-5 lg:px-32">
                    <div className=" w-full flex flex-col gap-5 lg:min-h-screen lg:grid grid-cols-8">
                        <div className="w-full col-span-5 flex flex-col gap-5 lg:min-h-screen p-2">
                            <div className="flex flex-col gap-2">
                                <BackButton onclick={handleGoBack}/>
                                <h1 className="text-3xl">Shipping details</h1>
                            </div>
                            
                            <div className="flex gap-3">
                                <CheckoutInput values={fullName} onchange={(e)=> setFullName(e.target.value)} label={"Full Name"} placeholder={"jonhy depp"} type={'text'}/>
                                <CheckoutInput values={email} onchange={(e)=> setEmail(e.target.value)} label={"Email"} placeholder={"jonhy@gmail.com"} type={'email'}/>
                            </div>
                            <div className="flex gap-3">
                                <CheckoutInput values={contact} onchange={(e)=> setContact(e.target.value)} label={"Contact"} placeholder={"1234"} type={'number'}/>
                                <CheckoutInput values={city} onchange={(e)=> setCity(e.target.value)} label={"City"} placeholder={"Mumbai"} type={'text'}/>
                                <CheckoutInput values={pincode} onchange={(e)=> setPincode(e.target.value)} label={"Pincode"} placeholder={"40000"} type={'text'}/>
                            </div>
                            <div className="w-full flex flex-col gap-2">
                                <label htmlFor="">Full address</label>
                                <textarea value={address} onChange={(e)=> setAddress(e.target.value)} name="" className="border rounded-md p-2" placeholder="Enter your full adress or any other detail" rows={3} id=""></textarea>
                            </div>
                        </div>
                        <div className="w-full col-span-3 pt-20 lg:min-h-screen p-2">
                            <CheckoutMoneyCard onbooking={handleBooking} amount={amount} totalItem={totalItem}/>
                        </div>
                    </div>
                </div>
    )
}

export default memo(Checkout)