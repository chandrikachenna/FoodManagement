import { observable, action } from 'mobx'

class MealItemModel {
   @observable mealItemInfo
   @observable quantity
   constructor(mealItemInfo) {
      const { item_id, name, catageory, unit, quantity } = mealItemInfo.item
      this.id = item_id
      this.name = name
      this.catageory = catageory
      this.unit = unit
      this.quantity = quantity
   }
   @action.bound
   onIncrement() {
      this.quantity++
   }
   @action.bound
   onDecrement() {
      this.quantity--
   }
}

export { MealItemModel }
