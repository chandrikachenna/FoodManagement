export interface HeadCountMealItemObject{
    name:string
    category:string
    quantity:number
    base_unit:string
}

export interface MealTypeHeadCountInfo{
    food_prepared:Array<HeadCountMealItemObject>
    full_meal_head_count:number
    half_meal_head_count:number
    skipped_meal_head_count:number
    customed_meal_head_count:number
    total_meal_head_count:number
    completed_meal_head_count:number
}

export interface GetHeadCountInfoResponse{
    breakfast:MealTypeHeadCountInfo
    lunch:MealTypeHeadCountInfo
    dinner:MealTypeHeadCountInfo
}

export interface MealScheduleMealItemObject{
    id:number
    name:string
    category:string
    base_unit:string
    full_meal_quantity:number
    half_meal_quantity:number
}

export interface GetMealScheduleInfoResponse{
    breakfast:Array<MealScheduleMealItemObject>
    lunch:Array<MealScheduleMealItemObject>
    dinner:Array<MealScheduleMealItemObject>
}