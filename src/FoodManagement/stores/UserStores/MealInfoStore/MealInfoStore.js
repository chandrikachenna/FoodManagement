import {observable,action,computed} from "mobx"
import { API_INITIAL} from "@ib/api-constants";
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise'
import {MealType} from '../../Models/MealType';
import getMealInfo from '../../../fixtures/getMealInfo.json'

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
        // .to(this.setGetProductListAPIStatus,this.setProductListResponse)
        // .catch(this.setGetProductListAPIError);
        this.mealInfo=JSON.stringify(getMealInfo);
    }
    @action.bound
    setGetProductListAPIStatus(apiStatus){
        this.getMealInfoAPIStatus=apiStatus;
    }
    @action.bound
    setGetProductListAPIError(error){
        this.getMealInfoAPIError=error;
    }
    @action.bound
    setProductListResponse(mealInfoResponse){
        this.mealInfo=mealInfoResponse.map(mealType => new MealType(product));
    }
}

export {MealInfoStore}