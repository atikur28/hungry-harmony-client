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

const createdRouter = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/allFood",
                element: <AllFood></AllFood>,
                loader: () => fetch('http://localhost:5000/foodsCount')
            },
            {
                path: "/allFoods/:id",
                element: <PrivateRoute><FoodDetails></FoodDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
            },
            {
                path: "/addFood",
                element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
            },
            {
                path: "/orderedFoods",
                element: <PrivateRoute><OrderedFoods></OrderedFoods></PrivateRoute>
            },
            {
                path: "/purchaseFood/:id",
                element: <PrivateRoute><PurchaseFood></PurchaseFood></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
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