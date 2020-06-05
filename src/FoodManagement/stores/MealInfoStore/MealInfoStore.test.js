import {
   API_INITIAL,
   API_FAILED,
   API_SUCCESS,
   API_FETCHING
} from '@ib/api-constants'

import {MealsInfo } from '../../services/MealInfoServices/MealsInfo.fixture'
import getMealInfo from '../../fixtures/getMealInfo.json';

import { MealInfoStore } from '.'

describe('mealInfoStore tests', () => {
   let mealsFixture
   let mealInfoStore

   beforeEach(() => {
      mealsFixture = new MealsInfo()
      mealInfoStore = new MealInfoStore(mealsFixture)
   })

   it('should test initialize mealInfoStore', () => {
      expect(mealInfoStore.getMealInfoAPIStatus).toBe(API_INITIAL)
      expect(mealInfoStore.getMealInfoAPIError).toBe(null)
      expect(mealInfoStore.mealInfo).toStrictEqual(new Array())
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
