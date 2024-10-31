import { useNavigate, useParams } from "react-router-dom";
import { useProductId } from "../features/product/useProductId";

import Spinner from "../ui/Spinner";
import { HiArrowLongLeft } from "react-icons/hi2";
import { useForm } from "react-hook-form";
import { useSellProduct } from "../features/product/useSellProduct";

function SellingPrice() {
  const { isSelling, createNewBuyer } = useSellProduct();

  const { productId } = useParams();
  const { isPending, product } = useProductId(productId);
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      Item_Id: productId,
    },
  });

  if (isPending) return <Spinner />;

  function goBackToProduct() {
    navigate("/products");
  }

  function onSubmit(data) {
    createNewBuyer({ ...data }, { onSuccess: () => reset() });
  }

  const labelStyle = "text-2xl mr-10";
  const inputStyle =
    "px-2 text-xl border rounded-md h-10 border-stone-400 border-stone-400";

  return (
    <>
      <button
        onClick={goBackToProduct}
        className="px-4 py-2 bg-green-400 text-[32px] m-2 rounded-xl w-fit"
      >
        <HiArrowLongLeft />
      </button>
      <div className="bg-stone-200 mx-auto rounded-md mt-8 w-fit px-12 py-8">
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-2xl font-medium flex justify-center mb-10 pt-6">
            {product.name}
          </h2>
          <div className="flex flex-col gap-4">
            <div>
              <label className={labelStyle} htmlFor="name">
                Item Id:
              </label>
              <input
                className={`${inputStyle} w-[312px]`}
                type="text"
                id="name"
                disabled
                defaultValue={productId}
                {...register("Item_Id", {})}
              />
            </div>

            <div>
              <label className={labelStyle} htmlFor="quantity">
                Quantity:
              </label>
              <input
                className={`${inputStyle} w-[254px]`}
                type="number"
                placeholder={product.quantity}
                id="quantity"
                disabled={isSelling}
                {...register("Quantity_Sold", {})}
                onBlur={(e) => {
                  let value = parseInt(e.target.value);
                  if (value > product.quantity) value = product.quantity;
                  else if (value < 0) value = 0;
                  e.target.value = value;
                }}
              />
            </div>

            <div>
              <label className={labelStyle} htmlFor="price">
                Price:
              </label>
              <input
                className={`${inputStyle} w-[298px]`}
                type="number"
                step="0.01"
                id="price"
                disabled={isSelling}
                placeholder={product.price}
                {...register("S_Unit_Price", {})}
                onBlur={(e) => {
                  let value = parseInt(e.target.value);
                  if (value < product.price) value = product.price;
                  e.target.value = value;
                }}
              />
            </div>

            <div>
              <label className={labelStyle} htmlFor="soldDate">
                Sold Date:
              </label>
              <input
                className={`${inputStyle} w-[240px]`}
                type="date"
                id="soldDate"
                disabled={isSelling}
                {...register("Sell_Date", {})}
              />
            </div>

            <div>
              <label className={labelStyle} htmlFor="description">
                Description:
              </label>
              <input
                type="text"
                className={`${inputStyle} w-[212px]`}
                id="description"
                disabled={isSelling}
                {...register("Description", {})}
              ></input>
            </div>

            <div>
              <label className={labelStyle} htmlFor="buyersName">
                Buyers name:
              </label>
              <input
                type="text"
                className={`${inputStyle} w-[212px]`}
                name="buyersName"
                disabled={isSelling}
                {...register("Buyers_Name", {})}
              ></input>
            </div>

            <div>
              <label className={labelStyle} htmlFor="received">
                Money received:
              </label>
              <input
                className="h-6 w-6"
                type="checkbox"
                disabled={isSelling}
                {...register("Money_Received", {})}
              />
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button
              className="px-4 py-2 bg-green-400 rounded-md"
              type="submit"
              disabled={isSelling}
            >
              Sell
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SellingPrice;
