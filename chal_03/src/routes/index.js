import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Footer from "../components/Footer";

import Main from "../pages/main";

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      {/* Switch component makes the router select the first matching route requested
    from the user through a browser. If the switch weren't used here, all matching 
    routes would be activated. Using the 'exact' tag helper on the route would
    cause similar results*/}
      <Switch>
        {/* <Route exact path="/" component={Main} /> */}
        <Route exact path="/" component={Main} />
      </Switch>
      <Footer />
    </Fragment>
  </BrowserRouter>
);

export default Routes;
