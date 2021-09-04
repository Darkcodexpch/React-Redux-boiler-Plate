import React from "react";
import Home from "../Components/Home";
import Profile from "../Components/Profile";
import About from "../Components/About";
import Notfound from "../Components/Notfound";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

export default function ReactRouter(){
return(
    <>
    <Router>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/profile:username" component={Profile}/>
        <Route exact path="*" component={Notfound}/>
    </Router>
    </>
)
}