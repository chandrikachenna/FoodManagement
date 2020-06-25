import { observable, action } from 'mobx'
import { API_INITIAL, APIStatus } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { MealItemModel } from '../MealItemModel'

import { MealPreferenceService } from "../../../services/MealPreferenceServices"
import { UpdateMealService } from "../../../services/UpdateMealServices"
import { UpdateCustomMealService } from "../../../services/UpdateCustomMealServices"

class MealInfoItemModel {
   @observable getMealItemsAPIStatus!:APIStatus
   @observable getMealItemsAPIError!:null|Error
   editPreferenceAPI:MealPreferenceService
   @observable mealItemsInfo!:Array<MealItemModel>

   @observable mealType:string=''
   @observable date:Date|string|number
   @observable mealPreference!:string
   
   @observable getUpdateMealInfoAPIStatus!:APIStatus
   @observable getUpdateMealInfoAPIError!:null|Error
   updateMealInfoService:UpdateMealService
   updateCustomMealInfoService:UpdateCustomMealService

   constructor(
      api,
      mealType,
      timeCounter,
      updateMealInfoService,
      updateCustomMealInfoService
   ) {
      this.editPreferenceAPI = api
      this.mealType = mealType
      this.date = timeCounter
      this.updateMealInfoService = updateMealInfoService
      this.updateCustomMealInfoService = updateCustomMealInfoService
      this.init()
   }
   @action.bound
   init() {
      this.getMealItemsAPIStatus = API_INITIAL
      this.getMealItemsAPIError = null
      this.mealItemsInfo = []
      this.getUpdateMealInfoAPIStatus = API_INITIAL
      this.getUpdateMealInfoAPIError = null
   }
   @action.bound
   getEditPreference(date, mealType) {
      this.date = date
      const mealItemsPromise = this.editPreferenceAPI.getMealPreferenceAPI(
         date,
         mealType
      )
      return bindPromiseWithOnSuccess(mealItemsPromise)
         .to(this.setMealItemsAPIStatus, this.setMealItemsResponse)
         .catch(this.setMealItemsAPIError)
   }
   @action.bound
   setMealItemsAPIStatus(apiStatus) {
      this.getMealItemsAPIStatus = apiStatus
   }
   @action.bound
   setMealItemsAPIError(error) {
         this.getMealItemsAPIError = error
   }
   @action.bound
   onChangeDate(date) {
      this.date = date
      this.getEditPreference(date, this.mealType)
   }
   @action.bound
   setMealItemsResponse(mealItemsResponse) {
      this.mealPreference = mealItemsResponse['user_meal_format']
      let itemModel:any=[];
      Object.entries(mealItemsResponse['meal_preferences']).forEach(
         ([mealFormate, mealItemsList]:any={}) => {
            mealItemsList.forEach(item => {
               itemModel.push(new MealItemModel(item))
            })
            this.mealItemsInfo.push(itemModel)
         }
      )
   }
   @action.bound
   setUpdateMealInfoAPIError(apiError) {
      this.getUpdateMealInfoAPIError = apiError
   }
   @action.bound  
   setUpdateMealInfoAPIStatus(apiStatus) {
      this.getUpdateMealInfoAPIStatus = apiStatus
   }
   @action.bound
   updateMealInfo(requestObject, isCustomed) {
      if (isCustomed) {
         const updateMealInfoPromise = this.updateCustomMealInfoService.setCustomMealsAPI(
            requestObject
         )
         return bindPromiseWithOnSuccess(updateMealInfoPromise)
            .to(this.setUpdateMealInfoAPIStatus, ()=>({}))
            .catch(this.setUpdateMealInfoAPIError)
      } else {
         const updateMealInfoPromise = this.updateMealInfoService.setMealsAPI(
            requestObject
         )
         return bindPromiseWithOnSuccess(updateMealInfoPromise)
            .to(this.setUpdateMealInfoAPIStatus, ()=>({}))
            .catch(this.setUpdateMealInfoAPIError)
      }
   }
}
export { MealInfoItemModel }