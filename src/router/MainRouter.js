import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { MainScreen } from '../components/MainScreen';
import { RegisterScreen } from '../components/RegisterScreen';
export const MainRouter = () => {
    return (
        <div>
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/credits" component = {MainScreen}/>
                        <Route path="/register" component = {RegisterScreen}/>
                        <Route path="/" component = {RegisterScreen}/>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
