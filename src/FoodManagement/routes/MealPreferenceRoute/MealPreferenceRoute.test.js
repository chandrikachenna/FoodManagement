import { Provider } from 'mobx-react'
import React from 'react'
import { withRouter, Router, Route } from 'react-router-dom'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { API_SUCCESS, API_FAILED } from '@ib/api-constants'

import { MEAL_PREFERENCE_PATH } from '../../constants/RouteConstants'
import { SIGN_IN_PATH } from '../../../Authentication/constants/RouteConstants'

import { AuthAPI } from '../../../Authentication/services/AuthService/AuthAPI.fixture'
import { AuthStore } from '../../../Authentication/stores/AuthStore'

import { MealPreferenceRoute } from '.'
import { MealInfoStore } from '../../stores/MealInfoStore'
import getMealPreferenceInfo from '../../fixtures/getMealPreferenceInfo.json'
import { MealsInfo } from '../../services/MealInfoServices/MealsInfo.fixture'
import { MealPreference } from '../../services/MealPreferenceServices/MealPreference.fixture'
import { UpdateMealInfo } from '../../services/UpdateMealServices/UpdateMealInfo.api'
import { UpdateCustomMealInfo } from '../../services/UpdateCustomMealServices/UpdateCustomMealInfo.api'
import { MealReviewInfo } from '../../services/MealReviewInfoServices/MealReviewInfoService.api'
import { UpdateMealReviewInfo } from '../../services/UpdateMealReviewInfoServices/UpdateMealReviewInfoService.api'
import { MealInfoItemModel } from '../../stores/models/MealInfoItemModel'

const LocationDisplay = withRouter(({ location }) => (
   <div data-testid='location-display'>{location.pathname}</div>
))

describe('MealPreferenceRoute tests', () => {
   let authAPI
   let authStore

   let mealsInfo
   let mealPreferenceInfoService
   let updateMealInfo
   let updateCustomMealInfo
   let mealReviewInfo
   let updateMealReviewInfoService

   let mealInfoStore

   beforeEach(() => {
      authAPI = new AuthAPI()
      authStore = new AuthStore(authAPI)

      mealsInfo = new MealsInfo()
      mealPreferenceInfoService = new MealPreference()
      updateMealInfo = new UpdateMealInfo()
      updateCustomMealInfo = new UpdateCustomMealInfo()
      mealReviewInfo = new MealReviewInfo()
      updateMealReviewInfoService = new UpdateMealReviewInfo()
      mealInfoStore = new MealInfoStore(
         mealsInfo,
         mealPreferenceInfoService,
         updateMealInfo,
         updateCustomMealInfo,
         mealReviewInfo,
         updateMealReviewInfoService
      )
   })

   it('it should test signOut', async () => {
      const history = createMemoryHistory()
      const route = MEAL_PREFERENCE_PATH
      history.push(route)

      const { getByRole, getByTestId } = render(
         <Provider mealInfoStore={mealInfoStore} authStore={authStore}>
            <Router history={history}>
               <Route path={SIGN_IN_PATH}>
                  <LocationDisplay />
               </Route>
               <Route path={MEAL_PREFERENCE_PATH}>
                  <MealPreferenceRoute />
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

   it('it should test MealPreferenceCards', async () => {
      const history = createMemoryHistory()
      const route = MEAL_PREFERENCE_PATH
      history.push(route)

      const { getByRole, getByTestId, debug } = render(
         <Provider mealInfoStore={mealInfoStore} authStore={authStore}>
            <Router history={history}>
               <Route path={SIGN_IN_PATH}>
                  <LocationDisplay />
               </Route>
               <Route path={MEAL_PREFERENCE_PATH}>
                  <MealPreferenceRoute />
               </Route>
            </Router>
         </Provider>
      )
      //   debug()
      // const mockMealType='mealType'
      // const timeCounter=new Date()
      // await waitFor(() => getByTestId("meal-preference-page"))

      // debug()
   })
})
