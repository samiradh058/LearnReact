import Button from "../../ui/Button";

function CartOverview() {
  return (
    <div className="px- flex items-center justify-between bg-[#003366] py-4 text-sm text-stone-200 sm:px-6 md:text-base">
      <p>It show the Details</p>
      <Button to="/cart">Open Cart →</Button>
    </div>
  );
}

export default CartOverview;
