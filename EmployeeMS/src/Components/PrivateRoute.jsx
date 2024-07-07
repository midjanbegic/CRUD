import React from 'react'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({children}) => {
  return localStorage.getItem("valid") ? children : <Navigate to="/" />
}
