import { observable, action } from "mobx";
import { API_INITIAL} from "@ib/api-constants";
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise'


class MealModel{
    @observable getMealItemsAPIStatus;
    @observable getMealItemsAPIError;
    @observable editPreferenceAPI;
    @observable mealItems;
    constructor(api){
        this.editPreferenceAPI=api;
        this.init();
    }
    init(){
        this.getMealItemsAPIStatus=API_INITIAL;
        this.getMealItemsAPIError=null;
        this.mealItems=[];
        this.getEditPreference();
    }
    getEditPreference(){
        const mealItemsPromise=this.editPreferenceAPI.getMealsAPI();
        return bindPromiseWithOnSuccess(mealItemsPromise)
        .to(this.setMealItemsAPIStatus,this.setMealItemsResponse)
        .catch(this.setMealItemsAPIError);
    }
    @action.bound
    setMealItemsAPIStatus(apiStatus){
        this.getMealItemsAPIStatus=apiStatus;
    }
    @action.bound
    setMealItemsAPIError(error){
        this.getMealItemsAPIError=error;
    }
    @action.bound
    setMealItemsResponse(mealItemsResponse){
        this.mealItems=mealItemsResponse;
    }
}
export {MealModel}