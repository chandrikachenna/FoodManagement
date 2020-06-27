import getUserSignInResponse from '../../fixtures/getUserSignInResponse.json'
import AuthService from "./index.js"
import { resolveWithTimeout } from "../../../Common/utils/TestUtils"
import Config from '../../../Common/constants/EnvironmentConstants'

class AuthAPI implements AuthService{
   signInAPI(requestObject) {
      console.log(Config);
      
      return resolveWithTimeout(getUserSignInResponse)
   }
}

export { AuthAPI }
