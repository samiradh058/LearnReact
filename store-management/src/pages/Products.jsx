import { useState } from "react";
import ProductTable from "../features/product/ProductTable";
import SortProducts from "../features/product/SortProducts";
import FilterProduct from "../features/product/FilterProduct";

function Products() {
  const [sortCriteria, setSortCriteria] = useState("");

  return (
    <div>
      <div className="flex justify-end mt-4">
        <FilterProduct />
        <SortProducts setSortCriteria={setSortCriteria} />
      </div>

      <ProductTable sortCriteria={sortCriteria} />
    </div>
  );
}

export default Products;
