import React from "react";
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
import {
  SIGN_UP_PATH,
} from "../constants/RouteConstants";

import {SignupRoute} from "./SignupRoute";

const routes = [
  <Route path={SIGN_UP_PATH} component={SignupRoute} />
];

export default routes;