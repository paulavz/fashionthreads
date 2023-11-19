import {
  BrowserRouter as createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { CarritoProvider } from "./CarritoContext.jsx";
import Tienda from "./Components/Tienda/Tienda.jsx";
import Carrito from "./Components/Carrito/Carrito.jsx";

function App() {
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

  return (
    <CarritoProvider>
      <RouterProvider router={router} />
    </CarritoProvider>
  );
}

export default App;
