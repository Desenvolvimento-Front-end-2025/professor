import { Navigate, Outlet } from "react-router"
import { useAuth } from "../../context/AuthProvider"


const PrivateRoute = ()=>{

    const {user} = useAuth()

    return !user ? <Navigate to="/login" replace /> : <Outlet />

}

export default PrivateRoute