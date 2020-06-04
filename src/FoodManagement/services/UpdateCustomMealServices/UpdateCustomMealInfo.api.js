import { networkCallWithApisauce } from '../../utils/APIUtils'
import { create } from 'apisauce'
import { apiMethods } from '../../constants/APIConstants'

class UpdateCustomMealInfo {
   api
   constructor() {
      this.api = create({
         baseURL: 'https://127.0.0.1:8080/'
      })
   }
   setCustomMealsAPI(requestObject) {
      return networkCallWithApisauce(
         this.api,
         `food_management/`,
         requestObject,
         apiMethods.post
      )
   }
}

export { UpdateCustomMealInfo }
