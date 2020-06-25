import getUserSignInResponse from '../../fixtures/getUserSignInResponse.json'
import AuthService from "./index.js"
import { resolveWithTimeout } from "../../../Common/utils/TestUtils"

class AuthAPI implements AuthService{
   signInAPI(requestObject) {
      return resolveWithTimeout(getUserSignInResponse)
   }
}

export { AuthAPI }
