import { networkCallWithApisauce } from '../../../Common/utils/APIUtils'
import { create } from 'apisauce'
import { apiMethods } from '../../constants/APIConstants'
import { UpdateMealService } from "."

class UpdateMealInfo implements UpdateMealService{
   api: Record<string, any>

   constructor() {
      this.api = create({
         baseURL: 'https://127.0.0.1:8080/'
      })
   }
   setMealsAPI(requestObject) {
      return networkCallWithApisauce(
         this.api,
         `food_management/`,
         requestObject,
         apiMethods.post
      )
   }
}

export { UpdateMealInfo }
