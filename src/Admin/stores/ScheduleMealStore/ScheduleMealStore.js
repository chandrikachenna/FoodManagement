import { observable, action } from "mobx";
import { API_INITIAL} from "@ib/api-constants";
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise'
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
    setScheduleMealInfoAPIStatus(apiStatus){
        this.getScheduleMealInfoAPIStatus=apiStatus;
        
    }
    @action.bound
    setScheduleMealInfoAPIError(error){
        this.getScheduleMealInfoAPIError=error;
    }
    @action.bound
    setScheduleMealInfoResponse(mealInfoResponse){
        Object.entries(mealInfoResponse[0]).forEach(([mealType, mealItemsList]) => {
            let mealItems=[];
           mealItemsList.forEach((item)=>{
               mealItems.push(new MealItem(item));
           })
           this.scheduleMealInfo.push(mealItems);
        })
        console.log(this.scheduleMealInfo);
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
}

export {ScheduleMealStore} 