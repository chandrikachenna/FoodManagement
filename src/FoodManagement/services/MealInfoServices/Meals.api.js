import { networkCallWithApisauce } from '../../utils/APIUtils'
import { create } from 'apisauce'
import { apiMethods } from '../../constants/APIConstants'

class MealsAPI {
   api
   constructor() {
      this.api = create({
         baseURL: 'https://127.0.0.1:8080/'
      })
   }
   getMealsAPI() {
      const date = '2020-05-28'
      return networkCallWithApisauce(
         this.api,
         `food_management/menu/v1?date=${date}`,
         {},
         apiMethods.get
      )
   }
}

export { MealsAPI }
