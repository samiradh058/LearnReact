/*eslint-disable*/

import { NavLink } from "react-router-dom";

function ProductItem({ product }) {
  const {
    id: productId,
    Name,
    Quantity,
    Price,
    Description,
    BoughtDate,
    Image,
    paid,
  } = product;

  return (
    <NavLink
      to={`${productId}`}
      className="grid  grid-cols-[1fr_1.5fr_0.6fr_0.8fr_1fr] gap-[2.4rem] items-center text-center px-4 py-4 hover:bg-stone-50"
    >
      <div>
        <img src={Image} alt="Product image" />
      </div>
      <div>{Name}</div>
      <div>{Quantity}</div>
      <div>{Price}</div>
      <div>{BoughtDate}</div>
    </NavLink>
  );
}

export default ProductItem;
