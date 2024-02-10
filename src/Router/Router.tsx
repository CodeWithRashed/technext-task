import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Homepage from "../Pages/Homepage";
import UserDetailsPage from "../Pages/UserDetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <div>Error 404</div>,
    children: [
      {
        path: "/",
        element: <Homepage/>,
      },
      {
        path: "/user/:id",
        element: <UserDetailsPage/>,
      },
    ],
  },
]);
