import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({
  element: Component,
  authToken,
  userModulesData,
  ...rest
}) => {
  return authToken ? <Component /> : <Navigate to="/login" />;
};

export { ProtectedRoute };
