import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Home from "./ui/Home";
import Product, { loader as productLoader } from "./features/product/Product";
import Login from "./features/user/Login";
import Cart from "./features/cart/Cart";
import UserDetails from "./features/user/UserDetails";
import CreateOrder from "./features/order/CreateOrder";
import About from "./ui/About";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
        element: <Product />,
        loader: productLoader,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/me",
        element: <UserDetails />,
      },
      // {
      //   path: "/product/:productId",
      //   element: <ProductDetails />,
      // },

      {
        path: "/order/new",
        element: <CreateOrder />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
