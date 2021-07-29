import React from 'react';
import {BrowserRouter , Switch , Route} from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/login/Login";
import Student from "../components/student/Student";
import EditProfile from "../components/student/EditProfile";

const RouteConfig = () => {
    return (
        <>
            <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/Student" component={Student}/>
                <Route exact path="/EditProfile" component={EditProfile} />
            </Switch>
            </BrowserRouter>
        </>
    )
}

export default RouteConfig
