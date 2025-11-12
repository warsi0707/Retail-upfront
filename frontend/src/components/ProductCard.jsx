import { memo } from "react"
import { Link } from "react-router"
import { MdOutlineCurrencyRupee } from "react-icons/md";

function ProductCard({product}){
    return (
         <div className="h-[312px] w-72 bg-gray-secondry rounded-md">
            <img className="h-[150px] w-full rounded-t-md" src={`http://localhost:3000/${product.imageUrl}`} alt="" />
            <div className="p-4 flex flex-col h-1/2 justify-between ">
                <div className="flex justify-between text-black-primary items-center">
                    <h1 className="text-lg">{product?.title}</h1>
                    <p className="bg-gray-sec p-1  rounded-md">{product?.category?.split('')[0].toUpperCase() + product?.category?.split('').splice(1).join('')}</p>
                </div>
                <p className="text-xs text-slate-sec">{product?.description}</p>
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <div className="text-xl flex items-center"><p><MdOutlineCurrencyRupee/></p> <p>{product?.price}</p></div>
                    </div>
                    <Link to={`/product/${product?._id}`} className="bg-yellow-primary w-24 p-1 px-2 cursor-pointer text-sm rounded-md">View Details</Link>
                </div>
            </div>
        </div>
    )
}
export default memo(ProductCard)