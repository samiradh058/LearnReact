import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useProductId } from "./useProductId";

import { useAddMore } from "./useAddMore";

import Spinner from "../../ui/Spinner";
import { useForm } from "react-hook-form";

export default function AddingMoreForm() {
  const { productId } = useParams();
  const { isPending, product } = useProductId(productId);

  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      Item_Id: productId,
    },
  });

  const { isAdding, addMore } = useAddMore();

  if (isPending || isAdding) return <Spinner />;

  function onSubmit(data) {
    addMore(data);
    reset();
    navigate("/products");
  }

  const labelStyle = "text-2xl mr-10";
  const inputStyle =
    "px-2 text-xl border rounded-md h-10 border-stone-400 border-stone-400";

  return (
    <div className="bg-stone-100 mx-auto rounded-md mt-8 w-fit px-12 py-8 border border-stone-400 shadow-2xl">
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-2xl font-medium flex justify-center mb-10 pt-6">
          Add more &quot;{product.name}&quot;
        </h2>
        <div className="flex flex-col gap-4">
          <div>
            <label className={labelStyle} htmlFor="addedQuantity">
              Quantity:
            </label>
            <input
              className={`${inputStyle} w-[254px] ml-[14px]`}
              type="number"
              id="addedQuantity"
              {...register("added_Quantity", {})}
            />
          </div>

          <div>
            <label className={labelStyle} htmlFor="newPrice">
              New Price:
            </label>
            <input
              className={`${inputStyle} w-[254px]`}
              type="number"
              step="0.01"
              id="price"
              {...register("new_Price", {})}
            />
          </div>

          <div>
            <label className={labelStyle} htmlFor="boughtNew">
              Bought Date:
            </label>
            <input
              className={`${inputStyle} ml-[-28px] w-[255px]`}
              type="date"
              id="boughtNew"
              {...register("bought_New", {})}
            />
          </div>

          <div>
            <label className={labelStyle} htmlFor="newPaid">
              Money paid:
            </label>
            <input
              className="h-6 w-6"
              type="checkbox"
              {...register("new_Paid", {})}
            />
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button className="px-4 py-2 bg-green-400 rounded-md" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
