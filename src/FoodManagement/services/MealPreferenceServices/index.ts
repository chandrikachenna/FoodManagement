import {MealPreferenceInfoResponse} from '../../stores/types'

export interface MealPreferenceService{
    getMealPreferenceAPI:(date:Date,mealType:string)=>Promise<MealPreferenceInfoResponse>
}