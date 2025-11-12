import { useCallback, useEffect } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { MdCurrencyRupee } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProductByIdThunk } from "../redux/features/productThunk";
import BackButton from "../components/BackButton";
import { addToCart } from "../redux/features/productSlice";

export default function ProductDtail() {
    const {id} = useParams()
    const dispatch = useDispatch()
    const product = useSelector(state => state.product.productDetail)
    const carts = useSelector(state=> state.product.cartItems)

    const handleBack =useCallback(()=>{
        window.history.back()
    },[])
    const toCart = ()=>{
      dispatch(addToCart({product}))
    }

    useEffect(()=>{
        dispatch(getProductByIdThunk(id))
    },[id, dispatch])
  return (
    <div className="w-full min-h-screen px-10  lg:px-32">
      <div className="lg:px-32 space-y-5 w-full min-h-screen py-5">
        <BackButton onclick={handleBack}/>
        <div className="w-full  min-h-screen grid  ">
          <div className="w-full flex flex-col gap-5 col-span-4   min-h-screen">
            <img src={`http://localhost:3000/${product?.imageUrl}`} className="w-full h-96 rounded-md " alt="" />
            <div className="space-y-2 p-2">
              <div className="flex items-start justify-between">
                <h1 className="text-2xl">{product?.title}</h1>
                <div className="flex gap-2">
                  <div className="flex items-center text-2xl ">
                    <p>
                      <MdCurrencyRupee />
                    </p>
                    <p>{product?.price}</p>
                  </div>
                  <button onClick={toCart} className="bg-yellow-primary p-1.5 px-4 cursor-pointer text-xl rounded-md"> Add to cart </button>
                </div>
              </div>
              <p>{product?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
