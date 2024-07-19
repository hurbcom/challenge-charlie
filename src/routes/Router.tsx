import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const Router = () => {
  return <RouterProvider router={browserRouter} />;
};

export default Router;
