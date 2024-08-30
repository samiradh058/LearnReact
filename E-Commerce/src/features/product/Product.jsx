import { useLoaderData } from "react-router-dom";
import { getProducts } from "../../services/apiCommercejs";
import ProductItem from "./ProductItem";

function Product() {
  const products = useLoaderData();
  console.log(products);

  return (
    <ul className="flex gap-10">
      <h1>Hey</h1>
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const products = await getProducts();
  return products.data;
}

export default Product;
