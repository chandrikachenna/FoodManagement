import { observable, action } from 'mobx'
import { API_INITIAL, APIStatus } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { MealRatingModel } from '../MealRatingModel'
import { MealReviewInfo } from "../../../services/MealReviewInfoServices/MealReviewInfoService.fixture"
import { UpdateMealReviewInfo } from "../../../services/UpdateMealReviewInfoServices/UpdateMealReviewInfoService.fixture"

class MealReviewInfoModel {
   @observable getMealReviewAPIStatus!:APIStatus
   @observable getMealReviewAPIError!:null|Error
   @observable mealReviewInfoAPI:MealReviewInfo
   @observable mealReviewInfo!:Array<MealRatingModel>

   @observable getUpdateMealReviewAPIStatus!:APIStatus
   @observable getUpdateMealReviewAPIError!:null|Error
   @observable updateMealReviewInfoAPI:UpdateMealReviewInfo

   @observable mealType:string
   @observable reviewText!:string|null
   constructor(mealType, mealReviewInfoAPI, updateMealReviewInfoAPI) {
      this.mealReviewInfoAPI = mealReviewInfoAPI
      this.updateMealReviewInfoAPI = updateMealReviewInfoAPI
      this.mealType = mealType
      this.init()
   }
   @action.bound
   init() {
      this.getMealReviewAPIStatus = API_INITIAL
      this.getMealReviewAPIError = null
      this.mealReviewInfo = []
      this.reviewText = null

      this.getUpdateMealReviewAPIStatus = API_INITIAL
      this.getUpdateMealReviewAPIError = null
   
   }
   @action.bound
   setMealReviewAPIStatus(apiStatus) {
      this.getMealReviewAPIStatus = apiStatus
   }
   @action.bound
   setMealReviewAPIError(error) {
      this.getMealReviewAPIError = error
   }
   @action.bound
   setMealReviewAPIResponse(response) {
      this.mealReviewInfo = response.items.map(
         item => new MealRatingModel(item)
      )
   }
   @action.bound
   getMealReviewInfo(date, mealType) {
      const mealItemsPromise = this.mealReviewInfoAPI.getMealReviewInfo(
         date,
         mealType
      )
      return bindPromiseWithOnSuccess(mealItemsPromise)
         .to(this.setMealReviewAPIStatus, this.setMealReviewAPIResponse)
         .catch(this.setMealReviewAPIError)
   }
   @action.bound
   setUpdateMealReviewAPIStatus(apiStatus) {
      this.getUpdateMealReviewAPIStatus = apiStatus
   }
   @action.bound
   setUpdateMealReviewAPIError(error) {
      this.getUpdateMealReviewAPIError = error
   }
   setMealReviewInfo(date, mealType, requestObject) {
      const mealItemsPromise = this.updateMealReviewInfoAPI.setMealReviewInfo(
         date,
         mealType,
         requestObject
      )
      return bindPromiseWithOnSuccess(mealItemsPromise)
         .to(this.setUpdateMealReviewAPIStatus, ()=>({}))
         .catch(this.setUpdateMealReviewAPIError)
   }
  
  
}

export { MealReviewInfoModel }
