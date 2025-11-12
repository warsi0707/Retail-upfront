import { memo } from "react";

function CheckoutInput({label, type, placeholder, values, onchange}) {
  return (
    <div className="w-full flex gap-1 flex-col">
      <label htmlFor="">{label}</label>
      <input value={values} onChange={onchange} type={type} className="w-full border px-2 p-1 md:p-2 rounded-md"  placeholder={placeholder}/>
    </div>
  );
}

export default memo(CheckoutInput)
