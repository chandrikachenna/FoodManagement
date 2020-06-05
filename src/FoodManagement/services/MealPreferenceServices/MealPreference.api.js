import { networkCallWithApisauce } from '../../../utils/APIUtils'
import { create } from 'apisauce'
import { apiMethods } from '../../constants/APIConstants'

class MealPreference {
   api
   constructor() {
      this.api = create({
         baseURL: 'https://5277955cd80f.ngrok.io/api/food_management/'
      })
   }
   getMealPreferenceAPI(date, mealType) {
      return networkCallWithApisauce(
         this.api,
         `set-meal-preference?date=${date}&meal_type=${mealType.toLowerCase()}
         `,
         {},
         apiMethods.get
      )
   }
}

export { MealPreference }
