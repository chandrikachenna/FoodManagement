import { MealReviewInfoResponse } from "../../stores/types";

export interface MealReviewService{
    getMealReviewInfo:(date:Date,mealType:string)=>Promise<MealReviewInfoResponse>
}