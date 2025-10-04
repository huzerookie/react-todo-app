import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

export default function ProtectedRoute({children}){
    const authContext = useAuth();
    if(authContext.isAuthenticated){
        return children;
    }
    return <Navigate to={"/"}/>
}