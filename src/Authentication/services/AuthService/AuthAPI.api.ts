import { networkCallWithApisauce } from '../../utils/APIUtils'
import { create } from 'apisauce'
import { apiMethods } from '../../constants/APIConstants'
import { SIGNIN } from '../endpoints'
import AuthService from "."

class AuthAPI implements AuthService{
   api
   constructor() {
      this.api = create({
         baseURL: 'https://29daaf4be74f.ngrok.io/api/food_management/'
      })
   }
   signInAPI(requestObject) {
      return networkCallWithApisauce(
         this.api,
         SIGNIN,
         requestObject,
         apiMethods.post
      )
   }
}
export { AuthAPI }
