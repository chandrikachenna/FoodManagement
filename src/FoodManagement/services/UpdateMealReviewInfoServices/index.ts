import { UpdateMealReviewRequest } from "../../stores/types";

export interface UpdateMealReviewService{
    setMealReviewInfo:(
        date:Date,mealType:string,
        requestObject:UpdateMealReviewRequest
    )=>Promise<{}>
}