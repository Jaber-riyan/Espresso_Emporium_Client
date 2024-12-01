import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout/HomeLayout";
import MainLayout from "../Layout/MainLayout/MainLayout";
import OutletError from "../Error/OutletError";
import AddCoffee from "../Components/AddCoffee/AddCoffee";
import ViewDetails from "../Components/ViewDetails/ViewDetails";
import UpdateCoffee from "../Components/UpdateCoffee/UpdateCoffee";
import Login from "../AuthenticationComponents/Login";
import Register from "../AuthenticationComponents/Register";
import Users from "../Components/Users/Users";
import UpdateUser from "../Components/UpdateUser/UpdateUser";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes"

const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout></HomeLayout>,
      children: [
        {
            path: '/',
            element: <MainLayout></MainLayout>
        },
        {
          path: '/addcoffee',
          element: <PrivateRoutes><AddCoffee></AddCoffee></PrivateRoutes>
        },
        {
          path: '/view/:id',
          element: <PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>,
          loader: ({params}) => fetch(`https://espresso-emporium-seven.vercel.app/coffees/${params.id}`)
        },
        {
          path: '/updatecoffee/:id',
          element: <PrivateRoutes><UpdateCoffee></UpdateCoffee></PrivateRoutes>,
          loader: ({params}) => fetch(`https://espresso-emporium-seven.vercel.app/coffees/${params.id}`)
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/users',
          element: <PrivateRoutes><Users></Users></PrivateRoutes>,
          loader: ()=> fetch(`https://espresso-emporium-seven.vercel.app/users`)
        },
        {
          path: '/update-user/:id',
          element: <PrivateRoutes><UpdateUser></UpdateUser></PrivateRoutes>,
          loader: ({params}) => fetch(`https://espresso-emporium-seven.vercel.app/users/${params.id}`)
        },
        {
          path: '*',
          element: <OutletError></OutletError>
        }
      ]
    }
  ])

export default router;