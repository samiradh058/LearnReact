/*eslint-disable*/

import Spinner from "../../ui/Spinner";
import { useProductId } from "./useProductId";
import { useUpdateSellPaid } from "./useUpdateSellPaid";

function SoldItem({ sell }) {
  const { product, isPending } = useProductId(sell.Item_Id);

  const { updateSell, isUpdatingSell } = useUpdateSellPaid();

  if (isPending) return <Spinner />;

  return (
    <div
      disabled={isUpdatingSell}
      className={`grid grid-cols-[1fr_0.8fr_0.6fr_1.2fr_1.2fr_3fr_0.5fr] gap-[2.4rem] items-center text-center px-4 py-4 my-2 hover:bg-stone-5  border rounded-xl bg-green-50 hover:bg-green-100`}
    >
      <div>{product.name}</div>
      <div>{sell.Quantity_Sold}</div>
      <div>{sell.S_Unit_Price}</div>

      <div>{sell.Sell_Date}</div>
      <div>{sell.Buyers_Name}</div>
      <div>{sell.Description}</div>
      <div>
        <button key={sell.id} onClick={() => updateSell(sell.id)}>
          {sell.Money_Received === true ? "✅" : "❌"}
        </button>
      </div>
    </div>
  );
}

export default SoldItem;
