import { memo } from "react"
import { RxCross2 } from "react-icons/rx";
import { RiEqualFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { decreaseQnt, increaseQnt, removeCartItem } from "../redux/features/productSlice";

function CartCard({cart}){
    const dispatch = useDispatch()

    const handleIncreaseQnt =(id)=>{
        dispatch(increaseQnt(id))
    }
    const handleDecreaseQnt =(id)=>{
        dispatch(decreaseQnt(id))
    }
    const handleRemoveCart =(id)=>{
        dispatch(removeCartItem(id))
    }
    return (
        <div className="shadow-md border border-gray-200 w-full h-36 flex justify-between rounded-md p-2">
            <div className="h-full flex gap-2">
                <img src={`http://localhost:3000/${cart.imageUrl}`} className="h-full w-40 rounded-md" alt="" />
                <div className="flex flex-col justify-between py-2">
                    <div>
                        <h1>{cart?.title}</h1>
                        <p>{cart?.price}</p>
                    </div>
                    <div className="flex items-center border lg:w-32 justify-between rounded-md border-gray-500">
                        <button onClick={()=>handleDecreaseQnt(cart)} className="border-r hover:bg-yellow-primary border-gray-500 p-1 px-2 lg:px-4 cursor-pointer rounded-l-md">-</button>
                        <p className="px-2">{cart?.quantity}</p>
                        <button onClick={()=> handleIncreaseQnt(cart)} className="hover:bg-yellow-primary border-l border-gray-500 p-1 px-2 lg:px-4 cursor-pointer rounded-r-md">+</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-between items-end pb-3 lg:pb-5 lg:pr-5">
                <button onClick={()=> handleRemoveCart(cart)} title="Remove" className="border border-gray-400 lg:w-10 text-center flex justify-center cursor-pointer lg:text-xl rounded-md p-1 lg:p-2 "><RxCross2/></button>
                <div className="flex items-center">
                    <p>{cart?.price}</p>
                    <p><RxCross2/></p>
                    <p>{cart?.quantity}</p>
                    <p><RiEqualFill/></p>
                    <p>{cart?.totalAmmount}</p>
                </div>
            </div>
        </div>
    )
}
export default memo(CartCard)