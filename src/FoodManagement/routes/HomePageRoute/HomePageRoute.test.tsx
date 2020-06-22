import { Provider } from 'mobx-react'
import React from 'react'
import { withRouter, Router, Route } from 'react-router-dom'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { API_SUCCESS, API_FAILED } from '@ib/api-constants'

import { SMART_FOOD_MANAGEMENT_PATH } from '../../constants/RouteConstants'
import { SIGN_IN_PATH } from '../../../Authentication/constants/RouteConstants'

import { AuthAPI } from '../../../Authentication/services/AuthService/AuthAPI.fixture'
import { AuthStore } from '../../../Authentication/stores/AuthStore'

import { HomePageRoute } from '.'
import { MealInfoStore } from '../../stores/MealInfoStore'
import getMealInfo from '../../fixtures/getMealInfo.json'
import { MealsInfo } from '../../services/MealInfoServices/MealsInfo.fixture'
import { MealPreference } from '../../services/MealPreferenceServices/MealPreference.fixture'
import { UpdateMealInfo } from '../../services/UpdateMealServices/UpdateMealInfo.fixture'
import getUpdateMealInfoResponse from '../../fixtures/getUpdateMealInfoResponse.json'
import { UpdateCustomMealInfo } from '../../services/UpdateCustomMealServices/UpdateCustomMealInfo.fixture'
import { MealReviewInfo } from '../../services/MealReviewInfoServices/MealReviewInfoService.fixture'
import { UpdateMealReviewInfo } from '../../services/UpdateMealReviewInfoServices/UpdateMealReviewInfoService.fixture'

const LocationDisplay = withRouter(({ location }) => (
   <div data-testid='location-display'>{location.pathname}</div>
))

describe('HomePageRoute tests', () => {
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
   it('should test updateMealInfo service', () => {
      const response = updateMealInfo.setMealsAPI()
      expect(response).toStrictEqual(new Promise((resolve, reject) => {}))
   })
   it('should test updateCustomMealInfo service', () => {
      const response = updateCustomMealInfo.setCustomMealsAPI()
      expect(response).toStrictEqual(new Promise((resolve, reject) => {}))
   })
   it('should test updateMealReviewInfoService service', () => {
      const response = updateMealReviewInfoService.setMealReviewInfo()
      expect(response).toStrictEqual(new Promise((resolve, reject) => {}))
   })
   it('it should test signOut', async () => {
      const history = createMemoryHistory()
      const route = SMART_FOOD_MANAGEMENT_PATH
      history.push(route)

      const { getByRole, getByTestId } = render(
         <Provider mealInfoStore={mealInfoStore} authStore={authStore}>
            <Router history={history}>
               <Route path={SIGN_IN_PATH}>
                  <LocationDisplay />
               </Route>
               <Route path={SMART_FOOD_MANAGEMENT_PATH}>
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
   it('it should test Mealcards', async () => {
      const history = createMemoryHistory()
      const route = SMART_FOOD_MANAGEMENT_PATH
      history.push(route)

      const { getByRole, getByTestId } = render(
         <Provider mealInfoStore={mealInfoStore} authStore={authStore}>
            <Router history={history}>
               <Route path={SIGN_IN_PATH}>
                  <LocationDisplay />
               </Route>
               <Route path={SMART_FOOD_MANAGEMENT_PATH}>
                  <HomePageRoute />
               </Route>
            </Router>
         </Provider>
      )
      const mockLoadingPromise = Promise.resolve(getMealInfo)
      // const mockLoadingPromise =Promise.reject(new Error('error'))
      //  const mockMealsAPI = jest.fn()
      //  mockMealsAPI.mockReturnValue(mockLoadingPromise)
      //  mealsInfo.getMealsAPI = mockMealsAPI

      //  await mealInfoStore.getMealInfo()
      //  expect(mealInfoStore.getMealInfoAPIStatus).toBe(API_SUCCESS)

      await waitFor(() => getByTestId('meal-cards-display'))
   })
})
