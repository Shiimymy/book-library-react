import React from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ Component }) => {
  const isAuthenticated = false; //simulating non login user

  return isAuthenticated ? Component : <Navigate to="/" />;
};
