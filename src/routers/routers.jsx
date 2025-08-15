import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { loadData } from "../fetchDataFun/fetchDataFun";
import AllPropertiesPage from "../pages/AllPropertiesPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: loadData,
      },
      {
        path: "/view-all-properties",
        element: (
          <PrivateRoute>
            <AllPropertiesPage />
          </PrivateRoute>
        ),
        loader: loadData,
      },
      {
        path: "/product-details/:id",
        element: (
          <PrivateRoute>
            <ProductDetailsPage />
          </PrivateRoute>
        ),
        loader: loadData,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default router;
