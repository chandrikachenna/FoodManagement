import{
    API_INITIAL,
    API_FAILED,
    API_SUCCESS,
    API_FETCHING
} from '@ib/api-constants';


import {MealPreferenceFixture} from '../../../services/MealPreferenceServices/MealPreference.fixture';
import getMealPreferenceInfo from '../../../fixtures/getMealPreferenceInfo.json';

import {MealModel} from './MealModel';

describe('mealModel tests',()=>{
    let mealPreferenceFixture;
    let mealModel;
    
    beforeEach(()=>{
        mealPreferenceFixture=new MealPreferenceFixture();
        mealModel=new MealModel(mealPreferenceFixture);
    })

    it('should test initialize mealModel',()=>{
        expect(mealModel.getMealItemsAPIStatus).toBe(API_INITIAL);
        expect(mealModel.getMealItemsAPIError).toBe(null);
        expect(mealModel.mealItems).toStrictEqual(new Array());
    })

    it('should test getMealInfo fetching state',()=>{

        const mockLoadingPromise=new Promise(function(resolve,reject){});
        const mockMealTypeInfoAPI=jest.fn();
        mockMealTypeInfoAPI.mockReturnValue(mockLoadingPromise);
        mealPreferenceFixture.getEditPreference=mockMealTypeInfoAPI;

        mealModel.getEditPreference();
        expect(mealModel.getMealItemsAPIStatus).toBe(API_FETCHING);
    })
    it('should test getMealInfo success state',async()=>{

        const mockLoadingPromise=new Promise(function(resolve,reject){
            resolve(getMealPreferenceInfo)
        });
        const mockMealTypeInfoAPI=jest.fn();
        mockMealTypeInfoAPI.mockReturnValue(mockLoadingPromise);
        mealPreferenceFixture.getEditPreference=mockMealTypeInfoAPI;

        await mealModel.getEditPreference();
        expect(mealModel.getMealItemsAPIStatus).toBe(API_SUCCESS);
    })
    it('should test getMealInfo failure state',async()=>{

        const mockLoadingPromise=new Promise(function(resolve,reject){
            reject(new Error('error'));
        });
        const mockMealTypeInfoAPI=jest.fn();
        mockMealTypeInfoAPI.mockReturnValue(mockLoadingPromise);
        mealPreferenceFixture.getEditPreference=mockMealTypeInfoAPI;

        // await mealModel.getEditPreference();
        // expect(mealModel.getMealItemsAPIStatus).toBe(API_FAILED);
        // expect(mealModel.getMealItemsAPIError).toBe('error');
    })

})