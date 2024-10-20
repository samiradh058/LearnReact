/*eslint-disable*/

import { useProducts } from "./useProducts";

import Spinner from "../../ui/Spinner";
import ProductItem from "./ProductItem";

function ProductTable() {
  const { isPending, products } = useProducts();

  if (isPending || !products) return <Spinner />;

  return (
    <div className="border-stone-200 border-[1px] text-[1.4rem] rounded-md overflow-hidden mx-8 mt-4 ">
      <div className="bg-stone-100  items-center px-4 w-auto  grid grid-cols-[1fr_1.5fr_0.6fr_0.8fr_1fr_0.5fr] gap-[2.4rem] rounded-md py-2 text-center">
        <div>Image</div>
        <div>Name</div>
        <div>Quantity</div>
        <div>Unit Price</div>
        <div>Bought Date</div>
        <div>Sell</div>
      </div>

      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductTable;
