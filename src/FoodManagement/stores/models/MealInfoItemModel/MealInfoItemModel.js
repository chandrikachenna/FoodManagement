import { observable, action } from 'mobx'
import { API_INITIAL } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { MealItemModel } from '../MealItemModel'

class MealInfoItemModel {
   @observable getMealItemsAPIStatus
   @observable getMealItemsAPIError
   @observable editPreferenceAPI
   @observable mealItemsInfo
   @observable mealType
   @observable date
   @observable mealPreference
   constructor(api, mealType, timeCounter) {
      this.editPreferenceAPI = api
      this.mealType = mealType
      this.date = timeCounter
      this.init()
   }
   @action.bound
   init() {
      this.getMealItemsAPIStatus = API_INITIAL
      this.getMealItemsAPIError = null
      this.mealItemsInfo = []
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
      Object.entries(mealItemsResponse['meal_preferences']).forEach(
         ([mealFormate, mealItemsList]) => {
            let ItemModel = []
            mealItemsList.forEach(item => {
               ItemModel.push(new MealItemModel(item))
            })
            this.mealItemsInfo.push(ItemModel)
         }
      )
   }
   @action.bound
   onClickSkipMeal() {
      console.log('post requested updated mealItems')
   }
   @action.bound
   onClickSave() {
      console.log('post requested updated mealItems')
   }
   @action.bound
   onClickBack() {
      console.log(Back)
   }
}
export { MealInfoItemModel }
