/*eslint-disable*/

import { NavLink } from "react-router-dom";
import { HiCloudArrowUp } from "react-icons/hi2";

function ProductItem({ product }) {
  // const {
  //   id: productId,
  //   name,
  //   quantity: product.details[0].quantity,
  //   price,
  //   description,
  //   boughtDate,
  //   image,
  //   paid,
  // } = product;
  const numOfDetails = product.details.length;

  return (
    <NavLink
      to={`${product.id}`}
      className={`grid grid-cols-[1fr_1.5fr_0.6fr_0.8fr_1fr_0.5fr]  gap-[2.4rem] items-center text-center px-4 py-4 my-2 hover:bg-stone-5  border rounded-xl ${
        numOfDetails === 0 ? "bg-stone-200 " : "bg-green-50 hover:bg-green-100"
      }`}
    >
      <div className="flex justify-center">
        <img
          className="h-[100px] w-[150px]"
          src={product.image}
          alt="Product image"
        />
      </div>
      <div>{product.name}</div>
      <div>
        <div>
          <>
            {product.details
              ? product.details.reduce((ini, acc) => ini + acc.quantity, 0)
              : "-"}
          </>
        </div>
        <div className={`justify-center ${numOfDetails > 3 ? "" : "flex"}`}>
          {numOfDetails > 1 && (
            <>
              ({" "}
              {product.details.map((each, index) => (
                <p key={index}>
                  {each.quantity}
                  {index < numOfDetails - 1 ? "+" : ""}
                </p>
              ))}
              )
            </>
          )}
        </div>
      </div>

      <div>
        <div>
          {numOfDetails > 0 ? (
            <>
              {(
                product.details.reduce((ini, acc) => ini + acc.price, 0) /
                numOfDetails
              ).toFixed(2)}
            </>
          ) : (
            "-"
          )}
        </div>
        <div className={`justify-center ${numOfDetails > 3 ? "" : "flex"}`}>
          {numOfDetails > 1 && (
            <>
              (
              {product.details && (
                <>
                  {product.details.map((each, index) => (
                    <p key={index}>
                      {each.price}
                      {index < numOfDetails - 1 ? "," : ""}
                    </p>
                  ))}
                </>
              )}
              )
            </>
          )}
        </div>
      </div>
      <div>
        {numOfDetails > 0 ? (
          <>
            {product.details.map((each, index) => (
              <p key={index}>
                {each.boughtDate}
                {index < numOfDetails - 1 ? "" : ""}
              </p>
            ))}
          </>
        ) : (
          "-"
        )}
      </div>
      {product.details && (
        <NavLink
          className="ml-6 bg-green-400 px-4 py-2 w-fit rounded-lg"
          to={`../sell/${product.id}`}
        >
          <HiCloudArrowUp />
        </NavLink>
      )}
    </NavLink>
  );
}

export default ProductItem;
