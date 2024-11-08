import { useSellDetails } from "../features/product/useSellDetails";
import Spinner from "../ui/Spinner";

function SellHistory() {
  const { isLoading, sells } = useSellDetails();

  if (isLoading) return <Spinner />;
  console.log(sells);

  return <div>It is sales history</div>;
}

export default SellHistory;
