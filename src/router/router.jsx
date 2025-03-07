import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AddJob from "../pages/AddJob/AddJobs";
import Home from "../pages/Home/Home";
import JobApply from "../pages/JobApply/JobApply";
import JobDetails from "../pages/JobDetails/JobDetails";
import MyApplications from "../pages/MyApplication/MyApplication";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import Register from "../pages/Register/Register";
import Signin from "../pages/Signin/Signin";
import ViewApplications from "../pages/ViewApplications/ViewApplications";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>Route not found </h2>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "signin",
        element: <Signin />,
      },
      {
        path: "jobs/:id",
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
      },
      {
        path: `jobApply/:id`,
        element: (
          <PrivateRoute>
            <JobApply />
          </PrivateRoute>
        ),
      },
      {
        path: "myApplications",
        element: (
          <PrivateRoute>
            <MyApplications />
          </PrivateRoute>
        ),
      },
      {
        path: "/addjob",
        element: <AddJob />,
      },
      {
        path: 'myPostedJobs',
        element: (<PrivateRoute>
          <MyPostedJobs/>
        </PrivateRoute>)
      },
      {
        path: '/viewApplications/:job_id',
        element: <PrivateRoute>
          <ViewApplications/>
        </PrivateRoute>,
        loader:({params})=> fetch(`http://localhost:3000/job-applications/jobs/${params.job_id}`)
      }
    ],
  },
]);
export default router;
