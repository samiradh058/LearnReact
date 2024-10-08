import { useLoaderData } from "react-router-dom";
import { getProducts } from "../../services/apiCommercejs";
import ProductItem from "./ProductItem";

function Product() {
  const products = useLoaderData();

  return (
    <>
      <h1 className="block py-4 text-2xl font-bold">Available Items:</h1>
      <div className="flex flex-wrap justify-start">
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}

export async function loader() {
  const products = await getProducts();
  return products;
}

export default Product;
