import { observable, action } from 'mobx'
import { API_INITIAL, APIStatus } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'

import {
   setAccessToken,
   clearUserSession,
   clearRole,
   setRole
} from '../../../Common/utils/StorageUtils'
import { getUserDisplayableErrorMessage } from '../../../Common/utils/APIUtils'
import AuthService from "../../services/AuthService"
import { GetAuthResponse } from "../types"

class AuthStore {
   @observable getUserSignInAPIStatus!:APIStatus
   @observable getUserSignInAPIError!:string|null
   signInAPIResponse!:GetAuthResponse
   authAPIService:AuthService
   constructor(authAPIService:AuthService) {
      this.authAPIService = authAPIService
      this.init()
   }
   @action.bound
   init() {
      this.getUserSignInAPIStatus = API_INITIAL
      this.getUserSignInAPIError = null
   }
   @action.bound
   setGetUserSignInAPIStatus(apiStatus) {
      this.getUserSignInAPIStatus = apiStatus
   }
   @action.bound
   setGetUserSignInAPIError(error) {
      this.getUserSignInAPIError = getUserDisplayableErrorMessage(error)
   }
   @action.bound
   setUserSignInAPIResponse(SignInAPIResponse:GetAuthResponse|null) {
      if(SignInAPIResponse){
         this.signInAPIResponse = SignInAPIResponse
      }
      
      setAccessToken(this.signInAPIResponse.access_token)
      setRole(this.signInAPIResponse.role)
   }
   @action.bound
   userSignIn(onSuccess, onFailure, requestObject) {
      const signInPromise = this.authAPIService.signInAPI(requestObject)
      return bindPromiseWithOnSuccess(signInPromise)
         .to(this.setGetUserSignInAPIStatus, response => {
            this.setUserSignInAPIResponse(response)
            onSuccess()
         })
         .catch(error => {
            this.setGetUserSignInAPIError(error)
            onFailure()
         })
   }
   @action.bound
   userSignOut() {
      clearUserSession()
      clearRole()
   }
}
export { AuthStore }
