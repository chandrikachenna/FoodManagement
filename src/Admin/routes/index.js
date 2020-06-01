import React from "react";
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
import {
    ADMIN_PATH,MEAL_SCHEDULE_PATH
} from "../constants/RouteConstants";

import {HomePageRoute} from "./HomePageRoute";
import {MealScheduleRoute} from './MealScheduleRoute';
import { ProtectedRoute } from "../../Common/utils/ProtectedRoute/ProtectedRoute";

const routes = [
    <Route exact path={ADMIN_PATH} component={HomePageRoute}/>,
    <Route exact path={MEAL_SCHEDULE_PATH} component={MealScheduleRoute}/>
];

export default routes;