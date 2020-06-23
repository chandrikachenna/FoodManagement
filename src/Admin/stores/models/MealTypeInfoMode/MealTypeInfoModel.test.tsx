import getScheduleMealInfo from '../../../fixtures/getScheduleMealInfo.json'
import { MealTypeInfoModel } from '.'

describe('MealTypeInfoModel tests', () => {
   let mealTypeInfo
   let mealTypeInfoModel

   beforeEach(() => {
      mealTypeInfo = getScheduleMealInfo.breakfast
      mealTypeInfoModel = new MealTypeInfoModel(mealTypeInfo)
   })

   it('should test removeMealItem', () => {
      const mockMealItemId = 2
      mealTypeInfoModel.mealTypeInfo = mealTypeInfo
      mealTypeInfoModel.removeMealItem(mockMealItemId)
      expect(mealTypeInfoModel.mealTypeInfo.length).toBe(2)
   })
})
