import { observable, action } from "mobx";
import { API_INITIAL} from "@ib/api-constants";
import {MealItem} from '../models/MealItem';

class ScheduleMealStore{
    @observable scheduleMealInfo;
    @observable getScheduleMealInfoAPIStatus;
    @observable getScheduleMealInfoAPIError;
    @observable scheduleMealInfoService;
    constructor(scheduleMealInfoService){
        this.scheduleMealInfoService=scheduleMealInfoService;
        this.init();
    }
    @action.bound
    init(){
        this.scheduleMealInfo=[];
        this.getScheduleMealInfoAPIStatus=API_INITIAL;
        this.getScheduleMealInfoAPIError=null
    }
    @action.bound
    onClickScheduleMeal(){
        this.getScheduleMealInfo();
    }
    setScheduleMealInfoAPIStatus(apiStatus){
        setTimeout(()=>{
            this.getScheduleMealInfoAPIStatus=apiStatus;
        },1000)
        this.getScheduleMealInfoAPIStatus=100
    }
    @action.bound
    setScheduleMealInfoAPIError(error){
        this.getScheduleMealInfoAPIError=error;
    }
    @action.bound
    setScheduleMealInfoResponse(mealInfoResponse){

    }
    @action.bound
    getScheduleMealInfo(){
        const scheduleMealInfoPromise=this.scheduleMealInfoService.getScheduleMealInfo();
            return bindPromiseWithOnSuccess(scheduleMealInfoPromise)
            .to(this.setScheduleMealInfoAPIStatus,this.setScheduleMealInfoResponse)
            .catch(this.setScheduleMealInfoAPIError);
    }
    @action.bound
    onClickRemoveMealItem(){

    }
    @action.bound
    onClickAddMealItem(){

    }
    @action.bound
    onChangeDate(){

    }
    @action.bound
    onSaveUpdate(){

    }
    @action.bound
    onClickBack(){

    }
}

export {ScheduleMealStore} 