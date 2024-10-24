/*eslint-disable*/

import { useProducts } from "./useProducts";

import Spinner from "../../ui/Spinner";
import ProductItem from "./ProductItem";

function ProductTable({ sortCriteria }) {
  const { isPending, products } = useProducts();

  if (isPending || !products) return <Spinner />;

  // Sort the products
  let criteria = sortCriteria ? sortCriteria : "name-asc";
  const [field, direction] = criteria?.split("-");
  const modifier = direction === "asc" ? 1 : -1;

  let sortProducts = products;

  if (field === "") {
    sortProducts = products.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (field === "name") {
    sortProducts = products.sort(
      (a, b) => a[field].localeCompare(b[field]) * modifier
    );
  }

  if (field === "quantity") {
    sortProducts = products.sort((a, b) => (a[field] - b[field]) * modifier);
  }

  if (field === "boughtDate") {
    sortProducts = products.sort(
      (a, b) => (new Date(a[field]) - new Date(b[field])) * modifier
    );
  }

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

      {sortProducts.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductTable;
