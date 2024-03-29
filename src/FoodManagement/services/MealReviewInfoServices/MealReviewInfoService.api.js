import { networkCallWithApisauce } from '../../../Common/utils/APIUtils'
import { create } from 'apisauce'
import { apiMethods } from '../../constants/APIConstants'

class MealReviewInfo {
   api
   constructor() {
      this.api = create({
         baseURL: 'https://5277955cd80f.ngrok.io/api/food_management/'
      })
   }
   getMealReviewInfo(date, mealType) {
      return networkCallWithApisauce(
         this.api,
         `menu/v1?Date=2020-06-03`,
         {},
         apiMethods.get
      )
   }
}

export { MealReviewInfo }
