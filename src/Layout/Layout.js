import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import "./layout.css";
import routeConfig from "./routeConfig.js";
import Home from "./../menus/Menu1/C141.js"

function Layout() {
  return (
    <React.Fragment> 
     <div>
       <Switch>
        <Route exact path="/" >
         <Home/>
         </Route>
        {routeConfig.map((route, i) => (
          <Route key={route} {...route} />
        ))}
      </Switch>
      </div>
      </React.Fragment>
  );
}

export default Layout;
