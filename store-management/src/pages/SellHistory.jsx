import SoldItem from "../features/product/SoldItem";
import { useSellDetails } from "../features/product/useSellDetails";
import Counting from "../ui/Counting";
import Spinner from "../ui/Spinner";

function SellHistory() {
  const { isLoading, sells: sellsNotSorted } = useSellDetails();

  if (isLoading) return <Spinner />;

  let sells = sellsNotSorted.sort(
    (a, b) => new Date(b.Sell_Date) - new Date(a.Sell_Date)
  );

  return (
    <div className="text-[1.4rem] rounded-md overflow-hidden mx-8 mt-4">
      <div className="border-stone-200 border-[1px] ">
        <div className="bg-stone-100  items-center px-4 w-auto  grid grid-cols-[1fr_0.8fr_0.6fr_1.2fr_1.2fr_3fr_0.5fr] gap-[2.4rem] rounded-md py-2 text-center">
          <div>Name</div>
          <div>Quantity</div>
          <div>Unit Price</div>
          <div>Sold Date</div>
          <div>Buyers Name</div>
          <div>Description</div>
          <div>Money Received</div>
        </div>

        {sells.map((sell) => (
          <SoldItem sell={sell} key={sell.id} />
        ))}
      </div>
      <Counting count={sells.length} />
    </div>
  );
}

export default SellHistory;
