import { observable, action } from 'mobx'
import { API_INITIAL, APIStatus } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { MealTypeInfoModel } from '../models/MealTypeInfoMode'
import { ScheduleMealInfoService } from "../../services/ScheduleMealServices"

class ScheduleMealStore {
   @observable scheduleMealInfo!:Array<MealTypeInfoModel>
   @observable getScheduleMealInfoAPIStatus!:APIStatus
   @observable getScheduleMealInfoAPIError!:Error|null
   @observable scheduleMealInfoService:ScheduleMealInfoService
   constructor(scheduleMealInfoService) {
      this.scheduleMealInfoService = scheduleMealInfoService
      this.init()
   }
   @action.bound
   init() {
      this.scheduleMealInfo = []
      this.getScheduleMealInfoAPIStatus = API_INITIAL
      this.getScheduleMealInfoAPIError = null
   }
   @action.bound
   setScheduleMealInfoAPIStatus(apiStatus) {
      this.getScheduleMealInfoAPIStatus = apiStatus
   }
   @action.bound
   setScheduleMealInfoAPIError(error) {
      this.getScheduleMealInfoAPIError = error
   }
   @action.bound
   setScheduleMealInfoResponse(mealInfoResponse) {
      Object.entries(mealInfoResponse).forEach(([mealType, mealItemsList]) => {
         this.scheduleMealInfo.push(new MealTypeInfoModel(mealItemsList))
      })
   }
   @action.bound
   getScheduleMealInfo() {
      const scheduleMealInfoPromise = this.scheduleMealInfoService.getScheduleMealInfo()
      return bindPromiseWithOnSuccess(scheduleMealInfoPromise)
         .to(
            this.setScheduleMealInfoAPIStatus,
            this.setScheduleMealInfoResponse
         )
         .catch(this.setScheduleMealInfoAPIError)
   }
   @action.bound
   onClickRemoveMealItem() {}
   @action.bound
   onClickAddMealItem() {}
   @action.bound
   onChangeDate() {}
   @action.bound
   onSaveUpdate() {}
}

export { ScheduleMealStore }
