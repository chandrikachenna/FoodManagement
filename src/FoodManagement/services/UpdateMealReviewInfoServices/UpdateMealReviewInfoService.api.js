import { networkCallWithApisauce } from '../../../utils/APIUtils'
import { create } from 'apisauce'
import { apiMethods } from '../../constants/APIConstants'

class UpdateMealReviewInfo {
   api
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
