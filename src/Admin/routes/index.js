import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {
   ADMIN_PATH
} from '../constants/RouteConstants'

import { HomePageRoute } from './HomePageRoute'

// import { ProtectedRoute } from '../../Common/utils/ProtectedRoute/ProtectedRoute'

const routes = [
   <Route exact path={ADMIN_PATH} component={HomePageRoute} />
]

export default routes
