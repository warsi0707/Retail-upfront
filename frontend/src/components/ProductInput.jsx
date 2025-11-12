import { memo } from "react"

function ProdcutInput({label, type, placeholder,values,onchange}){
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor="">{label}</label>
            <input value={values} onChange={onchange} type={type} placeholder={placeholder} className="p-2 border rounded-md" />
        </div>
    )
}
export default memo(ProdcutInput)