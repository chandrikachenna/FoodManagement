import {GetMealInfoResponse} from '../../stores/types'

export interface MealInfoService{
    getMealsAPI:(date:Date)=>Promise<GetMealInfoResponse>
}