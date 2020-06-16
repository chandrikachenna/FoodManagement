import {
   API_INITIAL,
   API_FAILED,
   API_SUCCESS,
   API_FETCHING
} from '@ib/api-constants'
import getMealReviewInfo from '../../../fixtures/getMealReviewInfo.json'
import { MealReviewInfo } from '../../../services/MealReviewInfoServices/MealReviewInfoService.fixture'

import getUpdateMealReviewInfoResponse from '../../../fixtures/getUpdateMealReviewInfoResponse.json'
import { UpdateMealReviewInfoService } from '../../../services/UpdateMealReviewInfoServices/UpdateMealReviewInfoService.fixture'

import { MealReviewInfoModel } from './MealReviewInfoModel'

describe('MealReviewInfoModel tests', () => {
   let mealReviewInfoService
   let mealReviewInfoModel
   let setMealReviewInfoService

   beforeEach(() => {
      mealReviewInfoService = new MealReviewInfo()
      setMealReviewInfoService = new UpdateMealReviewInfoService()
      mealReviewInfoModel = new MealReviewInfoModel(
         'mealType',
         mealReviewInfoService,
         setMealReviewInfoService
      )
   })

   it('should test initialize mealReviewInfoModel', () => {
      expect(mealReviewInfoModel.getMealReviewAPIStatus).toBe(API_INITIAL)
      expect(mealReviewInfoModel.getMealReviewAPIError).toBe(null)
      expect(mealReviewInfoModel.mealReviewInfo).toStrictEqual(new Array())

      expect(mealReviewInfoModel.getUpdateMealReviewAPIStatus).toBe(API_INITIAL)
      expect(mealReviewInfoModel.getUpdateMealReviewAPIError).toBe(null)
      expect(mealReviewInfoModel.updateMealReviewInfoResponse).toStrictEqual(
         new Array()
      )
   })

   it('should test updateMealReviewInfo fetching state', () => {
      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockUpdateMealReviewInfoService = jest
         .fn()
         .mockReturnValue(mockLoadingPromise)
      setMealReviewInfoService.setMealReviewInfo = mockUpdateMealReviewInfoService

      mealReviewInfoModel.setMealReviewInfo()
      expect(mealReviewInfoModel.getUpdateMealReviewAPIStatus).toBe(
         API_FETCHING
      )
   })

   it('should test mealReviewInfo success state', async () => {
      const mockLoadingPromise = Promise.resolve(getMealReviewInfo)
      const mockMealReviewInfoService = jest
         .fn()
         .mockReturnValue(mockLoadingPromise)
      mealReviewInfoService.getMealReviewInfo = mockMealReviewInfoService

      await mealReviewInfoModel.getMealReviewInfo()
      expect(mealReviewInfoModel.getMealReviewAPIStatus).toBe(API_SUCCESS)
   })

   it('should test mealReviewInfo failure state', async () => {
      const mockLoadingPromise = Promise.reject(new Error('error'))
      const mockMealReviewInfoService = jest
         .fn()
         .mockReturnValue(mockLoadingPromise)
      mealReviewInfoService.getMealReviewInfo = mockMealReviewInfoService

      await mealReviewInfoModel.getMealReviewInfo()
      expect(mealReviewInfoModel.getMealReviewAPIStatus).toBe(API_FAILED)
      expect(mealReviewInfoModel.getMealReviewAPIError).toBe('error')
   })

   it('should test mealReviewInfo fetching state', () => {
      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockMealReviewInfoService = jest
         .fn()
         .mockReturnValue(mockLoadingPromise)
      mealReviewInfoService.getMealReviewInfo = mockMealReviewInfoService

      mealReviewInfoModel.getMealReviewInfo()
      expect(mealReviewInfoModel.getMealReviewAPIStatus).toBe(API_FETCHING)
   })

   it('should test updateMealReviewInfo success state', async () => {
      const mockLoadingPromise = Promise.resolve(
         getUpdateMealReviewInfoResponse
      )
      const mockUpdateMealReviewInfoService = jest
         .fn()
         .mockReturnValue(mockLoadingPromise)
      setMealReviewInfoService.setMealReviewInfo = mockUpdateMealReviewInfoService

      await mealReviewInfoModel.setMealReviewInfo()
      expect(mealReviewInfoModel.getUpdateMealReviewAPIStatus).toBe(API_SUCCESS)
   })

   it('should test updateMealReviewInfo failure state', async () => {
      const mockLoadingPromise = Promise.reject(new Error('error'))
      const mockUpdateMealReviewInfoService = jest
         .fn()
         .mockReturnValue(mockLoadingPromise)
      setMealReviewInfoService.setMealReviewInfo = mockUpdateMealReviewInfoService

      await mealReviewInfoModel.setMealReviewInfo()
      expect(mealReviewInfoModel.getUpdateMealReviewAPIStatus).toBe(API_FAILED)
   })
})
