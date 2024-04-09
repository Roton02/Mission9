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
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
          element: <PrivateRoute>
              <Profile></Profile>
          </PrivateRoute> 
        },
        {
          path : '/updateProfile',
          element: <PrivateRoute>
              <UpdateProfile></UpdateProfile>
          </PrivateRoute> 
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
          element: <PrivateRoute> 
              <DetailsPage></DetailsPage>
          </PrivateRoute> 
        }
      ]
    },
  ]);

  export default router;