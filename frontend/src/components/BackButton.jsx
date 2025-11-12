import { memo } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

function BackButton({onclick}) {
  return (
    <button onClick={onclick} className="flex text-xl items-center cursor-pointer ">
      <p className="text-3xl">
        <IoIosArrowRoundBack />
      </p>
      <p>Back</p>
    </button>
  );
}
export default memo(BackButton)
