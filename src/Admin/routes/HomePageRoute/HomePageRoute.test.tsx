import { Provider } from 'mobx-react'
import React from 'react'
import { withRouter, Router, Route } from 'react-router-dom'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { createMemoryHistory } from 'history'

import { SIGN_IN_PATH } from '../../../Authentication/constants/RouteConstants'
import { ADMIN_PATH } from '../../constants/RouteConstants'

import { AuthAPI } from '../../../Authentication/services/AuthService/AuthAPI.fixture'
import { AuthStore } from '../../../Authentication/stores/AuthStore'
import { ScheduleMealService } from '../../services/ScheduleMealServices/ScheduleMealService.fixture'
import { ScheduleMealStore } from '../../stores/ScheduleMealStore'
import { HeadCountsService } from '../../services/HeadCountsServices/HeadCountsService.fixture'
import { HeadCountsStore } from '../../stores/HeadCountsStore'

import { HomePageRoute } from '.'

const LocationDisplay = withRouter(({ location }) => (
   <div data-testid='location-display'>{location.pathname}</div>
))

describe('HomePageRoute tests', () => {
   let authAPI
   let authStore
   let scheduleMealService
   let scheduleMealStore
   let headCountsService
   let headCountsStore

   beforeEach(() => {
      authAPI = new AuthAPI()
      authStore = new AuthStore(authAPI)

      scheduleMealService = new ScheduleMealService()
      scheduleMealStore = new ScheduleMealStore(scheduleMealService)

      headCountsService = new HeadCountsService()
      headCountsStore = new HeadCountsStore(headCountsService)
   })
   it('it should test signOut', async () => {
      const history = createMemoryHistory()
      const route = ADMIN_PATH
      history.push(route)

      const { getByRole, getByTestId, debug } = render(
         <Provider
            scheduleMealStore={scheduleMealStore}
            headCountsStore={headCountsStore}
            authStore={authStore}
         >
            <Router history={history}>
               <Route path={SIGN_IN_PATH}>
                  <LocationDisplay />
               </Route>
               <Route path={ADMIN_PATH}>
                  <HomePageRoute />
               </Route>
            </Router>
         </Provider>
      )
      const signOutButton = getByRole('button', { name: 'Logout' })
      fireEvent.click(signOutButton)

      const pageNavigation = await waitFor(() =>
         getByTestId('location-display')
      )
      expect(pageNavigation).toHaveTextContent(SIGN_IN_PATH)
   })
   it('it should test Home', async () => {
      const history = createMemoryHistory()
      const route = ADMIN_PATH
      history.push(route)

      const { getByRole, getByTestId, debug } = render(
         <Provider
            scheduleMealStore={scheduleMealStore}
            headCountsStore={headCountsStore}
            authStore={authStore}
         >
            <Router history={history}>
               <Route path={SIGN_IN_PATH}>
                  <LocationDisplay />
               </Route>
               <Route path={ADMIN_PATH}>
                  <HomePageRoute />
               </Route>
            </Router>
         </Provider>
      )
      const homeButton = getByRole('button', { name: 'Home' })
      fireEvent.click(homeButton)

      const pageNavigation = await waitFor(() =>
         getByRole('button', { name: 'Home' })
      )
      expect(pageNavigation).toHaveTextContent('Home')
   })
})
