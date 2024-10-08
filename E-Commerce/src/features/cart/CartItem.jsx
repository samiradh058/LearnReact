import { useSelector } from "react-redux";
import UpdateItemQuantity from "./UpdateItemQuantity";
import DeleteItem from "./DeleteItem";
import { getCurrentQuantityById } from "./cartSlice";

function CartItem({ item }) {
  const { itemId, name, unitPrice, quantity } = item;

  const currentQuantity = useSelector(getCurrentQuantityById(itemId));

  return (
    <li className="mt-2 flex w-96 justify-between">
      <div>
        <p>
          {quantity}&times; {name}
        </p>
        <p>{unitPrice}</p>
      </div>

      <div className="flex">
        <UpdateItemQuantity itemId={itemId} currentQuantity={currentQuantity} />
        <DeleteItem itemId={itemId} />
      </div>
    </li>
  );
}

export default CartItem;
