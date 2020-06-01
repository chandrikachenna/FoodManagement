import { observable, action } from "mobx";
import { API_INITIAL} from "@ib/api-constants";
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise'
import {MealItemModel} from '../MealItemModel';

class MealInfoItemModel{
    @observable getMealItemsAPIStatus;
    @observable getMealItemsAPIError;
    @observable editPreferenceAPI;
    @observable mealItemsInfo;
    @observable mealType;
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
        this.mealItemsInfo=[];
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
        setTimeout(()=>{
            this.getMealItemsAPIStatus=apiStatus;
        })
        this.getMealItemsAPIStatus=100;
    }
    @action.bound
    setMealItemsAPIError(error){
        this.getMealItemsAPIError=error;
    }
    @action.bound
    setMealItemsResponse(mealItemsResponse){
       

        Object.entries(mealItemsResponse).forEach(([mealFormate, mealItemsList]) => {
            let ItemModel=[];
            mealItemsList.forEach(item=>{
                ItemModel.push(new MealItemModel(item));
            })
            this.mealItemsInfo.push(ItemModel);
        })

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
export {MealInfoItemModel}