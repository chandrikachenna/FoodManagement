import { observable, action } from 'mobx'
import { API_INITIAL, APIStatus } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { MealInfoItemModel } from '../models/MealInfoItemModel'
import { MealReviewInfoModel } from '../models/MealReviewInfoModel'
import { format } from 'date-fns'

import { MealInfoService } from '../../services/MealInfoServices'
import { MealPreferenceService } from '../../services/MealPreferenceServices'
import { UpdateMealService } from '../../services/UpdateMealServices'
import { UpdateCustomMealService } from '../../services/UpdateCustomMealServices'
import { MealReviewService } from '../../services/MealReviewInfoServices'
import { UpdateMealReviewService } from '../../services/UpdateMealReviewInfoServices'
import { GetMealInfoResponse } from '../types'

class MealInfoStore {
   @observable getMealInfoAPIStatus!: APIStatus
   @observable getMealInfoAPIError!: Error | null

   mealInfoService: MealInfoService
   mealPreferenceService: MealPreferenceService
   updateMealInfoService: UpdateMealService
   updateCustomMealInfoService: UpdateCustomMealService

   @observable mealInfo!: GetMealInfoResponse | null
   @observable selectedMealTypeInfo!: MealInfoItemModel | any
   @observable selectedMealType!: string | null
   @observable timeCounter!: Date | string | number

   mealReviewInfoService: MealReviewService
   updateMealReviewInfoService: UpdateMealReviewService

   @observable selectedMealTypeReview: MealReviewInfoModel | any
   initialTimerID!: NodeJS.Timeout

   constructor(
      mealInfoService,
      mealPreferenceService,
      UpdateMealInfoService,
      updateCustomMealInfoService,
      mealReviewInfo,
      updateMealReviewInfo
   ) {
      this.mealInfoService = mealInfoService
      this.mealPreferenceService = mealPreferenceService
      this.updateMealInfoService = UpdateMealInfoService
      this.updateCustomMealInfoService = updateCustomMealInfoService
      this.mealReviewInfoService = mealReviewInfo
      this.updateMealReviewInfoService = updateMealReviewInfo
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
      this.mealInfo = null
      this.timeCounter = new Date()
      this.dateTime()
      this.selectedMealTypeReview = null
      this.selectedMealType = null
   }

   @action.bound
   async goForReview(mealType) {
      this.selectedMealType = mealType
      this.selectedMealTypeReview = new MealReviewInfoModel(
         this.selectedMealType,
         this.mealReviewInfoService,
         this.updateMealReviewInfoService
      )
      await this.selectedMealTypeReview.getMealReviewInfo(
         this.timeCounter,
         this.selectedMealType
      )
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
      this.getMealInfoAPIStatus = apiStatus
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
      this.selectedMealType = mealType
      this.selectedMealTypeInfo = new MealInfoItemModel(
         this.mealPreferenceService,
         this.selectedMealType,
         this.timeCounter,
         this.updateMealInfoService,
         this.updateCustomMealInfoService
      )
      this.selectedMealTypeInfo.getEditPreference(this.timeCounter, mealType)
   }

   @action.bound
   onChangeDate(changedDateTime) {
      clearInterval(this.initialTimerID)
      this.timeCounter = changedDateTime
      const date = format(new Date(this.timeCounter), 'yyyy-MM-dd')
      this.getMealInfo(date)
   }
}

export { MealInfoStore }
