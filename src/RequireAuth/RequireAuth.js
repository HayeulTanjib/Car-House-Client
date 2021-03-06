import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Components/Shared/Loading/Loading";
import auth from "../FireBase/firebase-config";

function RequireAuth({ children }) {
    const location = useLocation();
    const [user, loading] = useAuthState(auth);

    if(loading){
       return <Loading/>
    }

    if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
  }

  export default RequireAuth;