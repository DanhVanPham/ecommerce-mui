import { Navigate, useRoutes } from "react-router-dom";
import { Loadable } from "./Loadable";
import { lazy } from "react";
import LogoOnlyLayout from "../layouts/LogoOnlyLayout";
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
    {
      path: "*",
      element: <LogoOnlyLayout />,
      children: [
        { path: "403", element: <Page403 /> },
        { path: "404", element: <Page404 /> },
        { path: "500", element: <Page500 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
  ]);
}

// AUTHENTICATION
const Login = Loadable(lazy(() => import("../pages/login")));
const RegisterPage = Loadable(lazy(() => import("../pages/register")));

// ERROR PAGE
const Page500 = Loadable(lazy(() => import("../pages/errors/Page500")));
const Page403 = Loadable(lazy(() => import("../pages/errors/Page403")));
const Page404 = Loadable(lazy(() => import("../pages/errors/Page404")));

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
