import {observable,action,computed} from "mobx"
import { API_INITIAL} from "@ib/api-constants";
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise'
import {MealModel} from '../../Models/MealModel';
import {MealsFixture} from '../../../services/UserServices/MealsAPIService/Meals.fixture';

class MealInfoStore{
    @observable getMealInfoAPIStatus;
    @observable getMealInfoAPIError;
    @observable MealsAPIService;
    @observable UpdateMealsAPIService;
    @observable mealInfo;
    @observable selectedMealType;
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
        const mealInfoPromise=this.MealsAPIService.getMealsAPI();
        return bindPromiseWithOnSuccess(mealInfoPromise)
        .to(this.setMealInfoAPIStatus,this.setMealInfoResponse)
        .catch(this.setMealInfoAPIError);
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
        this.mealInfo=mealInfoResponse
    }
    @action.bound
    onClickEdit(){
        const apiEdit=new MealsFixture()
        this.selectedMealType=new MealModel(apiEdit);
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