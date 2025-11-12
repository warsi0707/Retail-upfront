import { useState } from "react";
import { searchProductThunk } from "../redux/features/productThunk";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function Filter() {
  const dispatch = useDispatch()
  const [ query, setQuery] = useState("")
  const [inputs, setInputs] = useState([
    "shoes",
    "electronics",
    "clothing"
  ])

  const handleSearch = ()=>{
      dispatch(searchProductThunk({query}))
  }
  useEffect(()=>{
    dispatch(searchProductThunk({query}))
  },[dispatch, query])
  return (

    <div className="flex gap-2 justify-end lg:px-32 p-5">
      <p>Sort by</p>
      <select value={query} onChange={(e)=> setQuery(e.target.value)} className="w-28 border border-gray-4s00 rounded-sm cursor-pointer">
        <option value="">Category</option>
        {inputs && inputs.map((item, indx)=>(
          <option value={item} className="cursor-pointer">{item}</option>
        ))}
      </select>
    </div>
  );
}
