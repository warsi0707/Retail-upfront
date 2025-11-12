import {Link} from "react-router"
import { IoIosSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import NavButton from "./NavButton";
import { CiUser } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import {  lazy, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { verifyUser } from "../redux/features/userSlice";
import { searchProductThunk } from "../redux/features/productThunk";

const ProfileCard = lazy(()=> import("./ProfileCard"))
const Sidbar = lazy(()=> import("./Sidbar"))


export default function Navbar(){
    const dispatch = useDispatch()
    const [hamberg, setHamberg] = useState(false)
    const [profile, setProfile] = useState(false)
    const [ query, setQuery] = useState("")

    useEffect(()=>{
        dispatch(verifyUser())
    },[dispatch])
    const handleSearch = ()=>{
        dispatch(searchProductThunk({query}))
    }
    return (
        <>
            <div className="w-full p-5 border-b shadow-2xl border-gray-200 flex items-center justify-between md:px-32 ">
                <Link to={"/"} className="text-2xl">Retail-Upfront</Link>
                <div className="hidden lg:flex gap-5">
                    <div className="flex items-center border border-gray-200 rounded-md">
                        <input value={query} onChange={(e)=> setQuery(e.target.value)} type="text" className="outline-none p-2" placeholder="Search here" />
                        <button onClick={handleSearch} className="bg-yellow-primary p-4 rounded-r-md cursor-pointer"><IoIosSearch/></button>
                    </div>
                    <div className="flex items-centre  gap-3">
                        <NavButton links={"/cart"} icon={<CiShoppingCart/>} title={'Cart'}/>
                        <NavButton links={"/your-orders"} icon={<MdOutlineShoppingBag/>} title={'Orders'}/>
                        <button onClick={()=> setProfile(!profile)} className="flex flex-col justify-between items-center hover:text-blue-600 cursor-pointer">
                            <p className="text-3xl"><CiUser/></p>
                            <p className="text-sm text-gray-600 ">User</p>
                        </button>
                    </div>
                </div>
                <div className="lg:hidden">
                    {hamberg ? 
                    <button onClick={()=> setHamberg(!hamberg)} className="text-2xl cursor-pointer"><RxCross1/></button>:
                    <button onClick={()=> setHamberg(!hamberg)} className="text-2xl cursor-pointer"><FaBarsStaggered/></button>}
                </div>
            </div>
            { hamberg &&
            <div className="flex justify-end lg:hidden">
                <Sidbar handleClose={()=> setHamberg(!hamberg)}/>
            </div>
            }
            {profile && 
                <ProfileCard/>
            }
        </>
    )
}