import { memo } from "react";
import { BsCurrencyRupee } from "react-icons/bs";

function CheckoutMoneyCard({amount, totalItem, onbooking}) {
  return (
    <div className="border rounded-md py-10 border-gray-300 w-full flex flex-col gap-5 p-3">
      <div className="flex justify-between items-center">
        <p>Total items: </p>
        <div className="flex items-center">
          <p>{totalItem}</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p>Discount </p>
        <div className="flex items-center">
          <p>
            <BsCurrencyRupee />
          </p>
          <p>0</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p>Dilevery cost </p>
        <div className="flex items-center">
          <p>
            <BsCurrencyRupee />
          </p>
          <p>0</p>
        </div>
      </div>
      <div className="border-t border-gray-500"></div>
      <div className="flex justify-between text-2xl items-center">
        <p>Total </p>
        <div className="flex items-center">
          <p>
            <BsCurrencyRupee />
          </p>
          <p>{amount}</p>
        </div>
      </div>
      <button onClick={onbooking} className="bg-green-primary p-2 text-xl rounded-md cursor-pointer text-white">Place order</button>
    </div>
  );
}

export default memo(CheckoutMoneyCard);
