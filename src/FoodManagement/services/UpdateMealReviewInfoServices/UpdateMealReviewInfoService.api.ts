import { networkCallWithApisauce } from '../../../Common/utils/APIUtils'
import { create } from 'apisauce'
import { apiMethods } from '../../constants/APIConstants'
import { UpdateMealReviewService } from "."

class UpdateMealReviewInfo implements UpdateMealReviewService{
   api :Record<string, any>

   constructor() {
      this.api = create({
         baseURL: ''
      })
   }
   setMealReviewInfo(date, mealType, requestObject) {
      return networkCallWithApisauce(
         this.api,
         ``,
         requestObject,
         apiMethods.post
      )
   }
}

export { UpdateMealReviewInfo }
