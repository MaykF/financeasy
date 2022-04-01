import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import login from './pages/login/login';

export default () => {

    return (
        <Routes>
            <Route exact path="*">
                Login
            </Route>

            <Route exact path="/home">
                Pagina inicial
            </Route>
        </Routes>
    )
}