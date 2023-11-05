import { useContext } from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return (
            <div className="h-[50vh] flex justify-center items-center">
                <span className="loading loading-ring loading-lg"></span>
            </div>
        );
    }

    if(user){
        return children
    }

    return <Navigate to="/signIn"></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
}

export default PrivateRoute;