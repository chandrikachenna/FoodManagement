import React from "react";
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
import {
    ADMIN_PATH,MEAL_SCHEDULE_PATH,HEAD_COUNTS_PATH
} from "../constants/RouteConstants";

import {HomePageRoute} from "./HomePageRoute";
import {MealScheduleRoute} from './MealScheduleRoute';
import {HeadCountsRoute} from './HeadCountsRoute';
import { ProtectedRoute } from "../../Common/utils/ProtectedRoute/ProtectedRoute";

const routes = [
    <Route exact path={ADMIN_PATH} component={HomePageRoute}/>,
    <Route exact path={MEAL_SCHEDULE_PATH} component={MealScheduleRoute}/>,
    <Route exact path={HEAD_COUNTS_PATH} component={HeadCountsRoute}/>
];

export default routes;