import { observable, action } from 'mobx'
import { API_INITIAL } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { MealRatingModel } from '../MealRatingModel'

class MealReviewInfoModel {
   @observable getMealReviewAPIStatus
   @observable getMealReviewAPIError
   @observable mealReviewInfoAPI
   @observable mealReviewInfo

   @observable getUpdateMealReviewAPIStatus
   @observable getUpdateMealReviewAPIError
   @observable updateMealReviewInfoAPI
   @observable updateMealReviewInfoResponse

   @observable mealType
   @observable reviewText
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
      this.updateMealReviewInfoResponse = []
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
   setMealReviewInfo(date, mealType, requestObject) {
      const mealItemsPromise = this.updateMealReviewInfoAPI.setMealReviewInfo(
         date,
         mealType,
         requestObject
      )
      return bindPromiseWithOnSuccess(mealItemsPromise)
         .to(this.setUpdateMealReviewAPIStatus, this.setMealReviewInfoResponse)
         .catch(this.setUpdateMealReviewAPIError)
   }
   @action.bound
   setUpdateMealReviewAPIStatus(apiStatus) {
      this.getUpdateMealReviewAPIStatus = apiStatus
   }
   @action.bound
   setUpdateMealReviewAPIError(error) {
      this.getUpdateMealReviewAPIError = error
   }
   @action.bound
   setMealReviewInfoResponse(response) {
      this.updateMealReviewInfoResponse = response
   }
   @action.bound
   onSave(date, mealType, requestObject) {
      this.setMealReviewInfo(date, mealType, requestObject)
   }
   @action.bound
   onChangeReview(reviewText) {
      this.reviewText = reviewText
      console.log(this.reviewText)
   }
}

export { MealReviewInfoModel }
