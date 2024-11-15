import { useState } from "react";
import ProductTable from "../features/product/ProductTable";
import SortProducts from "../features/product/SortProducts";
import FilterProduct from "../features/product/FilterProduct";
import Search from "../ui/Search";

function Products() {
  const [sortCriteria, setSortCriteria] = useState("");

  return (
    <div className="p-2">
      <div className="flex justify-between">
        <div className="flex justify-end mt-4">
          <FilterProduct />
          <SortProducts setSortCriteria={setSortCriteria} />
        </div>
        <div className="flex justify-end mr-6 mt-4">
          <Search />
        </div>
      </div>

      <ProductTable sortCriteria={sortCriteria} />
    </div>
  );
}

export default Products;
