import { memo } from "react";

function LogInput({lable, placeholder, type, values, onchange}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="">{lable}</label>
      <input value={values} onChange={onchange} type={type} className="w-full border p-2 rounded-md" placeholder={placeholder} />
    </div>
  );
}
export default memo(LogInput)