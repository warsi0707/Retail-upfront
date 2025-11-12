import ProductInput from "../components/ProductInput";

export default function UpdateProduct() {
  return (
    <div className="w-full min-h-screen flex items-center pb-32  px-32">
      <div className="bg-slate-100 flex flex-col gap-5 w-[700px] rounded-md mx-auto p-5">
        <h1 className="text-3xl">Update your product</h1>
        <div className="flex flex-col gap-2">
          <ProductInput
            label={"Title"}
            placeholder={"Product title"}
            type={"text"}
          />
          <div className="flex justify-between gap-2">
            <ProductInput
              label={"Price"}
              placeholder={"Price"}
              type={"number"}
            />
            <ProductInput
              label={"Stock"}
              placeholder={"stock"}
              type={"number"}
            />
            <ProductInput
              label={"Category"}
              placeholder={"category"}
              type={"text"}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Image</label>
            <input type="file" className="border rounded-md p-2" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Description</label>
            <textarea
              name=""
              rows={4}
              className="border rounded-md p-2"
              placeholder="Write here..."
              id=""
            ></textarea>
          </div>
          <button className="bg-blue-500 text-white p-2 rounded-md text-xl cursor-pointer">
            Make changes
          </button>
        </div>
      </div>
    </div>
  );
}
