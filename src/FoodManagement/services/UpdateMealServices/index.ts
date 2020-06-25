import { UpdateMealRequest } from "../../stores/types";

export interface UpdateMealService{
    setMealsAPI:(
        requestObject:UpdateMealRequest
    )=>Promise<{}>
}