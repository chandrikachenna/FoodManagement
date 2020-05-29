import {MealsAPI} from '../services/UserServices/MealsAPIService/MealsAPI';
import {MealsFixture} from '../services/UserServices/MealsAPIService/Meals.fixture';

import {MealPreferenceFixture} from '../services/UserServices/MealPreferenceServices/MealPreference.fixture';

import {UpdateMealsAPI} from '../services/UserServices/UpdateMealsAPIService/UpdateMealsAPI';

import {MealInfoStore} from './UserStores/MealInfoStore';


const mealsAPI=new MealsAPI();
const mealsFixture=new MealsFixture();

const mealPreferenceFixture=new MealPreferenceFixture()

const updateMealsAPI=new UpdateMealsAPI()
const mealInfoStore=new MealInfoStore(mealsFixture,mealPreferenceFixture,updateMealsAPI);

export default {mealInfoStore}