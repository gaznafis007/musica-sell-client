import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../Components/Private/PrivateRoute";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyOrders from "../Pages/MyOrders/MyOrders";
import MyProducts from "../Pages/MyProducts/MyProducts";
import Products from "../Pages/Products/Products";
import Signup from "../Pages/Signup/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/products/:name",
        element: (
          <PrivateRoute>
            <Products />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.name}`),
      },
      {
        path: "/myorders",
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
      },
      {
        path: "/myproducts",
        element: (
          <PrivateRoute>
            <MyProducts />
          </PrivateRoute>
        ),
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
