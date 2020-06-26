import { MealsInfo } from '../services/MealInfoServices/MealsInfo.fixture'
import { MealPreference } from '../services/MealPreferenceServices/MealPreference.fixture'

import { UpdateMealInfo } from '../services/UpdateMealServices/UpdateMealInfo.fixture'
import { UpdateCustomMealInfo } from '../services/UpdateCustomMealServices/UpdateCustomMealInfo.fixture'

import { MealReviewInfo } from '../services/MealReviewInfoServices/MealReviewInfoService.fixture'
import { UpdateMealReviewInfo } from '../services/UpdateMealReviewInfoServices/UpdateMealReviewInfoService.fixture'

import { MealInfoStore } from './MealInfoStore'


const mealInfoStore = new MealInfoStore(
   new MealsInfo(),
   new MealPreference(),
   new UpdateMealInfo(),
   new UpdateCustomMealInfo(),
   new MealReviewInfo(),
   new UpdateMealReviewInfo()
)

export default { mealInfoStore }
