import { networkCallWithApisauce } from '../../../Common/utils/APIUtils'
import { create } from 'apisauce'
import { apiMethods } from '../../constants/APIConstants'
import { MealInfoService } from "."

class MealsInfo implements MealInfoService{
   api: Record<string, any>

   constructor() {
      this.api = create({
         baseURL: 'https://127.0.0.1:8080/'
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
