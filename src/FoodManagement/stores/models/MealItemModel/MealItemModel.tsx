import { observable, action } from 'mobx'

class MealItemModel {
   id:number
   name:string
   catageory:string
   unit:string
   @observable mealItemInfo:any
   @observable quantity:number
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
