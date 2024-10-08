import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
import DeleteItem from "../cart/DeleteItem";

function ProductItem({ product }) {
  const dispatch = useDispatch();

  const { id, image, name, description, quantityAvailable, unitPrice } =
    product;

  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      itemId: id,
      name,
      unitPrice,
      quantity: 1,
      totalPrice: unitPrice,
    };
    dispatch(addItem(newItem));
  }

  return (
    <div className="mr-10 mt-10 flex h-fit w-96 flex-col bg-red-100 px-2 py-2">
      {image ? (
        <img src={image} alt={name} className="h-80 w-96" />
      ) : (
        <p>No image available</p>
      )}
      <h1 className="mt-2 text-left indent-4 text-3xl font-bold">{name}</h1>
      <h3 className="font-medium">{description}</h3>
      <div className="mt-2 flex flex-grow justify-between">
        <h1 className="rounded bg-pink-300 p-1 text-xl font-bold">
          ${unitPrice}
        </h1>
        <h2 className="text-right">
          Available{" "}
          <span className="text-xl font-bold">{quantityAvailable}</span> pieces
        </h2>
      </div>
      {!isInCart && (
        <Button onClick={handleAddToCart} type="addToCart">
          Add to Cart
        </Button>
      )}

      {/* {isInCart && (
        <div>
          <UpdateItemQuantity itemId={id} currentQuantity={currentQuantity} />
          <DeleteItem itemId={id} />
        </div>
      )} */}
    </div>
  );
}

export default ProductItem;
