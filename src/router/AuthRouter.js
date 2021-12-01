import React from 'react'
import { useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch
  } from "react-router-dom";
import { LoginScreen } from '../components/LoginScreen';
import { NavBar } from '../components/ui/NavBar';
import { MainRouter } from './MainRouter';
import { PrivateRoute } from './RouteTypes/PrivateRoute';
import { PublicRoute } from './RouteTypes/PublicRoute';
export const AuthRouter = () => {
    const {uid} = useSelector(state => state.auth)
    const isAuth=!!uid;
    return (
        <div>
            <Router>
                <div>
                    <Switch>
                        <PublicRoute exact path="/login" component = {LoginScreen} isAuthenticated={isAuth}/>
                        <PrivateRoute path = "/" component={MainRouter} isAuthenticated={isAuth}/>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}