import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { logoutUser } from "../redux/features/userSlice";

function ProfileCard() {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const handleSignout =()=>{
    dispatch(logoutUser())
  }
  return (
    <div className="bg-slate-200 border border-gray-300 rounded-b-md border-t-0 w-52 pt-10 absolute right-32 hidden lg:flex flex-col p-3">
        <div className="flex flex-col gap-3 text-xl">
            <p className="text-x">{user?.user?.fullName}</p>
            <p>{user?.user?.email}</p>
            {user?.user?.role === 'ADMIN' &&
            <Link to={"/admin-dashboard"}>Admin Dashboard</Link>}
            <div className="flex flex-col py-2 gap-3">
              {user?.isAuthenticated == true ?
              <button onClick={handleSignout} className="flex items-start cursor-pointer underline text-red-400">Logout</button>:
               <>
                 <Link to={"/signin"}>Signin</Link>
                <Link to={"/signup"}>Signup</Link>
               </>
                }
            </div>
        </div>
    </div>
  );
}
export default memo(ProfileCard);
