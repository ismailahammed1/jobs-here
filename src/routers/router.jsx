import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Frequen from "../pages/Faq/Frequen";
import FindJobPage from "../pages/FindJobPage/FindJobPage";
import JobsListPage from "../pages/JobsList/JobsListPage";
import JobDetailsPage from "../pages/JobDetailsPage/JobDetailsPage";
import PostJobForm from "../pages/PostJobForm/PostJobForm";

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
      },
      {
        path: "faq",
        element: <Frequen />
      },
      {
        path: "jobs-List",
        element: <JobsListPage />
      },
      {
        path: "jobs-details",
        element: <JobDetailsPage />
      },
      {
        path: "find-job",
        element: <FindJobPage />
      },
      {
        path: "post-job",
        element: <PostJobForm />
      },
      
    ]
  }
]);

export default router;