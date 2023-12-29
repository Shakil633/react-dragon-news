import { createBrowserRouter } from "react-router-dom";
import MainLyOut from "../RootsLyOut/MainLyOut";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NewsPage from "../Pages/NewsPage/NewsPage";
import PrivetRoutes from "./PrivetRoutes";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLyOut></MainLyOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/news.json"),
      },
      {
        path: "/news/:id",
        element: (
          <PrivetRoutes>
            <NewsPage></NewsPage>
          </PrivetRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default Routes;
