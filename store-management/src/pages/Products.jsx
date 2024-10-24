import { useState } from "react";
import ProductTable from "../features/product/ProductTable";
import SortProducts from "../features/product/SortProducts";

function Products() {
  const [sortCriteria, setSortCriteria] = useState("");

  return (
    <div>
      <SortProducts setSortCriteria={setSortCriteria} />
      <ProductTable sortCriteria={sortCriteria} />
    </div>
  );
}

export default Products;
