import React from "react";
import {
    Switch,
    Route, Redirect,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Jewelery from "./Pages/Jewelery/Jewelery";
import Men from "./Pages/Men/Men";
import Product from "./Pages/Product/Product";
import Women from "./Pages/Women/Women";

export default function MainRouter() {
    return (
        <div>

            <Switch>
                
                    <Route exact path="/">
                    {true ? <Redirect to="/home" /> : <Home   />}
                    </Route>
                
                <Route path="/home" >
                    <Home />
                </Route>

                <Route path="/men" >
                    <Men />
                </Route>
                <Route path="/jewelery" >
                    <Jewelery />
                </Route>
                <Route path="/women" >
                    <Women />
                </Route>

                <Route path="/product/:id">
                    <Product />
                </Route>


            </Switch></div>
    )
}