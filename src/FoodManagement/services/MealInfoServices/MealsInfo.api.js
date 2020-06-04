import { networkCallWithApisauce } from '../../utils/APIUtils'
import { create } from 'apisauce'
import { apiMethods } from '../../constants/APIConstants'

class MealsInfo {
   api
   constructor() {
      this.api = create({
         baseURL: 'http://127.0.0.1:4040/'
      })
   }
   getMealsAPI(date) {
      return networkCallWithApisauce(
         this.api,
         `food_management/menu/v1?date=${date}`,
         {},
         apiMethods.get
      )
   }
}

export { MealsInfo }
