import { networkCallWithApisauce } from '../../../utils/APIUtils';
import { create } from 'apisauce'
import { apiMethods } from '../../constants/APIConstants'
import {SIGNIN} from '../endpoints';
class AuthAPI {
   api
   constructor() {
      this.api = create({
         baseURL: 'https://cb018461fabd.ngrok.io/api/food_management/'
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
