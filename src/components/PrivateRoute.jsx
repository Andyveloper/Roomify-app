import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const isAdmin = () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  if (userInfo.role === 'admin') {
    return true;
  }
  return false;
};

const Admin = isAdmin();

const PrivateRoute = () => (
  Admin ? <Outlet /> : <Navigate to="/" />
);

export default PrivateRoute;
