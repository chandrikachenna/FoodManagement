import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {
   SMART_FOOD_MANAGEMENT_PATH,
   MEAL_PREFERENCE_PATH,
   MEAL_FEEDBACK_PATH
} from '../constants/RouteConstants'

import { HomePageRoute } from './HomePageRoute'
import { ProtectedRoute } from '../../Common/utils/ProtectedRoute/ProtectedRoute'

import { MealPreferenceRoute } from './MealPreferenceRoute'
{
   /* <ProtectedRoute exact path={SMART_FOOD_MANAGEMENT_PATH} component={HomePageRoute} /> */
}
import { ReviewPageRoute } from './ReviewPageRoute'

const routes = [
   <Route exact path={SMART_FOOD_MANAGEMENT_PATH} component={HomePageRoute} />,
   <Route exact path={MEAL_PREFERENCE_PATH} component={MealPreferenceRoute} />,
   <Route exact path={MEAL_FEEDBACK_PATH} component={ReviewPageRoute} />
]

export default routes
