import React from "react";
import Header from "Components/Header";
import {HashRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Detail from "Routes/Detail";

export default () => (
    <Router>
        <>
        <Header />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tv" exact component={TV} />
            <Route path="/search" exact component={Search} />
            <Route path="/movie/:id" component={Detail} />
            <Route path="/show/:id" component={Detail} />
            <Route path="/movie/:id/credits" component={Detail} />
            <Route path="/movie/:id/videos" component={Detail} />
            <Route path="/show/:id/credits" component={Detail} />
            <Route path="/show/:id/videos" component={Detail} />
            <Redirect from="*" to="/" />
        </Switch>
        </>
    </Router>
);
