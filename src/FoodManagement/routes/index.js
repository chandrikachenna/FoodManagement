import React from "react";
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
import {
  SMART_FOOD_MANAGEMENT_PATH,
} from "../constants/RouteConstants";

import {HomePageRoute} from "./HomePageRoute";

const routes = [
  <Route path={SMART_FOOD_MANAGEMENT_PATH} component={HomePageRoute} />
];

export default routes;