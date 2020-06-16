import {
   API_INITIAL,
   API_FAILED,
   API_SUCCESS,
   API_FETCHING
} from '@ib/api-constants'

import { MealPreference } from '../../../services/MealPreferenceServices/MealPreference.fixture'
import getMealPreferenceInfo from '../../../fixtures/getMealPreferenceInfo.json'

import { MealInfoItemModel } from './MealInfoItemModel'

describe('MealInfoItemModel tests', () => {
   let mealPreferenceFixture
   let mealModel

   beforeEach(() => {
      mealPreferenceFixture = new MealPreference()
      mealModel = new MealInfoItemModel(mealPreferenceFixture)
   })

   it('should test initialize mealModel', () => {
      expect(mealModel.getMealItemsAPIStatus).toBe(API_INITIAL)
      expect(mealModel.getMealItemsAPIError).toBe(null)
      expect(mealModel.mealItemsInfo).toStrictEqual(new Array())
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
})
