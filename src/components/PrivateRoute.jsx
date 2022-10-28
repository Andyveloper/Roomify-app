import React from 'react'
import { Route, Navigate, Outlet } from 'react-router-dom'

const isAdmin = () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo.role === 'admin') {
        return true
    }else{
        return false
    }
  };
  
  const Admin = isAdmin()

const PrivateRoute = () => {
    
  return (
    Admin ? <Outlet/>: <Navigate to="/"/>
  )
}

export default PrivateRoute