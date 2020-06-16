import getMealPreferenceInfo from '../../../fixtures/getMealPreferenceInfo';
import {MealItemModel} from '.'
describe('should test MealItemModel',()=>{
    let mealItemModel
    beforeEach(()=>{
        const mealItemInfo=getMealPreferenceInfo.meal_preferences.full_meal[0]
        mealItemModel=new MealItemModel(mealItemInfo)
    })
    it('should test onIncrementQuantity',()=>{
        const mockQuantity=1;
        mealItemModel.quantity=mockQuantity
        mealItemModel.onIncrement()
        expect(mealItemModel.quantity).toBe(mockQuantity+1)
    })
    it('should test onIncrementQuantity',()=>{
        const mockQuantity=1;
        mealItemModel.quantity=mockQuantity
        mealItemModel.onDecrement()
        expect(mealItemModel.quantity).toBe(mockQuantity-1)
    })
})