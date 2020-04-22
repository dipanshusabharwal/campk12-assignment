import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "../Components/LandingPage";
import OnlineCourses from "../Components/OnlineCourses";
import Error from "../Components/Error";

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/online-courses" component={OnlineCourses} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default Routes;
