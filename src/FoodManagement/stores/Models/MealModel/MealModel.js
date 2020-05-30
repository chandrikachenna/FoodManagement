import { observable, action } from "mobx";
import { API_INITIAL} from "@ib/api-constants";
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise'


class MealModel{
    @observable getMealItemsAPIStatus;
    @observable getMealItemsAPIError;
    @observable editPreferenceAPI;
    @observable mealItems;
    constructor(api,mealType){
        this.editPreferenceAPI=api;
        this.mealType=mealType;
        this.init();
    }
    @action.bound
    init(){
        this.getMealItemsAPIStatus=API_INITIAL;
        this.getMealItemsAPIError=null;
        this.mealItems=[];
    }
    @action.bound
    getEditPreference(){
        const mealItemsPromise=this.editPreferenceAPI.getMealPreferenceAPI();
        return bindPromiseWithOnSuccess(mealItemsPromise)
        .to(this.setMealItemsAPIStatus,this.setMealItemsResponse)
        .catch(this.setMealItemsAPIError)
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
        this.mealItems.mealType=this.mealType;
    }
    @action.bound
    onClickSkipMeal(){
        console.log('post requested updated mealItems');
    }
    @action.bound
    onClickSave(){
        console.log('post requested updated mealItems');
    }
    @action.bound
    onClickBack(){
        console.log(Back);
    }
    @action.bound
    onSelectedDate(){
        
    }
}
export {MealModel}