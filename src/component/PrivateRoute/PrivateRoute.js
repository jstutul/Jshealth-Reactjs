import React from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";

const PrivateRoute = () => {
  const location = useLocation();
  console.log(location.pathname);
  const { user } = useAuth();
  console.log(Outlet);
  return user?.email ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ form: location }} replace />
  );
};

export default PrivateRoute;
