import { useForm } from "react-hook-form";
import { useCreateProduct } from "../features/product/useCreateProduct";
// import { useProducts } from "../features/product/useProducts";

// import Spinner from "../ui/Spinner";
// import { useState } from "react";

function CostPrice() {
  // const [selectedProduct, setSelectedProduct] = useState("");
  // const [customProductName, setCustomProductName] = useState("");

  // const { isPending, products } = useProducts();

  // const handleSelectChange = (event) => {
  //   const value = event.target.value;
  //   setSelectedProduct(value);
  //   setCustomProductName(""); // Clear custom input when a product is selected
  // };

  // const handleInputChange = (event) => {
  //   setCustomProductName(event.target.value);
  // };

  // const isCustomInput = !products?.some(
  //   (product) => product.name === selectedProduct
  // );

  const { isCreating, createNewProduct } = useCreateProduct();

  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues: {},
  });

  // if (isPending) {
  //   return <Spinner />;
  // }

  const { errors } = formState;

  function onSubmit(data) {
    const image = data.image[0];
    createNewProduct({ ...data, image }, { onSuccess: () => reset() });
  }

  const labelStyle = "text-2xl";
  const inputStyle = `px-2 text-xl border rounded-md h-10 border-stone-400 ${
    errors ? "text-sm placeholder-red-600" : "border-stone-400"
  }`;

  return (
    <div className="flex justify-center">
      <form
        className="bg-stone-200 w-fit p-6 rounded-lg shadow-lg mt-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="flex justify-center text-green-600 text-3xl pb-6 font-medium">
          Add a item
        </h2>

        {/* <div>
          <select value={selectedProduct} onChange={handleSelectChange}>
            <option value="">Select a product</option>
            {products?.map((product) => (
              <option key={product.name} value={product.name}>
                {product.name}
              </option>
            ))}
          </select>

          {isCustomInput && (
            <div>
              <input
                type="text"
                value={customProductName}
                onChange={handleInputChange}
                placeholder="Enter product name"
              />
            </div>
          )}
        </div> */}

        <div className="grid grid-cols-2 gap-4 w-[690px]">
          <label className={labelStyle} htmlFor="name">
            Name:
          </label>
          <input
            className={inputStyle}
            type="text"
            id="name"
            disabled={isCreating}
            placeholder={errors?.name ? errors.name.message : ""}
            {...register("name", {
              required: "This field is required",
            })}
          />

          <label className={labelStyle} htmlFor="quantity">
            Quantity Bought:
          </label>
          <input
            className={inputStyle}
            type="number"
            id="quantity"
            disabled={isCreating}
            placeholder={errors?.quantity ? errors.quantity.message : ""}
            {...register("quantity", {
              required: "This field is required",
            })}
          />

          <label className={labelStyle} htmlFor="price">
            Bought Price (Unit):
          </label>
          <input
            className={inputStyle}
            type="number"
            step="0.01"
            id="price"
            disabled={isCreating}
            placeholder={errors?.price ? errors.price.message : ""}
            {...register("price", {
              required: "This field is required",
            })}
          />

          <label className={labelStyle} htmlFor="boughtDate">
            Bought Date:
          </label>
          <input
            className={inputStyle}
            type="date"
            id="boughtDate"
            disabled={isCreating}
            placeholder={errors?.date ? errors.date.message : ""}
            {...register("boughtDate", {
              required: "This field is required",
            })}
          />

          <label className={labelStyle} htmlFor="description">
            Description:
          </label>
          <textarea
            className={inputStyle}
            rows={2}
            placeholder={errors?.description ? errors.description.message : ""}
            id="description"
            disabled={isCreating}
            {...register("description", {})}
          />

          <label className={labelStyle} htmlFor="image">
            Image:
          </label>
          <input
            className={`border-none ${inputStyle}`}
            type="file"
            id="image"
            disabled={isCreating}
            {...register("image", {
              required: "This field is required",
            })}
          />

          <label className={labelStyle} htmlFor="paid">
            Paid:
          </label>
          <input
            className={`ml-[-290px] flex justify-start ${inputStyle}`}
            type="checkbox"
            id="paid"
            disabled={isCreating}
            {...register("paid", {})}
          />
        </div>
        <div className="flex justify-end">
          <button
            className="bg-green-400 px-4 py-2 rounded-lg mt-10"
            type="submit"
            disabled={isCreating}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default CostPrice;
