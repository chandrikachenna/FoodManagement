import { API_INITIAL, API_SUCCESS, API_FETCHING, API_FAILED } from '@ib/api-constants'

import {ScheduleMealService} from '../../services/ScheduleMealServices/ScheduleMealService.fixture';
import getScheduleMealInfo from '../../fixtures/getScheduleMealInfo.json';
import {ScheduleMealStore} from '.';

describe('ScheduleMealStore tests', () => {
    let scheduleMealService
    let scheduleMealStore
    beforeEach(()=>{
        scheduleMealService=new ScheduleMealService
        scheduleMealStore=new ScheduleMealStore(scheduleMealService)
    })  
    it('should test initialize ScheduleMealStore', () => {
        expect(scheduleMealStore.getScheduleMealInfoAPIStatus).toBe(API_INITIAL)
        expect(scheduleMealStore.getScheduleMealInfoAPIError).toBe(null)
        expect(scheduleMealStore.scheduleMealInfo).toStrictEqual(new Array())
     })
     it('should test ScheduleMealStore fetching state', () => {
        const mockLoadingPromise = new Promise(function(resolve, reject) {})
        const mockScheduleMealsAPI = jest.fn().mockReturnValue(mockLoadingPromise)
        scheduleMealService.getScheduleMealInfo = mockScheduleMealsAPI

        scheduleMealStore.getScheduleMealInfo()
        expect(scheduleMealStore.getScheduleMealInfoAPIStatus).toBe(API_FETCHING)
     })
     it('should test ScheduleMealStore success state', async() => {
        const mockLoadingPromise = Promise.resolve(getScheduleMealInfo)
        const mockScheduleMealsAPI = jest.fn().mockReturnValue(mockLoadingPromise)
        scheduleMealService.getScheduleMealInfo = mockScheduleMealsAPI

        await scheduleMealStore.getScheduleMealInfo()
        expect(scheduleMealStore.getScheduleMealInfoAPIStatus).toBe(API_SUCCESS)
     })
     it('should test ScheduleMealStore failure state', async() => {
        const mockLoadingPromise = Promise.reject(new Error('error'))
        const mockScheduleMealsAPI = jest.fn().mockReturnValue(mockLoadingPromise)
        scheduleMealService.getScheduleMealInfo = mockScheduleMealsAPI

        await scheduleMealStore.getScheduleMealInfo()
        expect(scheduleMealStore.getScheduleMealInfoAPIStatus).toBe(API_FAILED)
     })
  
})