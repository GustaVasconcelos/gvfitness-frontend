import React from "react";
import { Navigate } from "react-router-dom";
import { getToken, setUserId } from "./localStorage";
import jwt from 'jwt-decode';

const PrivateRoute = ({ children }) => {

    const token = getToken();
    try {
        const decoded = jwt(token)
        setUserId(decoded.id);
    } catch (err) {
        console.log(err);
    }

    return  token !== null ? children : <Navigate to="/"/>
}

export default PrivateRoute;