/*eslint-disable*/

import { NavLink } from "react-router-dom";

function ProductItem({ product }) {
  const {
    id: productId,
    name,
    quantity,
    price,
    description,
    boughtDate,
    image,
    paid,
  } = product;

  return (
    <NavLink
      to={`${productId}`}
      className="grid grid-cols-[1fr_1.5fr_0.6fr_0.8fr_1fr] gap-[2.4rem] items-center text-center px-4 py-4 hover:bg-stone-50"
    >
      <div className="flex justify-center">
        <img className="h-[100px] w-[150px]" src={image} alt="Product image" />
      </div>
      <div>{name}</div>
      <div>{quantity}</div>
      <div>{price}</div>
      <div>{boughtDate}</div>
    </NavLink>
  );
}

export default ProductItem;
