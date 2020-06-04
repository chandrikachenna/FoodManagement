import { networkCallWithApisauce } from '../../utils/APIUtils'
import { create } from 'apisauce'
import { apiMethods } from '../../constants/APIConstants'

class MealsInfo {
   api
   constructor() {
      this.api = create({
         baseURL: 'https://bf46d11bd7f0.ngrok.io/'
      })
   }
   getMealsAPI(date) {
      return networkCallWithApisauce(
         this.api,
         `api/food_management/menu/v1?date=${date}`,
         {},
         apiMethods.get
      )
   }
}

export { MealsInfo }
