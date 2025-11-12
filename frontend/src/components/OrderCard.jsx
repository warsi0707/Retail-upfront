import { memo } from "react";

function OrderCard({ order }) {
  return (
    <div className="h-full flex justify-between items-center pr-10 gap-2 w-full border rounded-md p-2">
      <div className="flex items-center gap-2">
        <img src={`http://localhost:3000/${order.productId.imageUrl}`} className="h-32 w-40 rounded-md" alt="" />
         <div className="flex flex-col gap-2">
            <h1>{order?.productId.title}</h1>
            <p>Price: {order?.totalPrice}</p>
          </div>
      </div>
      <p>{order?.address}</p>
      <p>{order?.status}</p>
      <button>Cancel</button>
    </div>
  );
}
export default memo(OrderCard);
