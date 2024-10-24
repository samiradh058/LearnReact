import { useProductId } from "../features/product/useProductId";
import { useNavigate, useParams } from "react-router-dom";

import { HiArrowLongLeft } from "react-icons/hi2";

import Spinner from "../ui/Spinner";

function ProductDetails() {
  const { productId } = useParams();
  const { isPending, product, error } = useProductId(productId);
  const navigate = useNavigate();

  if (error) throw new Error("Error fetching product details");
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
          src={product.image}
          alt="Obtained from supabase"
        />
        <div className="flex flex-row mt-8 justify-between">
          <div className="space-y-2">
            <div>
              Name: <span className={listSytyle}>{product.name}</span>
            </div>
            <div>
              Quantity: <span className={listSytyle}>{product.quantity}</span>
            </div>
            <div>
              Price: <span className={listSytyle}>{product.price}</span>
            </div>
          </div>
          <div className="space-y-2">
            <div>
              Bought Date:{" "}
              <span className={listSytyle}>{product.boughtDate}</span>
            </div>
            <div>
              Paid:{" "}
              <span className={listSytyle}>
                {product.paid === true ? "✅" : "❌"}
              </span>
            </div>
            {product.profit && (
              <div>
                Profit till now:{" "}
                <span className={`${listSytyle} bg-green-300 p-1 rounded-lg`}>
                  Rs.{product.profit}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="mt-2">
          Description: <span className={listSytyle}>{product.description}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
