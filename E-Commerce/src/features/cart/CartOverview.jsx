import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="px- flex items-center justify-between bg-[#003366] py-4 text-sm text-stone-200 sm:px-6 md:text-base">
      <p>It show the Details</p>
      <Link
        to="/cart"
        className="rounded-lg bg-red-400 px-4 py-2 text-[24px] font-semibold text-white hover:bg-red-300 hover:text-[#003366]"
      >
        Open Cart →
      </Link>
    </div>
  );
}

export default CartOverview;
