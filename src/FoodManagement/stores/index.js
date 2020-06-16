import { MealsInfo } from '../services/MealInfoServices/MealsInfo.fixture'
import { MealPreference } from '../services/MealPreferenceServices/MealPreference.fixture'

import { UpdateMealInfo } from '../services/UpdateMealServices/UpdateMealInfo.api'
import { UpdateCustomMealInfo } from '../services/UpdateCustomMealServices/UpdateCustomMealInfo.api'

import { MealReviewInfo } from '../services/MealReviewInfoServices/MealReviewInfoService.fixture'
import { UpdateMealReviewInfo } from '../services/UpdateMealReviewInfoServices/UpdateMealReviewInfoService.api'

import { MealInfoStore } from './MealInfoStore'


const mealsInfo = new MealsInfo()

const mealPreference = new MealPreference()
const updateMealInfo = new UpdateMealInfo()
const updateCustomMealInfo = new UpdateCustomMealInfo()
const mealReviewInfo = new MealReviewInfo()
const updateMealReviewInfo = new UpdateMealReviewInfo()

const mealInfoStore = new MealInfoStore(
   mealsInfo,
   mealPreference,
   updateMealInfo,
   updateCustomMealInfo,
   mealReviewInfo,
   updateMealReviewInfo
)



export default { mealInfoStore }
