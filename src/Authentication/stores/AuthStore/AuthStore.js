import { observable, action } from 'mobx'
import { API_INITIAL } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { setAccessToken, clearUserSession, getAccessToken} from '../../utils/StorageUtils'
import {getUserDisplayableErrorMessage} from '../../../utils/APIUtils';
class AuthStore {
   @observable getUserSignInAPIStatus
   @observable getUserSignInAPIError
   @observable Access_token
   authAPIService
   constructor(authAPIService) {
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
      console.log(this.getUserSignInAPIError);
   }
   @action.bound
   setUserSignInAPIResponse(SignInAPIResponse) {
      this.Access_token = SignInAPIResponse['access_token']
      console.log(SignInAPIResponse)
      setAccessToken(this.Access_token)
      console.log(getAccessToken())
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
   }
}
export { AuthStore }
