import getScheduleMealInfo from '../../../fixtures/getScheduleMealInfo.json'
import { MealItem } from '.'

describe('should test MealItem', () => {
   let mealItem
   let mealItemInfo
   beforeEach(() => {
      mealItemInfo = getScheduleMealInfo.breakfast[0]
      mealItem = new MealItem(mealItemInfo)
   })
   it('should test incrementQuantity', () => {
      const mockQuantity = 2
      mealItem.quantity = mockQuantity
      mealItem.incrementQuantity()
      expect(mealItem.quantity).toBe(mockQuantity + 1)
   })
   it('should test decrementQuantity', () => {
      const mockQuantity = 2
      mealItem.quantity = mockQuantity
      mealItem.decrementQuantity()
      expect(mealItem.quantity).toBe(mockQuantity - 1)
   })
   it('should test incrementFullMealQuantity', () => {
      const mockFullMealQuantity = 2
      mealItem.fullMealQuantity = mockFullMealQuantity
      mealItem.incrementFullMealQuantity()
      expect(mealItem.fullMealQuantity).toBe(mockFullMealQuantity + 1)
   })
   it('should test decrementFullMealQuantity', () => {
      const mockFullMealQuantity = 2
      mealItem.fullMealQuantity = mockFullMealQuantity
      mealItem.decrementFullMealQuantity()
      expect(mealItem.fullMealQuantity).toBe(mockFullMealQuantity - 1)
   })
   it('should test incrementHalfMealQuantity', () => {
      const mockHalfMealQuantity = 2
      mealItem.halfMealQuantity = mockHalfMealQuantity
      mealItem.incrementHalfMealQuantity()
      expect(mealItem.halfMealQuantity).toBe(mockHalfMealQuantity + 1)
   })
   it('should test decrementHalfMealQuantity', () => {
      const mockHalfMealQuantity = 2
      mealItem.halfMealQuantity = mockHalfMealQuantity
      mealItem.decrementHalfMealQuantity()
      expect(mealItem.halfMealQuantity).toBe(mockHalfMealQuantity - 1)
   })
})
