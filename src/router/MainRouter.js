import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { EditCredit } from '../components/EditCredit';
import { MainScreen } from '../components/MainScreen';
import { RegisterScreen } from '../components/RegisterScreen';
import { NavBar } from '../components/ui/NavBar';
export const MainRouter = () => {
    return (
        <div>
            
                    
            <NavBar/>
                <div>
                    <Switch>
                        <Route exact path="/credits" component = {MainScreen}/>
                        <Route exact path="/credits/:creditID" component = {EditCredit}/>
                        <Route path="/register" component = {RegisterScreen}/>
                        <Route path="/" component = {RegisterScreen}/>
                    </Switch>
                </div>
        </div>
    )
}
