import { networkCallWithApisauce } from '../../../utils/APIUtils'
import { create } from 'apisauce'
import { apiMethods } from '../../constants/APIConstants'
class AuthAPI {
   api
   constructor() {
      this.api = create({
         baseURL: 'https://e3c08171d6b8.ngrok.io/api/food_management/'
      })
   }
   signInAPI(requestObject) {
      return networkCallWithApisauce(
         this.api,
         'v1/signin/',
         requestObject,
         apiMethods.post
      )
   }
}

export { AuthAPI }
