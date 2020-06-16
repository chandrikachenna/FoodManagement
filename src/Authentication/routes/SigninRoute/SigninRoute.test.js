import React from 'react'
import { render, fireEvent, waitForElement } from '@testing-library/react'
import { Router, Route, withRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { createMemoryHistory } from 'history'
import {
   API_INITIAL,
   API_FETCHING,
   API_SUCCESS,
   API_FAILED
} from '@ib/api-constants'
import { SIGN_UP_PATH, SIGN_IN_PATH } from '../../constants/RouteConstants'
import { SMART_FOOD_MANAGEMENT_PATH } from '../../../FoodManagement/constants/RouteConstants'

import { AuthAPI } from '../../services/AuthService/AuthAPI.api'
import { AuthStore } from '../../stores/AuthStore'

import getUserSignInResponse from '../../fixtures/getUserSignInResponse.json'
import { SigninRoute } from '.'

const LocationDisplay = withRouter(({ location }) => (
   <div data-testid='location-display'>{location.pathname}</div>
))

describe('SignInRoute tests', () => {
   let authAPI
   let authStore

   beforeEach(() => {
      authAPI = new AuthAPI()
      authStore = new AuthStore(authAPI)
   })

   afterEach(() => {
      jest.resetAllMocks()
   })

   it('should render username empty error message', () => {
      const { getByText } = render(
         <Router history={createMemoryHistory()}>
            <SigninRoute authStore={authStore} />
         </Router>
      )
      const logInButton = getByText('LOGIN')

      fireEvent.click(logInButton)
      getByText(/Please enter username/i)
   })
   it('should render password empty error message', () => {
      const { getByText, getByPlaceholderText } = render(
         <Router history={createMemoryHistory()}>
            <SigninRoute authStore={authStore} />
         </Router>
      )
      const username = 'test-user'
      const usernameField = getByPlaceholderText('Username')
      const logInButton = getByText('LOGIN')

      fireEvent.change(usernameField, { target: { value: username } })
      fireEvent.click(logInButton)

      getByText(/Please enter password/i)
   })

   it('should submit sign-in on press enter', async () => {
      const { getByPlaceholderText, getByText } = render(
         <Router history={createMemoryHistory()}>
            <SigninRoute authStore={authStore} />
         </Router>
      )
      const username = 'test-user'
      const password = 'test-password'

      const usernameField = getByPlaceholderText('Username')
      const passwordField = getByPlaceholderText('Password')
      const logInButton = getByText('LOGIN')

      fireEvent.change(usernameField, { target: { value: username } })
      fireEvent.change(passwordField, { target: { value: password } })
      fireEvent.click(logInButton)

      expect(authStore.getUserSignInAPIStatus).toBe(API_FETCHING)
   })

   it('should render signInRoute loading state', async () => {
      const { getByPlaceholderText, getByRole, getByText } = render(
         <Router history={createMemoryHistory()}>
            <SigninRoute authStore={authStore} />
         </Router>
      )
      const username = 'test-user'
      const password = 'test-password'

      const usernameField = getByPlaceholderText('Username')
      const passwordField = getByPlaceholderText('Password')
      const logInButton = getByText('LOGIN')

      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockSignInAPI = jest.fn()
      mockSignInAPI.mockReturnValue(mockLoadingPromise)
      authAPI.signInAPI = mockSignInAPI

      fireEvent.change(usernameField, { target: { value: username } })
      fireEvent.change(passwordField, { target: { value: password } })
      fireEvent.click(logInButton)
      expect(authStore.getUserSignInAPIStatus).toBe(API_FETCHING)
   })

   it('should render signInRoute success state', async () => {
      const history = createMemoryHistory()
      const route = SIGN_IN_PATH
      history.push(route)

      const { getByPlaceholderText, getByText, getByTestId, debug } = render(
         <Provider authStore={authStore}>
            <Router history={history}>
               <Route path={SIGN_IN_PATH}>
                  <SigninRoute />
               </Route>
               <Route path={SMART_FOOD_MANAGEMENT_PATH}>
                  <LocationDisplay />
               </Route>
            </Router>
         </Provider>
      )
      const username = 'test-user'
      const password = 'test-password'

      const usernameField = getByPlaceholderText('Username')
      const passwordField = getByPlaceholderText('Password')
      const logInButton = getByText('LOGIN')

      const mockSuccessPromise = new Promise(function(resolve, reject) {
         resolve(getUserSignInResponse)
      })

      const mockSignInAPI = jest.fn()
      mockSignInAPI.mockReturnValue(mockSuccessPromise)
      authAPI.signInAPI = mockSignInAPI

      fireEvent.change(usernameField, { target: { value: username } })
      fireEvent.change(passwordField, { target: { value: password } })
      fireEvent.click(logInButton)

      const pageNavigation = await waitForElement(() =>
         getByTestId('location-display')
      )
      expect(pageNavigation).toHaveTextContent(SMART_FOOD_MANAGEMENT_PATH)
   })

   it('should render signInRoute failure state', async () => {
      const { getByText, getByPlaceholderText, getByRole, debug } = render(
         <Router history={createMemoryHistory()}>
            <SigninRoute authStore={authStore} />
         </Router>
      )

      const username = 'test-user'
      const password = 'test-password'

      const usernameField = getByPlaceholderText('Username')
      const passwordField = getByPlaceholderText('Password')
      const logInButton = getByText('LOGIN')

      const mockFailurePromise = new Promise(function(resolve, reject) {
         reject(new Error('error'))
      }).catch(() => {})
      const mockSignInAPI = jest.fn()
      mockSignInAPI.mockReturnValue(mockFailurePromise)
      authAPI.signInAPI = mockSignInAPI

      fireEvent.change(usernameField, { target: { value: username } })
      fireEvent.change(passwordField, { target: { value: password } })
      fireEvent.click(logInButton)

      const serverError = await waitForElement(() =>
         getByText(
            /We're having some trouble completing your request. Please try again./i
         )
      )
      expect(serverError).toHaveTextContent(
         /We're having some trouble completing your request. Please try again./i
      )
   })
})
