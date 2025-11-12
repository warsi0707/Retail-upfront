import { memo } from "react"
import { Link } from "react-router"
import { LuTrash } from "react-icons/lu";

function AdminOrderCard(){
    return (
        <div className="w-full border h-24 rounded-md p-2 flex items-center justify-between">
             <img src="/image.png" className="w-28 rounded-md h-full" alt="" />
             <p>Title</p>
             <p>Status</p>
             <p>32 in stock</p>
             <p>2300</p>
             <div className="flex justify-center gap-1">
                <Link to={""} className="border p-1 lg:p-2 lg:px-3 rounded-md text-green-primary">Dtails</Link>
                <Link to={""} className="border p-1 lg:p-2 lg:px-3 rounded-md ">Edit</Link>
                <button className="border p-2 text-xl rounded-md text-red-500"><LuTrash/></button>
             </div>
        </div>
    )
}
export default memo(AdminOrderCard)