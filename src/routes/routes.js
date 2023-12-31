import React from "react";

import { Routes, Route } from 'react-router-dom';
import PrivateRoute from "../services/wAuth.jsx";

import Login from '../containers/login.jsx';
import Home from '../containers/home.jsx';
import Data from "../containers/data.jsx";

const Content = () => {
    return (
        <main >
            <Routes>
                <Route exact path="/" element={<Login/>}></Route>
                <Route 
                    exact 
                    path="/Home" 
                    element={
                        <PrivateRoute>
                            <Home/>
                        </PrivateRoute>
                    }
                ></Route>
                <Route
                    exact
                    path="/Dados"
                    element={
                        <PrivateRoute>
                            <Data/>
                        </PrivateRoute>
                    }
                >

                </Route>
            </Routes>
        </main>
    )
}

export default Content;