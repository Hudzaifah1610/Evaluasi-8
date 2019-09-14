import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../Container/Home';
import Profile from '../Container/Profile';
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import NotFound from "../Container/NotFound";

const Routes = () => {
    return ( 
        <Router>
            <Header/>
            <Navbar/>
            <Route exact path="/" component={Home} />
            <Route path="/profile/:id" component={Profile} />
            <Route path="/:pathname/" component={NotFound}/>            
        </Router>
     );
}
 
export default Routes;