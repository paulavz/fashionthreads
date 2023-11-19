import React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Tienda from "./Components/Tienda/Tienda";
import Carrito from "./Components/Carrito/Carrito";
import CarritoContextProvider from "./Context/CarritoContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Tienda />,
  },
  {
    path: "/carrito",
    element: <Carrito />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CarritoContextProvider>
      <RouterProvider router={router} />
    </CarritoContextProvider>
  </React.StrictMode>
);
