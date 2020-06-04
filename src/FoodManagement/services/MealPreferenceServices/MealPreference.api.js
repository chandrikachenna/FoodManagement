import { networkCallWithApisauce } from '../../utils/APIUtils'
import { create } from 'apisauce'
import { apiMethods } from '../../constants/APIConstants'

class MealPreference {
   api
   constructor() {
      this.api = create({
         baseURL: 'https://127.0.0.1:8080/'
      })
   }
   getMealPreferenceAPI(date, mealType) {
      return networkCallWithApisauce(
         this.api,
         `food_management/set-meal-preference?date=${date}&meal_type=${mealType.toLowerCase()}
         `,
         {},
         apiMethods.get
      )
   }
}

export { MealPreference }
