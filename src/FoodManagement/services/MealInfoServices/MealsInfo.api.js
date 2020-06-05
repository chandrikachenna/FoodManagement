import { networkCallWithApisauce } from '../../../utils/APIUtils'
import { create } from 'apisauce'
import { apiMethods } from '../../constants/APIConstants'

class MealsInfo {
   api
   constructor() {
      this.api = create({
         baseURL: 'https://49e52d58914f.ngrok.io/'
      })
   }
   getMealsAPI(date) {
      console.log(date)
      return networkCallWithApisauce(
         this.api,
         `api/food_management/menu/v1?Date=${date}`,
         {},
         apiMethods.get
      )
   }
}

export { MealsInfo }
