import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllFood from "../pages/AllFood/AllFood";
import FoodDetails from "../pages/FoodDetails/FoodDetails";

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
                path: "/allFood/:id",
                element: <FoodDetails></FoodDetails>,
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