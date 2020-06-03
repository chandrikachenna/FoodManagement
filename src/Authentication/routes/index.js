import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { SIGN_UP_PATH, SIGN_IN_PATH } from '../constants/RouteConstants'

import { SignupRoute } from './SignupRoute'
import { SigninRoute } from './SigninRoute'

const routes = [
   // <Route exact path={SIGN_UP_PATH} component={SignupRoute} />,
   <Route exact path={SIGN_IN_PATH} component={SigninRoute} />
]

export default routes
