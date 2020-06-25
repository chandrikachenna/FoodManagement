import { UpdateCustomMealRequest } from "../../stores/types";

export interface UpdateCustomMealService{
    setCustomMealsAPI:(
        requestObject:UpdateCustomMealRequest
    )=>Promise<{}>
}