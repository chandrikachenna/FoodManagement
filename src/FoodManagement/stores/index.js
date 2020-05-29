import {MealsAPI} from '../services/UserServices/MealsAPIService/MealsAPI';
import {MealsFixture} from '../services/UserServices/MealsAPIService/Meals.fixture';
import {UpdateMealsAPI} from '../services/UserServices/UpdateMealsAPIService/UpdateMealsAPI';

import {MealInfoStore} from './UserStores/MealInfoStore';


const mealsAPI=new MealsAPI();
const mealsFixture=new MealsFixture();

const updateMealsAPI=new UpdateMealsAPI()
const mealInfoStore=new MealInfoStore(mealsFixture,updateMealsAPI);

export default {mealInfoStore}