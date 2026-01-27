import { createBrowserRouter, Navigate } from "react-router";
import { RootLayout } from "../layouts/RootLayout";
import { HomePage } from "../pages/HomePage";
import { CellPhonesPage } from "../pages/CellPhones";
import { AboutPage } from "../pages/About";
import { CellPhonePage } from "../pages/CellPhone";
import { CheckoutPage, DashboardNewProductPage, LoginPage, OrdersUserPage, OrderUserPage, RegisterPage, ThankyouPage } from "../pages";
import { ClientLayout } from "../layouts/ClientLayout";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { DashboardProductsPage } from "../pages/dashboard/DashboardProductsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "celulares",
        element: <CellPhonesPage />,
      },
      {
        path: 'celulares/:slug',
        element: <CellPhonePage />,
      },
      {
        path: "nosotros",
        element: <AboutPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "registro",
        element: <RegisterPage />,
      },
      {
        path: "account",
        element: <ClientLayout />,
        children: [
          {
            path: "",
            element: <Navigate to='/account/pedidos' />
          },
          {
            path: "pedidos",
            element: <OrdersUserPage />,
          },
          {
            path: "pedidos/:id",
            element: <OrderUserPage />,
          }
        ],
      },
      {
        path: "thankyou",
        element: <ThankyouPage />,
      },
    ],

  },
  {
    path: "/checkout",
    element: <CheckoutPage />,
  },
  {
    path: "/checkout/:id/thank-you",
    element: <ThankyouPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Navigate to='/dashboard/productos' />
      },
      {
        path: "productos",
        element: <DashboardProductsPage />,
      },
      {
        path: "productos/new",
        element: <DashboardNewProductPage />,
      },
      {
        path: "productos/edit/:id",
      }
    ],
  }
]);