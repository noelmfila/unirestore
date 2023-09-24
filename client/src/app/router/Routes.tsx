import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../../feature/home/HomePage";
import App from "../layout/App";
import { Catalog } from "../../feature/catalog/Catalog";
import { ProductDetails } from "../../feature/catalog/ProductDetails";
import { AboutPage } from "../../feature/about/AboutPage";
import { ContactPage } from "../../feature/contact/ContactPage";

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
    ],
  },
]);
