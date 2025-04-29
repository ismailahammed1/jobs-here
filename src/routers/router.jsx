import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true, // equivalent to path: "/"
        element: <Home />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "login",
        element: <Login />
      }
      
    ]
  }
]);

export default router;