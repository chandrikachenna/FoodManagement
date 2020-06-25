import { networkCallWithApisauce } from '../../../Common/utils/APIUtils'
import { create } from 'apisauce'
import { apiMethods } from '../../constants/APIConstants'
import { MealPreferenceService } from "."

class MealPreference implements MealPreferenceService{
   api: Record<string, any>

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
