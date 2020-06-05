import { API_INITIAL, API_SUCCESS, API_FETCHING } from '@ib/api-constants'
import { HeadCountsService } from '../../services/HeadCountsServices/HeadCountsService.fixture'
import getHeadCountsInfo from '../../fixtures/getHeadCountsInfo.json'

import { HeadCountsStore } from '../HeadCountsStore'

describe('HeadCountsStore tests', () => {
   let headCountsInfo
   let headCountsStore
   beforeEach(() => {
      headCountsInfo = new HeadCountsService()
      headCountsStore = new HeadCountsStore(headCountsInfo)
   })
   it('should test initialize headCountsStore', () => {
      expect(headCountsStore.getHeadCountsInfoAPIStatus).toBe(API_INITIAL)
      expect(headCountsStore.getHeadCountsInfoAPIError).toBe(null)
      expect(headCountsStore.headCountsInfo).toStrictEqual(new Array())
   })

   it('should test headCountsStore fetching state', () => {
      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockMealsAPI = jest.fn()
      mockMealsAPI.mockReturnValue(mockLoadingPromise)
      headCountsInfo.getHeadCountsInfo = mockMealsAPI

      headCountsStore.getHeadCountsInfo()
      expect(headCountsStore.getHeadCountsInfoAPIStatus).toBe(API_FETCHING)
   })
   it('should test headCountsStore success state', async () => {
      const mockLoadingPromise = new Promise(function(resolve, reject) {
         resolve(getHeadCountsInfo)
      })
      const mockMealsAPI = jest.fn()
      mockMealsAPI.mockReturnValue(mockLoadingPromise)
      headCountsInfo.getHeadCountsInfo = mockMealsAPI

      await headCountsStore.getHeadCountsInfo()
      expect(headCountsStore.getHeadCountsInfoAPIStatus).toBe(API_SUCCESS)
   })
   it('should test headCountsStore failure state', async () => {
      const mockLoadingPromise = new Promise(function(resolve, reject) {
         reject(new Error('error'))
      })
      const mockMealsAPI = jest.fn()
      mockMealsAPI.mockReturnValue(mockLoadingPromise)
      headCountsInfo.getHeadCountsInfo = mockMealsAPI

      await headCountsStore.getHeadCountsInfo()
      expect(headCountsStore.getHeadCountsInfoAPIError).toBe('error')
   })
})
