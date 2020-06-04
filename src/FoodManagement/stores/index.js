
import { MealsInfo } from '../services/MealInfoServices/MealsInfo.fixture'
import { MealPreference } from '../services/MealPreferenceServices/MealPreference.fixture'
import { UpdateMealInfo } from '../services/UpdateMealServices/UpdateMealInfo.api'
import {UpdateCustomMealInfo} from '../services/UpdateCustomMealServices/UpdateCustomMealInfo.api';

import { MealInfoStore } from './MealInfoStore'

const mealsInfo = new MealsInfo()

const mealPreference = new MealPreference()
const updateMealInfo = new UpdateMealInfo()
const updateCustomMealInfo=new UpdateCustomMealInfo()

const mealInfoStore = new MealInfoStore(
   mealsInfo,
   mealPreference,
   updateMealInfo,
   updateCustomMealInfo
)

export default { mealInfoStore }
