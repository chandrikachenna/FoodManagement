
import { MealsInfo } from '../services/MealInfoServices/MealsInfo.fixture'
import { MealPreference } from '../services/MealPreferenceServices/MealPreference.fixture'
import { UpdateMealInfo } from '../services/UpdateMealServices/UpdateMealInfo.api'

import { MealInfoStore } from './MealInfoStore'

const mealsInfo = new MealsInfo()
const mealPreference = new MealPreference()
const updateMealInfo = new UpdateMealInfo()

const mealInfoStore = new MealInfoStore(
   mealsInfo,
   mealPreference,
   updateMealInfo
)

export default { mealInfoStore }
