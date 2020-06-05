import {
   API_INITIAL,
   API_FETCHING,
   API_SUCCESS,
   API_FAILED
} from '@ib/api-constants'
import {AuthAPI} from '../../services/AuthService/AuthAPI.api'
import getUserSignInResponse from '../../fixtures/getUserSignInResponse.json'

import { AuthStore } from '.'

describe('AuthStore Tests', () => {
   let authAPI
   let authStore

   beforeEach(() => {
      authAPI = new AuthAPI()
      authStore = new AuthStore(authAPI)
   })

   it('should test initialising auth store', () => {
      expect(authStore.getUserSignInAPIStatus).toBe(API_INITIAL)
      expect(authStore.getUserSignInAPIError).toBe(null)
   })

   it('should test userSignInAPI data fetching state', () => {
      const onSuccess = jest.fn()
      const onFailure = jest.fn()
      const requestObject = { username: 'test-user', password: 'test-pwd' }

      const mockLoadingPromise = new Promise(function(response, rejects) {})
      const mockSignInAPI = jest.fn()
      mockSignInAPI.mockReturnValue(mockLoadingPromise)
      AuthAPI.signInAPI = mockSignInAPI

      authStore.userSignIn(onSuccess, onFailure, requestObject)
      expect(authStore.getUserSignInAPIStatus).toBe(API_FETCHING)
      expect(onSuccess).not.toBeCalled()
      expect(onFailure).not.toBeCalled()
   })
   // it('should test userSignInAPI success state', async () => {
   //    const onSuccess = jest.fn()
   //    const onFailure = jest.fn()
   //    const requestObject = { username: 'test-user', password: 'test-pwd' }

   //    const mockSuccessPromise = new Promise(function(resolve, rejects) {
   //       resolve(getUserSignInResponse)
   //    })
   //    const mockSignInAPI = jest.fn()
   //    mockSignInAPI.mockReturnValue(mockSuccessPromise)
   //    AuthAPI.signInAPI = mockSignInAPI

   //    await authStore.userSignIn(onSuccess, onFailure, requestObject)
   //    expect(authStore.getUserSignInAPIStatus).toBe(API_SUCCESS)
   //    expect(onSuccess).toBeCalled()
   // })
   it('should test userSignInAPI failure state', async () => {
      const onSuccess = jest.fn()
      const onFailure = jest.fn()
      const requestObject = { username: 'test-user', password: 'test-pwd' }

      const mockFailurePromise = new Promise(function(resolve, reject) {
         reject(new Error('error'))
      })
      const mockSignInAPI = jest.fn()
      mockSignInAPI.mockReturnValue(mockFailurePromise)
      authAPI.signInAPI = mockSignInAPI

      await authStore.userSignIn(onSuccess, onFailure, requestObject)
      expect(authStore.getUserSignInAPIStatus).toBe(API_FAILED)
      expect(authStore.getUserSignInAPIError).toBe('error')
      expect(onFailure).toBeCalled()
   })
   it('should test user sign-out', () => {
      authStore.userSignOut()
      expect(authStore.getUserSignInAPIStatus).toBe(API_INITIAL)
      expect(authStore.getUserSignInAPIError).toBe(null)
   })

})
