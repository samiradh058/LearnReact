import { Cell, Pie, PieChart } from "recharts";
import { useProducts } from "../features/product/useProducts";
import { useSellDetails } from "../features/product/useSellDetails";
import Spinner from "../ui/Spinner";

function Dashboard() {
  const { isLoading, sells } = useSellDetails();
  const { isPending, products } = useProducts();

  if (isLoading || isPending) return <Spinner />;

  const pieData = products?.map((product) => ({
    name: product.name,
    profit: product.profit,
  }));

  const totalSales = sells?.reduce(
    (ini, acc) => ini + acc.S_Unit_Price * acc.Quantity_Sold,
    0
  );

  const moneyToReceive = sells?.filter((sell) => sell.Money_Received === false);

  const itemsToPay = products?.flatMap((product) =>
    product.details.filter((each) => each.paid === false)
  );
  console.log(itemsToPay);

  const costOfAvailableItems = products?.reduce(
    (ini, acc) =>
      ini + acc.details.reduce((ini, acc) => ini + acc.quantity * acc.price, 0),
    0
  );

  const COLORS = [
    "#FF6F61",
    "#FF5722",
    "#4CAF50",
    "#2196F3",
    "#9C27B0",
    "#E91E63",
    "#00BCD4",
    "#FF9800",
    "#673AB7",
    "#FF4081",
    "#3F51B5",
    "#009688",
    "#FFEB3B",
    "#03A9F4",
    "#8BC34A",
    "#FF4081",
    "#D32F2F",
    "#1976D2",
  ];

  return (
    <div className="h-max mt-8">
      <div className="flex flex-col p-4 pt-2 gap-8">
        <div className="flex w-full text-center gap-4">
          <div className="bg-blue-100 flex-1 p-4 text-left text-xl flex flex-col justify-between pt-6 pb-6 hover:bg-blue-200">
            <div>
              <div className="mb-4">
                Number of products:{" "}
                <span className="font-semibold text-2xl">
                  {products?.length}
                </span>
              </div>
              <div className="mb-4">
                Total Sales:{" "}
                <span className="font-semibold text-2xl">Rs. {totalSales}</span>
              </div>
            </div>
            <div className="">
              Total price of available items:{" "}
              <span className="font-semibold text-2xl">
                Rs. {costOfAvailableItems}
              </span>
            </div>
          </div>
          <div className="bg-green-100 flex-1 pt-4 h-max hover:bg-green-200">
            <h3 className="text-xl mb-4 italic">Profit on each item:</h3>
            <PieChart width={730} height={250}>
              <Pie
                data={pieData}
                dataKey="profit"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label={({ name, profit }) => `${name}: Rs. ${profit}`}
              >
                {pieData?.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="bg-yellow-100 p-4 text-center flex-1 text-xl hover:bg-yellow-200 ">
            <h3 className="italic">Remaining to receive:</h3>
            <div className="mt-8">
              {moneyToReceive.map((each) => (
                <div key={each.id} className="text-left mt-2">
                  <span className="font-semibold">{each.Buyers_Name}</span>{" "}
                  needs to pay Rs.{" "}
                  <span className="font-semibold">
                    {each.Quantity_Sold * each.S_Unit_Price}
                  </span>
                </div>
              ))}{" "}
            </div>
          </div>
          <div className="bg-red-100 p-4 text-center flex-1 hover:bg-red-200 text-xl ">
            <h3 className="italic">Remaining to pay:</h3>
            <div className="mt-8">
              {itemsToPay?.map((each) => {
                return (
                  <div key={each.id} className="text-left mt-2">
                    Need to pay Rs.
                    <span className="font-semibold">{each.totalCP}</span> for
                    item bought on{" "}
                    <span className="font-semibold">{each.boughtDate}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
