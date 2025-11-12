import { memo } from "react"
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { logoutUser } from "../redux/features/userSlice";


function Sidebar({handleClose}){
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const handleLogout =()=>{
        dispatch(logoutUser())
    }
    return (
        <div className="w-1/2 min-h-screen fixed space-y-10 top-0 items-end bg-slate-200 border-l border-gray-300 p-5">
            <button onClick={handleClose} className="text-3xl font-bold cursor-pointer"><RxCross1/></button>
            <div className="flex flex-col gap-3 text-2xl">
                <p>{user?.user?.fullName}</p>
                <p>{user?.user?.email}</p>
                <div className="flex flex-col gap-3">
                    {user?.isAuthenticated ==true ?
                    <>
                         <Link to={"/cart"}>Cart</Link>
                         <Link to={"/your-orders"}>Your orders</Link>
                          <button onClick={handleLogout} className="flex items-start cursor-pointer">Logout</button>
                    </>
                    :
                   <>
                    <Link to={"/signup"}>Signup</Link>
                    <Link to={"/signin"}>Signin</Link>
                    </>}
                  
                </div>
            </div>
        </div>
    )
}
export default memo(Sidebar)