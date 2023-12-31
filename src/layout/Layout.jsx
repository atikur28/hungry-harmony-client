import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllFood from "../pages/AllFood/AllFood";
import FoodDetails from "../pages/FoodDetails/FoodDetails";
import PrivateRoute from "../routes/PrivateRoute";
import AddFood from "../pages/AddFood/AddFood";
import OrderedFoods from "../pages/OrderedFoods/OrderedFoods";
import PurchaseFood from "../pages/PurchaseFood/PurchaseFood";
import AddedFood from "../pages/AddedFood/AddedFood";
import UpdateAddedFood from "../pages/AddedFood/UpdateAddedFood/UpdateAddedFood";
import Blog from "../pages/Blog/Blog";

const createdRouter = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://b8a11-server-side-atikur28.vercel.app/foods')
            },
            {
                path: "/allFood",
                element: <AllFood></AllFood>,
                loader: () => fetch('https://b8a11-server-side-atikur28.vercel.app/foodsCount')
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/allFoods/:id",
                element: <PrivateRoute><FoodDetails></FoodDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://b8a11-server-side-atikur28.vercel.app/foods/${params.id}`)
            },
            {
                path: "/addFood",
                element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
            },
            {
                path: "/orderedFoods",
                element: <PrivateRoute><OrderedFoods></OrderedFoods></PrivateRoute>,
                loader: () => fetch('https://b8a11-server-side-atikur28.vercel.app/orderedFoods')
            },
            {
                path: "/purchaseFood/:id",
                element: <PrivateRoute><PurchaseFood></PurchaseFood></PrivateRoute>,
                loader: ({params}) => fetch(`https://b8a11-server-side-atikur28.vercel.app/foods/${params.id}`)
            },
            {
                path: "/addedFood",
                element: <PrivateRoute><AddedFood></AddedFood></PrivateRoute>,
                loader: () => fetch('https://b8a11-server-side-atikur28.vercel.app/foods')
            },
            {
                path: "/updateAddedFood/:id",
                element: <PrivateRoute><UpdateAddedFood></UpdateAddedFood></PrivateRoute>,
                loader: ({params}) => fetch(`https://b8a11-server-side-atikur28.vercel.app/foods/${params.id}`)
            },
            {
                path: "/signIn",
                element: <SignIn></SignIn>
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>
            },
        ]
    }
])

export default createdRouter;