import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/home-page";
import RootLayout from "./pages/root-layout";
import ErrorPage from "./pages/error-page";
import ShopPage from "./pages/shop-page";
import Cartpage from "./pages/cart-page";
import { Provider } from "react-redux";
import store from "./redux/store";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Homepage />,
      },
      {
        path: "shop",
        element: <ShopPage />,
      },
      {
        path: "cart",
        element: <Cartpage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
