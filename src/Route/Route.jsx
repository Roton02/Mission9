import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../page/Home/Home";
import Profile from "../page/Profile/Profile";
import UpdateProfile from "../page/UpdateProfile/UpdateProfile";
import Blog from "../page/Blog/Blog";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import ErrorPage from "../page/ErrorePage/ErrorPage";
import DetailsPage from "../page/DetailsPage/DetailsPage";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: ()=> fetch('Lands.json')
        },
        {
          path : '/profile',
          element: <Profile></Profile>
        },
        {
          path : '/updateProfile',
          element: <UpdateProfile></UpdateProfile>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path:'/register',
          element: <Register></Register>
        },
        {
          path: '/ShowDetails',
          element: <DetailsPage></DetailsPage>
        }
      ]
    },
  ]);

  export default router;