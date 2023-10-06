import { Navigate, createBrowserRouter } from "react-router-dom";
import { HomePage } from "../../feature/home/HomePage";
import App from "../layout/App";
import { Catalog } from "../../feature/catalog/Catalog";
import { ProductDetails } from "../../feature/catalog/ProductDetails";
import { AboutPage } from "../../feature/about/AboutPage";
import { ContactPage } from "../../feature/contact/ContactPage";
import { ServerError } from "../errors/ServerError";
import { NotFound } from "../errors/NotFound";
import BasketPage from "../../feature/basket/BasketPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "catalog", element: <Catalog /> },
      { path: "catalog/:id", element: <ProductDetails /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "server-error", element: <ServerError /> },
      { path: "not-found", element: <NotFound /> },
      { path: "basket", element: <BasketPage /> },
      { path: "*", element: <Navigate replace to="/not-found" /> },
    ],
  },
]);
