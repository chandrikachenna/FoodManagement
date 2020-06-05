import { networkCallWithApisauce } from '../../../utils/APIUtils'
import { create } from 'apisauce'
import { apiMethods } from '../../constants/APIConstants'

class MealsInfo {
   api
   constructor() {
      this.api = create({
         baseURL: 'https://1c1e5f6dcb86.ngrok.io/api/food_management/'
      })
   }
   getMealsAPI(date) {
      return networkCallWithApisauce(
         this.api,
         `menu/v1?Date=2020-06-03`,
         {},
         apiMethods.get
      )
   }
}

export { MealsInfo }
