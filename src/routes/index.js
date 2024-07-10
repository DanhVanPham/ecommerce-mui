import { Navigate, useRoutes } from "react-router-dom";
import { Loadable } from "./Loadable";
import { lazy } from "react";
import GuestGuard from "../guards/GuestGuard";
import MainLayout from "../layouts/MainLayout";
import AuthGuard from "../guards/AuthGuard";

export default function Router() {
  return useRoutes([
    {
      path: "login",
      element: (
        <GuestGuard>
          <Login />
        </GuestGuard>
      ),
    },
    {
      path: "register",
      exact: true,
      element: (
        <GuestGuard>
          <RegisterPage />
        </GuestGuard>
      ),
    },
    {
      path: "/",
      element: (
        <AuthGuard>
          <MainLayout />
        </AuthGuard>
      ),
      children: [
        {
          path: "users",
          children: [
            { path: "profile", element: <PersonalSettingPage /> },
            { path: "purchase", element: <PurchasePage /> },
          ],
        },
        { path: "checkout", element: <CheckoutPage /> },
        { path: "payment-return", element: <PaymentReturnPage /> },
      ],
    },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Navigate to="products" /> },
        {
          path: "products",
          children: [
            { path: "", element: <ProductsPage /> },
            { path: ":id", element: <ProductDetailsPage /> },
          ],
        },
        {
          path: "users",
          children: [
            { path: "profile", element: <PersonalSettingPage /> },
            { path: "purchase", element: <PurchasePage /> },
          ],
        },
        { path: "checkout", element: <CheckoutPage /> },
        { path: "payment-return", element: <PaymentReturnPage /> },
      ],
    },
  ]);
}

// AUTHENTICATION
const Login = Loadable(lazy(() => import("../pages/login")));
const RegisterPage = Loadable(lazy(() => import("../pages/register")));

const ProductsPage = Loadable(lazy(() => import("../pages/products")));
const ProductDetailsPage = Loadable(
  lazy(() => import("../pages/products/details"))
);
const PersonalSettingPage = Loadable(
  lazy(() => import("../pages/settings/personal"))
);
const CheckoutPage = Loadable(lazy(() => import("../pages/checkout")));
const PurchasePage = Loadable(lazy(() => import("../pages/purchase")));
const PaymentReturnPage = Loadable(
  lazy(() => import("../pages/payment/PaymentReturn"))
);
