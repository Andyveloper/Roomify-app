import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const isAdmin = () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  if (localStorage.getItem('userInfo') !== null) {
    if (userInfo.role === 'admin') {
      return true;
    }
    return false;
  }
  return null;
};

const Admin = isAdmin();

const PrivateRoute = () => (
  Admin ? <Outlet /> : <Navigate to="/" />
);

export default PrivateRoute;
