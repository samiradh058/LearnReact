import { Outlet } from "react-router-dom";

import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";

function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] bg-[#F5F5F5]">
      <Header />

      <div className="overflow-scroll">
        <main className="mx-[96px] sm:mx-[100px] md:mx-[150px] lg:mx-[200px]">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
