import { networkCallWithApisauce } from '../../../utils/APIUtils';
import { create } from 'apisauce'
import { apiMethods } from '../../constants/APIConstants'

class MealsInfo {
   api
   constructor() {
      this.api = create({
         baseURL: 'https://29daaf4be74f.ngrok.io/api/food_management/'
      })
   }
   getMealsAPI(date) {
      return networkCallWithApisauce(
         this.api,
         `menu/v1?Date=${date}`,
         {},
         apiMethods.get
      )
   }
}

export { MealsInfo }
