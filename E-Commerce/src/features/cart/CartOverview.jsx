import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="px- flex items-center justify-between bg-stone-800 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p>It show the Details</p>
      <Link to="/cart">Open Cart</Link>
    </div>
  );
}

export default CartOverview;
