import { observable, action } from 'mobx'
import { API_INITIAL } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { MealInfoItemModel } from '../models/MealInfoItemModel'

class MealInfoStore {
   @observable getMealInfoAPIStatus
   @observable getMealInfoAPIError

   @observable getUpdateMealInfoAPIStatus
   @observable getUpdateMealInfoAPIError

   @observable mealInfoService
   @observable mealPreferenceService
   @observable updateMealInfoService
   @observable updateCustomMealInfoService

   @observable mealInfo
   @observable selectedMealTypeInfo
   @observable selectedMealType
   @observable timeCounter

   initialTimerID
   constructor(mealInfoService, mealPreferenceService, UpdateMealInfoService ,updateCustomMealInfoService) {
      this.mealInfoService = mealInfoService
      this.mealPreferenceService = mealPreferenceService
      this.updateMealInfoService = UpdateMealInfoService
      this.updateCustomMealInfoService=updateCustomMealInfoService
      this.init()
   }
   @action.bound
   dateTime = () => {
      if (this.selectedMealTypeInfo)
         this.timeCounter = this.selectedMealTypeInfo.date
      else {
         this.initialTimerID = setInterval(() => {
            this.timeCounter = new Date()
         }, 1000)
      }
   }
   @action.bound
   init() {
      this.getMealInfoAPIStatus = API_INITIAL
      this.getMealInfoAPIError = null
      this.mealInfo = []
      this.dateTime()
   }

   @action.bound
   getMealInfo(date) {
      const mealInfoPromise = this.mealInfoService.getMealsAPI(date)
      return bindPromiseWithOnSuccess(mealInfoPromise)
         .to(this.setMealInfoAPIStatus, this.setMealInfoResponse)
         .catch(this.setMealInfoAPIError)
   }
   @action.bound
   setMealInfoAPIStatus(apiStatus) {
      setTimeout(()=>{
         this.getMealInfoAPIStatus = apiStatus
      })
      this.getMealInfoAPIStatus=100;
   }
   @action.bound
   setMealInfoAPIError(error) {
      this.getMealInfoAPIError = error
   }
   @action.bound
   setMealInfoResponse(mealInfoResponse) {
      this.mealInfo = mealInfoResponse
   }
   @action.bound
   onClickEdit(mealType) {
      this.selectedMealTypeInfo = new MealInfoItemModel(
         this.mealPreferenceService,
         mealType,
         this.timeCounter
      )
      this.selectedMealTypeInfo.getEditPreference(this.timeCounter, mealType)
      this.selectedMealType = mealType
   }
   @action.bound
   updateMealInfo(requestObject,isCustomed) {
      console.log('hello...')
      if(isCustomed){
         const updateMealInfoPromise = this.updateCustomMealInfoService.setCustomMealsAPI(
            requestObject
         )
         return bindPromiseWithOnSuccess(updateMealInfoPromise)
            .to(this.setUpdateMealInfoAPIStatus, this.setUpdateMealInfoResponse)
            .catch(this.setUpdateMealInfoAPIError)
      }
      else{
         const updateMealInfoPromise = this.updateMealInfoService.setMealsAPI(
            requestObject
         )
         return bindPromiseWithOnSuccess(updateMealInfoPromise)
            .to(this.setUpdateMealInfoAPIStatus, this.setUpdateMealInfoResponse)
            .catch(this.setUpdateMealInfoAPIError)
      }
      
   }
   @action.bound
   setUpdateMealInfoAPIError(apiError){
      getUpdateMealInfoAPIError=apiError
   }
   @action.bound
   setUpdateMealInfoAPIStatus(apiStatus){
      getUpdateMealInfoAPIStatus=apiStatus
   }
   @action.bound
   setUpdateMealInfoResponse(updateMealInfoResponse) {
      this.updateMealInfoResponse = updateMealInfoResponse;
   }
   @action.bound
   onChangeDate(changedDateTime) {
      clearInterval(this.initialTimerID)
      this.timeCounter = changedDateTime
      this.getMealInfo(this.timeCounter)
   }
}

export { MealInfoStore }
