import React, { lazy } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {
   SMART_FOOD_MANAGEMENT_PATH,
   MEAL_PREFERENCE_PATH,
   MEAL_FEEDBACK_PATH
} from '../constants/RouteConstants'

// const HomePageRoute = lazy(() => import('./HomePageRoute'))
// const MealPreferenceRoute = lazy(() => import('./MealPreferenceRoute'))
// const ReviewPageRoute = lazy(() => import('./ReviewPageRoute'))
import HomePageRoute from './HomePageRoute'
import MealPreferenceRoute from './MealPreferenceRoute'
import ReviewPageRoute from './ReviewPageRoute'

import { HomePageRoute as AdminPage } from '../../Admin/routes/HomePageRoute'

import { ProtectedRoute } from '../../Common/components/ProtectedRoute/ProtectedRoute'

const routes = [
   <ProtectedRoute
      exact
      path={SMART_FOOD_MANAGEMENT_PATH}
      component={HomePageRoute}
      adminPage={AdminPage}
   />,
   <Route path={MEAL_PREFERENCE_PATH} component={MealPreferenceRoute} />,
   <Route path={MEAL_FEEDBACK_PATH} component={ReviewPageRoute} />
]

export default routes
