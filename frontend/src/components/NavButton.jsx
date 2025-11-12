import { memo } from "react";
import { Link } from "react-router";

function NavButton({icon, title, links}){
    return (
        <Link to={links} className="flex flex-col justify-between items-center hover:text-blue-600">
            <p className="text-3xl">{icon}</p>
            <p className="text-sm text-gray-600 ">{title}</p>
        </Link>
    )
}
export default memo(NavButton)