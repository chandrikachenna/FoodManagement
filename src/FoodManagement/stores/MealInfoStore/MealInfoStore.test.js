import {
   API_INITIAL,
   API_FAILED,
   API_SUCCESS,
   API_FETCHING
} from '@ib/api-constants'

import { MealsInfo } from '../../services/MealInfoServices/MealsInfo.fixture'
import getMealInfo from '../../fixtures/getMealInfo.json'

import { MealPreference } from "../../services/MealPreferenceServices/MealPreference.fixture"
import getMealPreferenceInfo from '../../fixtures/getMealPreferenceInfo.json'

import {UpdateMealInfo} from '../../services/UpdateMealServices/UpdateMealInfo.fixture';
import {UpdateCustomMealInfo} from '../../services/UpdateCustomMealServices/UpdateCustomMealInfo.fixture';
import {MealReviewInfo} from '../../services/MealReviewInfoServices/MealReviewInfoService.fixture';
import {UpdateMealReviewInfo} from '../../services/UpdateMealReviewInfoServices/UpdateMealReviewInfoService.fixture';
import { MealInfoStore } from '.'

describe('mealInfoStore tests', () => {
   let mealsFixture
   let mealPreferenceInfoService
   let mealInfoStore
   let updateMealInfo
   let updateCustomMealInfo
   let mealReviewInfo
   let updateMealReviewInfoService

   beforeEach(() => {
      mealsFixture = new MealsInfo()
      mealPreferenceInfoService=new MealPreference()
      updateMealInfo= new UpdateMealInfo()
      updateCustomMealInfo = new UpdateCustomMealInfo()
      mealReviewInfo=new MealReviewInfo()
      updateMealReviewInfoService=new UpdateMealReviewInfo()

      mealInfoStore = new MealInfoStore(
         mealsFixture,
         mealPreferenceInfoService,
         updateMealInfo,
         updateCustomMealInfo,
         mealReviewInfo,
         updateMealReviewInfoService
      )
   })
   it('should test initialize mealInfoStore', () => {
      expect(mealInfoStore.getMealInfoAPIStatus).toBe(API_INITIAL)
      expect(mealInfoStore.getMealInfoAPIError).toBe(null)
      expect(mealInfoStore.mealInfo).toStrictEqual(new Array())
      expect(mealInfoStore.selectedMealTypeReview).toBe(null)
      expect(mealInfoStore.selectedMealType).toBe(null)
      expect(mealInfoStore.timeCounter).toBe(null)
   })

   it('should test timeCounter',()=>{
      const mockSelectedMealTypeInfo=true
      mealInfoStore.selectedMealTypeInfo=mockSelectedMealTypeInfo;
      mealInfoStore.dateTime()
      expect(mealInfoStore.timeCounter).not.toBe(null)
   })
   // it('should test timeCounter',()=>{
   //    const mockSelectedMealTypeInfo=false
   //    mealInfoStore.selectedMealTypeInfo=mockSelectedMealTypeInfo;
   //    mealInfoStore.dateTime()
   //    expect(mealInfoStore.timeCounter).not.toBe(null)
   // })
   it('should test timeCounter onChangeDate',()=>{
      const mockDate=new Date();
     
      mealInfoStore.onChangeDate(mockDate)
      expect(mealInfoStore.initialTimerID).toBe(12)
      expect(mealInfoStore.timeCounter).toBe(mockDate)
      
   })

   it('should test instance of MealInfoItemModel',()=>{
      const mockMealType='mealType'
      mealInfoStore.onClickEdit(mockMealType)
      expect(mealInfoStore.selectedMealTypeInfo).not.toBe(null)
   })
   it('should test instance of MealReviewInfoModel',async()=>{
      const mockMealType='mealType'
      mealInfoStore.goForReview(mockMealType)
      expect(mealInfoStore.selectedMealTypeReview).not.toBe(null)
   })
   
   it('should test getMealInfo fetching state', () => {
      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockMealsAPI = jest.fn()
      mockMealsAPI.mockReturnValue(mockLoadingPromise)
      mealsFixture.getMealsAPI = mockMealsAPI

      mealInfoStore.getMealInfo()
      expect(mealInfoStore.getMealInfoAPIStatus).toBe(API_FETCHING)
   })
   it('should test getMealInfo success state', async () => {
      const mockLoadingPromise = new Promise(function(resolve, reject) {
         resolve(getMealInfo)
      })
      const mockMealsAPI = jest.fn()
      mockMealsAPI.mockReturnValue(mockLoadingPromise)
      mealsFixture.getMealsAPI = mockMealsAPI

      await mealInfoStore.getMealInfo()
      expect(mealInfoStore.getMealInfoAPIStatus).toBe(API_SUCCESS)
   })
   it('should test getMealInfo failure state', async () => {
      const mockLoadingPromise = new Promise(function(resolve, reject) {
         reject(new Error('error'))
      })
      const mockMealsAPI = jest.fn()
      mockMealsAPI.mockReturnValue(mockLoadingPromise)
      mealsFixture.getMealsAPI = mockMealsAPI

      await mealInfoStore.getMealInfo()
      expect(mealInfoStore.getMealInfoAPIStatus).toBe(API_FAILED)
      expect(mealInfoStore.getMealInfoAPIError).toBe('error')
   })

})
