import { useContext } from "react";
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Components/Loading/Loading";

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }

    if (user?.email) {
        return children;
    }

    return <Navigate state={location.pathname} to='/login' replace></Navigate>;
};

export default PrivateRoutes;