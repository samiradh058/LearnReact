/*eslint-disable*/

import { useProductId } from "../features/product/useProductId";
import { useParams } from "react-router-dom";

import Spinner from "../ui/Spiner";

function ProductDetails() {
  const { productId } = useParams();
  const { isPending, product, error } = useProductId(productId);
  if (error) return <Spinner />;
  if (isPending) return <Spinner />;

  return (
    <div>
      <div>&larr;</div>
      <div>
        It is used to display the detailed description of the product{" "}
        {product.Name}
      </div>
    </div>
  );
}

export default ProductDetails;
