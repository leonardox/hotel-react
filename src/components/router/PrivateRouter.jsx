import React from 'react';
import { Navigate } from 'react-router-dom';
import Price from "../price/Price"
import { IsAuthenticated } from "./Auth";
const PrivateRoute = () => {
  return IsAuthenticated() ? <Price /> : <Navigate to="/" />;
}

export default PrivateRoute
