import {MealsAPI} from '../services/UserServices/MealsAPIService/MealsAPI';
import {UpdateMealsAPI} from '../services/UserServices/UpdateMealsAPIService/UpdateMealsAPI';

import {MealInfoStore} from './UserStores/MealInfoStore';
import { defaultView } from "../../Authentication/common/LoadingWrapperWithFailure/FailureView.stories";

const mealsAPI=new MealsAPI()
const updateMealsAPI=new UpdateMealsAPI()
const mealInfoStore=new MealInfoStore(mealsAPI,updateMealsAPI);

export default {mealInfoStore}