import { observable, action } from 'mobx'
import { MealItem } from '../MealItem'

class MealTypeInfoModel {
   @observable mealTypeInfo
   constructor(mealTypeInfo) {
      this.init()
      this.setMealItemModels(mealTypeInfo)
   }
   @action.bound
   init() {
      this.mealTypeInfo = []
   }
   @action.bound
   setMealItemModels(mealTypeInfo) {
      mealTypeInfo.forEach(item => {
         this.mealTypeInfo.push(new MealItem(item))
      })
   }
   @action.bound
   removeMealItem(mealItemId) {
      this.mealTypeInfo = this.mealTypeInfo.filter(
         mealItem => mealItemId !== mealItem.id
      )
   }
}

export { MealTypeInfoModel }
