import {observable,action,computed} from "mobx"
import { API_INITIAL} from "@ib/api-constants";
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise'
import {MealModel} from '../../Models/MealModel';

class MealInfoStore{
    @observable getMealInfoAPIStatus;
    @observable getMealInfoAPIError;
    @observable MealsAPIService;
    @observable mealPreferenceFixture
    @observable UpdateMealsAPIService;
    @observable mealInfo;
    @observable selectedMealType;
    
    constructor(MealsAPIService,mealPreferenceFixture,UpdateMealsAPIService){
        this.MealsAPIService=MealsAPIService;
        this.mealPreferenceFixture=mealPreferenceFixture;
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
        setTimeout(()=>{
            this.getMealInfoAPIStatus=apiStatus;
        },1000)
        this.getMealInfoAPIStatus=100
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
    onClickEdit(mealType){
        this.selectedMealType=new MealModel(this.mealPreferenceFixture,mealType);
        this.selectedMealType.getEditPreference();
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
    
}

export {MealInfoStore}