import {
   API_INITIAL,
   API_FAILED,
   API_SUCCESS,
   API_FETCHING
} from '@ib/api-constants'

import { MealPreference } from '../../../services/MealPreferenceServices/MealPreference.fixture'
import getMealPreferenceInfo from '../../../fixtures/getMealPreferenceInfo.json'

import { UpdateMealInfo } from '../../../services/UpdateMealServices/UpdateMealInfo.fixture'
import getUpdateMealInfoResponse from '../../../fixtures/getUpdateMealInfoResponse.json'
import { UpdateCustomMealInfo } from '../../../services/UpdateCustomMealServices/UpdateCustomMealInfo.fixture'
import getUpdateCustomMealInfoResponse from '../../../fixtures/getUpdateCustomMealInfoResponse.json'
import { MealInfoItemModel } from './MealInfoItemModel'

describe('MealInfoItemModel tests', () => {
   let mealPreferenceFixture
   let mealModel
   let updateMealInfo
   const mockMealType = 'mealType'
   const mockDate = new Date()
   let updateCustomMealInfo

   beforeEach(() => {
      mealPreferenceFixture = new MealPreference()
      updateMealInfo = new UpdateMealInfo()
      updateCustomMealInfo = new UpdateCustomMealInfo()
      mealModel = new MealInfoItemModel(
         mealPreferenceFixture,
         mockMealType,
         mockDate,
         updateMealInfo,
         updateCustomMealInfo
      )
   })

   it('should test initialize mealModel', () => {
      expect(mealModel.getMealItemsAPIStatus).toBe(API_INITIAL)
      expect(mealModel.getMealItemsAPIError).toBe(null)
      expect(mealModel.mealItemsInfo).toStrictEqual(new Array())
      expect(mealModel.getUpdateMealInfoAPIStatus).toBe(API_INITIAL)
      expect(mealModel.getUpdateMealInfoAPIError).toBe(null)
      expect(mealModel.updateMealInfoResponse).toBe(null)
   })

   it('should test getMealInfo fetching state', () => {
      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockMealTypeInfoAPI = jest.fn()
      mockMealTypeInfoAPI.mockReturnValue(mockLoadingPromise)
      mealPreferenceFixture.getMealPreferenceAPI = mockMealTypeInfoAPI

      mealModel.getEditPreference()
      expect(mealModel.getMealItemsAPIStatus).toBe(API_FETCHING)
   })

   it('should test getMealInfo success state', async () => {
      const mockSuccessPromise = new Promise(function(resolve, reject) {
         resolve(getMealPreferenceInfo)
      })
      const mockMealTypeInfoAPI = jest.fn()
      mockMealTypeInfoAPI.mockReturnValue(mockSuccessPromise)
      mealPreferenceFixture.getMealPreferenceAPI = mockMealTypeInfoAPI

      await mealModel.getEditPreference()
      expect(mealModel.getMealItemsAPIStatus).toBe(API_SUCCESS)
   })
   it('should test getMealInfo failure state', async () => {
      const mockFailurePromise = new Promise(function(resolve, reject) {
         reject(new Error('error'))
      })
      const mockMealTypeInfoAPI = jest.fn()
      mockMealTypeInfoAPI.mockReturnValue(mockFailurePromise)
      mealPreferenceFixture.getMealPreferenceAPI = mockMealTypeInfoAPI

      await mealModel.getEditPreference()
      expect(mealModel.getMealItemsAPIStatus).toBe(API_FAILED)
      expect(mealModel.getMealItemsAPIError).toBe('error')
   })
   it('should test updateCustomMealInfo fetching state', () => {
      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockMealTypeInfoAPI = jest.fn()
      const mockRequestObject = {}
      const isMockCustom = true
      mockMealTypeInfoAPI.mockReturnValue(mockLoadingPromise)
      updateCustomMealInfo.setCustomMealsAPI = mockMealTypeInfoAPI

      mealModel.updateMealInfo(mockRequestObject, isMockCustom)
      expect(mealModel.getUpdateMealInfoAPIStatus).toBe(API_FETCHING)
   })
   it('should test updateCustomMealInfo success state', async () => {
      const mockLoadingPromise = Promise.resolve(
         getUpdateCustomMealInfoResponse
      )
      const mockMealTypeInfoAPI = jest.fn()
      const mockRequestObject = {}
      const isMockCustom = true
      mockMealTypeInfoAPI.mockReturnValue(mockLoadingPromise)
      updateCustomMealInfo.setCustomMealsAPI = mockMealTypeInfoAPI

      await mealModel.updateMealInfo(mockRequestObject, isMockCustom)
      expect(mealModel.getUpdateMealInfoAPIStatus).toBe(API_SUCCESS)
   })
   it('should test updateCustomMealInfo failure state', async () => {
      const mockLoadingPromise = Promise.reject(new Error('error'))
      const mockMealTypeInfoAPI = jest.fn()
      const mockRequestObject = {}
      const isMockCustom = true
      mockMealTypeInfoAPI.mockReturnValue(mockLoadingPromise)
      updateCustomMealInfo.setCustomMealsAPI = mockMealTypeInfoAPI

      await mealModel.updateMealInfo(mockRequestObject, isMockCustom)
      expect(mealModel.getUpdateMealInfoAPIStatus).toBe(API_FAILED)
   })

   it('should test updateMealInfo fetching state', () => {
      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockMealTypeInfoAPI = jest.fn()
      const mockRequestObject = {}
      const isMockCustom = false
      mockMealTypeInfoAPI.mockReturnValue(mockLoadingPromise)
      updateMealInfo.setMealsAPI = mockMealTypeInfoAPI

      mealModel.updateMealInfo(mockRequestObject, isMockCustom)
      expect(mealModel.getUpdateMealInfoAPIStatus).toBe(API_FETCHING)
   })
   it('should test updateMealInfo success state', async () => {
      const mockLoadingPromise = Promise.resolve(getUpdateMealInfoResponse)
      const mockMealTypeInfoAPI = jest.fn()
      const mockRequestObject = {}
      const isMockCustom = false
      mockMealTypeInfoAPI.mockReturnValue(mockLoadingPromise)
      updateMealInfo.setMealsAPI = mockMealTypeInfoAPI

      await mealModel.updateMealInfo(mockRequestObject, isMockCustom)
      expect(mealModel.getUpdateMealInfoAPIStatus).toBe(API_SUCCESS)
   })
   it('should test updateMealInfo failure state', async () => {
      const mockLoadingPromise = Promise.reject(new Error('error'))
      const mockMealTypeInfoAPI = jest.fn()
      const mockRequestObject = {}
      const isMockCustom = false
      mockMealTypeInfoAPI.mockReturnValue(mockLoadingPromise)
      updateMealInfo.setMealsAPI = mockMealTypeInfoAPI

      await mealModel.updateMealInfo(mockRequestObject, isMockCustom)
      expect(mealModel.getUpdateMealInfoAPIStatus).toBe(API_FAILED)
   })
   it('should test onChangeDate', () => {
      const mockDate = new Date()
      mealModel.onChangeDate(mockDate)
      expect(mealModel.date).toBe(mockDate)
   })
})
