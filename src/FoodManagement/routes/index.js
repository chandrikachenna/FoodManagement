import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {
   SMART_FOOD_MANAGEMENT_PATH,
   MEAL_PREFERENCE_PATH,
   MEAL_FEEDBACK_PATH
} from '../constants/RouteConstants'

import { HomePageRoute } from './HomePageRoute'
import { MealPreferenceRoute } from './MealPreferenceRoute'
import { ReviewPageRoute } from './ReviewPageRoute'

import { HomePageRoute as AdminPage} from '../../Admin/routes/HomePageRoute'; 

import { ProtectedRoute } from '../../Common/utils/ProtectedRoute/ProtectedRoute'

const routes = [
   <ProtectedRoute
      exact
      path={SMART_FOOD_MANAGEMENT_PATH}
      component={HomePageRoute}
      adminPage={AdminPage}
   />,
   <Route  path={MEAL_PREFERENCE_PATH} component={MealPreferenceRoute} />,
   <Route  path={MEAL_FEEDBACK_PATH} component={ReviewPageRoute} />
]

export default routes
