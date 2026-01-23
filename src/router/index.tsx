import { createBrowserRouter } from "react-router";
import { RootLayout } from "../layouts/RootLayout";
import { HomePage } from "../pages/HomePage";
import { CellPhonesPage } from "../pages/CellPhones";
import { AboutPage } from "../pages/About";
import { CellPhonePage } from "../pages/CellPhone";

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
        path:'celulares/:slug',
        element: <CellPhonePage />,
      },
      {
        path: "nosotros",
        element: <AboutPage />, 
      }
    ],
  },
]);