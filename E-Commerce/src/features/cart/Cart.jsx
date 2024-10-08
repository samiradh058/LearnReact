import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import Button from "../../ui/Button";

function Cart() {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div>
      <h1>The items in your cart are:</h1>
      <ul>
        {cart.map((item) => (
          <CartItem item={item} key={item.itemId} />
        ))}
      </ul>

      <div className="mt-4">
        <Button type="primary" to="/order/new">
          Order Items
        </Button>

        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear Cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
