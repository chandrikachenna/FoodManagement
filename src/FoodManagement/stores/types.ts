export interface MealItemObject{
	meal_item:string
}

export interface MealTypeObject{
	meal_type:string
	meal_format:string
	open_time:string
	close_time:string
	meal_items:Array<MealItemObject>
	edit_preference_dead_line:string
}

export interface GetMealInfoResponse{
	break_fast:MealTypeObject
	lunch:MealTypeObject
	dinner:MealTypeObject
}



export interface MealPreferenceItemObject{
	item: {
		item_id:number
		name:string
		catageory:string
		unit:string
		quantity:number
	}
}

export interface MealPreferenceObject{
	item_id:number
		name:string
		catageory:string
		unit:string
		quantity:number
}

export interface MealPreferenceInfoResponse{
	user_meal_format:string
	meal_preferences:{
		full_meal:Array<MealPreferenceItemObject>
		half_meal:Array<MealPreferenceItemObject>
		custom:Array<MealPreferenceItemObject>
	}
}

export interface UpdateCustomMealRequest{
	user_meal_format:string
	meal_preferences:Array<MealPreferenceItemObject>
}

export interface UpdateMealRequest{
	user_meal_format:string 
}

export interface MealReviewItemObject{
	item_name:string
	quality_rating:number
	taste_rating:number
}

export interface MealReviewInfoResponse{
	items:Array<MealReviewItemObject>
}

export interface UpdateMealReviewRequest{
	user_reveiw:string
	items:Array<MealReviewItemObject>
}