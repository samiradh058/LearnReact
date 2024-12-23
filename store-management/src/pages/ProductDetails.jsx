import { useProductId } from "../features/product/useProductId";
import { useNavigate, useParams } from "react-router-dom";

import { HiArrowLongLeft } from "react-icons/hi2";

import Spinner from "../ui/Spinner";
import { useRef, useState } from "react";
import AddingMoreForm from "../features/product/AddingMoreForm";
import { useUpdateBuyPaid } from "../features/product/useUpdateBuyPaid";

function ProductDetails() {
  const [isModalOpen, setIsModalOpen] = useState();
  const formRef = useRef(null);

  const { productId } = useParams();
  const { isPending, product, error } = useProductId(productId);

  const { updatePaid, updatingPaid } = useUpdateBuyPaid();

  const navigate = useNavigate();

  function handleOutsideClick(e) {
    if (formRef.current && !formRef.current.contains(e.target)) {
      setIsModalOpen(false);
    }
  }

  if (isModalOpen) {
    document.addEventListener("mousedown", handleOutsideClick);
  }

  if (error) throw new Error("Error fetching product details");
  if (isPending) return <Spinner />;

  function goBackToProduct() {
    navigate("/products");
  }

  const listSytyle = "font-bold text-[22px]";

  function handleAddMore() {
    setIsModalOpen(true);
  }

  const numOfDetails = product.details.length;

  return (
    <div className="flex flex-col relative">
      <button
        onClick={goBackToProduct}
        className="px-4 py-1  bg-green-400 text-[32px] m-2 rounded-xl w-fit"
      >
        <HiArrowLongLeft />
      </button>

      <div
        className={`mx-auto bg-stone-200 py-4 px-6 rounded-md text-xl ${
          isModalOpen ? "blur-sm" : ""
        }`}
      >
        <img
          className="bg-stone-800 w-[800px] h-[300px]"
          src={product.image}
          alt="Obtained from supabase"
        />
        <div className="flex flex-row mt-8 justify-between">
          <div className="space-y-2">
            <div>
              Name: <span className={listSytyle}>{product.name}</span>
            </div>
            <div className="flex">
              Quantity:{" "}
              <span className={`${listSytyle} flex`}>
                {product.details.reduce((ini, acc) => ini + acc.quantity, 0)} (
                {product.details.map((each, index) => (
                  <p key={index}>
                    {each.quantity}
                    {index < numOfDetails - 1 ? "+" : ""}
                  </p>
                ))}
                )
              </span>
            </div>
            <div className="flex">
              Price:{" "}
              <span className={`${listSytyle} flex`}>
                {product.details.reduce((ini, acc) => ini + acc.price, 0) /
                  numOfDetails}{" "}
                (
                {product.details.map((each, index) => (
                  <p key={index}>
                    {each.price}
                    {index < numOfDetails - 1 ? "," : ""}
                  </p>
                ))}
                )
              </span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex">
              Bought Date:{" "}
              <span className={`${listSytyle} flex flex-col`}>
                {product.details.map((each, index) => (
                  <p key={index}>
                    {each.boughtDate}
                    {index < numOfDetails - 1 ? "," : ""}
                  </p>
                ))}
              </span>
            </div>
            <div className="flex">
              Paid:{" "}
              <span className={`${listSytyle} flex`} disabled={updatingPaid}>
                {product.details.map((each, index) => (
                  <button
                    key={index}
                    onClick={() => updatePaid({ index, productId })}
                  >
                    {each.paid === true ? "✅" : "❌"}
                    {index < numOfDetails - 1 ? "," : ""}
                  </button>
                ))}
              </span>
            </div>
            {product.profit && (
              <div>
                Profit till now:{" "}
                <span
                  className={`${listSytyle}  p-1 rounded-lg ${
                    product.profit > 0 ? "bg-green-300" : "bg-red-300"
                  }`}
                >
                  Rs.{product.profit}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="mt-2 ">
            Description:{" "}
            <span className={listSytyle}>{product.description}</span>
          </div>
          <div>
            <button
              onClick={handleAddMore}
              className={`bg-green-400 p-2 border rounded-lg hover:bg-green-500 mt-[48px] ${
                product.profit > 0 ? "mt-4" : ""
              }`}
            >
              Add More
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2"
          ref={formRef}
        >
          <AddingMoreForm />
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
