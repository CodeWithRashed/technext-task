import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Homepage from "../Pages/Homepage";
import UserDetailsPage from "../Pages/UserDetailsPage";
import { getUserData } from "../utils/getUserData";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <div>Error 404</div>,
    children: [
      {
        path: "/",
        element: <Homepage/>,
        loader: () => getUserData()
      },
      {
        path: "/user/:id",
        element: <UserDetailsPage/>,
      },
    ],
  },
]);
