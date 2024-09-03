import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../src/styles/normalize.css";
import "../src/styles/sass.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PhonePage from "./pages/PhonePage.jsx";
import LaptopPage from "./pages/LaptopsPage.jsx";
import ComputerPage from "./pages/ComputersPage.jsx";
import AccessoriesPage from "./pages/AccessoriesPage.jsx";
import ConsolePage from "./pages/ConsolesPage.jsx";
import BasketPage from "./pages/BasketPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Phones",
    element: <PhonePage />,
  },
  {
    path: "/Laptops",
    element: <LaptopPage />,
  },
  {
    path: "/Computers",
    element: <ComputerPage />,
  },
  {
    path: "/Accessories",
    element: <AccessoriesPage />,
  },
  {
    path: "/Consoles",
    element: <ConsolePage />,
  },
  {
    path: "/Basket",
    element: <BasketPage />,
  },
]);
createRoot(document.querySelector("body")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
