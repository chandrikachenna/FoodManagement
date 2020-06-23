import { observable, action } from 'mobx'
import { API_INITIAL } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { MealItemModel } from '../MealItemModel'
import { UpdateMealInfo } from "../../../services/UpdateMealServices/UpdateMealInfo.fixture"
import { UpdateCustomMealInfo } from "../../../services/UpdateCustomMealServices/UpdateCustomMealInfo.fixture"

class MealInfoItemModel {
   @observable getMealItemsAPIStatus:number=API_INITIAL
   @observable getMealItemsAPIError:string|null|number=null
   @observable editPreferenceAPI
   @observable mealItemsInfo:object=[]
   @observable mealType:string=''
   @observable date:Date
   @observable mealPreference:object[]=[]

   @observable getUpdateMealInfoAPIStatus:number=API_INITIAL
   @observable getUpdateMealInfoAPIError:string|null|number=null
   @observable updateMealInfoService:UpdateMealInfo
   @observable updateCustomMealInfoService:UpdateCustomMealInfo
   @observable updateMealInfoResponse:object|null=null

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
      this.updateMealInfoResponse = null
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
      console.log(apiStatus)
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
   setMealItemsResponse(mealItemsResponse:any) {
      this.mealPreference = mealItemsResponse['user_meal_format']
      Object.entries(mealItemsResponse['meal_preferences']).forEach(
         ([mealFormate, mealItemsList]) => {
            let ItemModel:any = []
            mealItemsList.forEach(item => {
               ItemModel.push(new MealItemModel(item))
            })
            this.mealItemsInfo.push(ItemModel)
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
   setUpdateMealInfoResponse(updateMealInfoResponse) {
      this.updateMealInfoResponse = updateMealInfoResponse
   }
   @action.bound
   updateMealInfo(requestObject, isCustomed) {
      if (isCustomed) {
         const updateMealInfoPromise = this.updateCustomMealInfoService.setCustomMealsAPI(
            requestObject
         )
         return bindPromiseWithOnSuccess(updateMealInfoPromise)
            .to(this.setUpdateMealInfoAPIStatus, this.setUpdateMealInfoResponse)
            .catch(this.setUpdateMealInfoAPIError)
      } else {
         const updateMealInfoPromise = this.updateMealInfoService.setMealsAPI(
            requestObject
         )
         return bindPromiseWithOnSuccess(updateMealInfoPromise)
            .to(this.setUpdateMealInfoAPIStatus, this.setUpdateMealInfoResponse)
            .catch(this.setUpdateMealInfoAPIError)
      }
   }
}
export { MealInfoItemModel }
