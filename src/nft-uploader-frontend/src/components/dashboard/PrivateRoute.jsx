import React, { useEffect } from "react";
import { useUser } from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  // Add your authentication logic here
  const navigate = useNavigate();
  const { user } = useUser();
  useEffect(() => {
    const token = localStorage.getItem("userData");
    if (!user && !token) {
      navigate("/login");
      return;
    }
  }, [user]);
  return <Component {...rest} />;
};
export default PrivateRoute;
