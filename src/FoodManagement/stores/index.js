import { MealsAPI } from '../services/MealInfoServices/Meals.api'
import { MealsFixture } from '../services/MealInfoServices/Meals.fixture'

import { MealPreferenceFixture } from '../services/MealPreferenceServices/MealPreference.fixture'

import { UpdateMealsAPI } from '../services/UpdateMealServices/UpdateMeal.api'

import { MealInfoStore } from './MealInfoStore'

const mealsAPI = new MealsAPI()
const mealsFixture = new MealsFixture()

const mealPreferenceFixture = new MealPreferenceFixture()

const updateMealsAPI = new UpdateMealsAPI()
const mealInfoStore = new MealInfoStore(
   mealsFixture,
   mealPreferenceFixture,
   updateMealsAPI
)

export default { mealInfoStore }
