import {observable,action,computed} from "mobx"
import { API_INITIAL} from "@ib/api-constants";
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise'
import {MealType} from '../../Models/MealType';
import getMealInfo from '../../../fixtures/getMealInfo.json';
import spare from '../../../fixtures/spare.json';

class MealInfoStore{
    @observable getMealInfoAPIStatus;
    @observable getMealInfoAPIError;
    @observable MealsAPIService;
    @observable UpdateMealsAPIService;
    @observable mealInfo;
    constructor(MealsAPIService,UpdateMealsAPIService){
        this.MealsAPIService=MealsAPIService;
        this.UpdateMealsAPIService=UpdateMealsAPIService
        this.init();
    }
    @action.bound
    init(){
        this.getMealInfoAPIStatus=API_INITIAL;
        this.getMealInfoAPIError=null;
        this.mealInfo=[];
    }
    @action.bound
    getMealInfo(){
        // const mealInfoPromise=this.MealsAPIService.getMealsAPI();
        // return bindPromiseWithOnSuccess(mealInfoPromise)
        // .to(this.setMealInfoAPIStatus,this.setMealInfoResponse)
        // .catch(this.setMealInfoAPIError);
        this.mealInfo=getMealInfo;
    }
    @action.bound
    setMealInfoAPIStatus(apiStatus){
        this.getMealInfoAPIStatus=apiStatus;
    }
    @action.bound
    setMealInfoAPIError(error){
        this.getMealInfoAPIError=error;
    }
    @action.bound
    setMealInfoResponse(mealInfoResponse){
        this.mealInfo=mealInfoResponse.map(mealType => new MealType(product));
    }
    @action.bound
    updateMealInfo(requestObject){
        const updateMealInfoPromise=this.UpdateMealsAPIService.setMealsAPI(requestObject);
        return bindPromiseWithOnSuccess(updateMealInfoPromise)
        .to(this.setMealInfoAPIStatus,this.setUpdateMealInfoResponse)
        .catch(this.setMealInfoAPIError);
    }
    @action.bound
    setUpdateMealInfoResponse(UpdateMealInfoResponse){
        this.mealInfo=UpdateMealInfoResponse;
    }
    @action.bound
    onChangeDate(){

    }
    @action.bound
    goBackHome(){

    }
}

export {MealInfoStore}