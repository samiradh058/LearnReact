/*eslint-disable*/

import { useProductId } from "../features/product/useProductId";
import { useNavigate, useParams } from "react-router-dom";

import { HiArrowLongLeft } from "react-icons/hi2";

import Spinner from "../ui/Spiner";

function ProductDetails() {
  const { productId } = useParams();
  const { isPending, product, error } = useProductId(productId);
  const navigate = useNavigate();

  if (error) return <Spinner />;
  if (isPending) return <Spinner />;

  function goBackToProduct() {
    navigate("/products");
  }

  const listSytyle = "font-bold text-[22px]";

  console.log(product);

  return (
    <div className="flex flex-col">
      <button
        onClick={goBackToProduct}
        className="px-4 py-1  bg-green-400 text-[32px] m-2 rounded-xl w-fit"
      >
        <HiArrowLongLeft />
      </button>

      <div className="mx-auto bg-stone-200 py-4 px-6 rounded-md text-xl">
        <img
          className="bg-stone-800 w-[800px] h-[300px]"
          src=""
          alt="Obtained from supabase"
        />
        <div className="flex flex-row mt-8 justify-between">
          <div className="space-y-2">
            <div>
              Name: <span className={listSytyle}>{product.Name}</span>
            </div>
            <div>
              Quantity: <span className={listSytyle}>{product.Quantity}</span>
            </div>
            <div>
              Price: <span className={listSytyle}>{product.Price}</span>
            </div>
          </div>
          <div className="space-y-2">
            <div>
              Bought Date:{" "}
              <span className={listSytyle}>{product.BoughtDate}</span>
            </div>
            <div>
              Paid:{" "}
              <span className={listSytyle}>
                {product.Paid === true ? "✅" : "❌"}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-2">
          Description: <span className={listSytyle}>{product.Description}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
