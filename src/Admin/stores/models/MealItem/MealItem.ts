import { observable, action } from 'mobx'

class MealItem {
   id:number
   @observable name:string
   @observable category:string
   @observable quantity:number
   @observable baseUnit:string
   @observable fullMealQuantity:number
   @observable halfMealQuantity:number
   constructor(itemInfo) {
      this.id = Math.random()
      this.name = itemInfo.name
      this.category = itemInfo.category
      this.baseUnit = itemInfo.base_unit || null
      this.quantity = itemInfo.quantity || 0
      this.fullMealQuantity = itemInfo.full_meal_quantity || 0
      this.halfMealQuantity = itemInfo.half_meal_quantity || 0
   }
   @action.bound
   incrementQuantity() {
      this.quantity++
   }
   @action.bound
   decrementQuantity() {
      this.quantity--
   }
   @action.bound
   incrementFullMealQuantity() {
      this.fullMealQuantity++
   }
   @action.bound
   decrementFullMealQuantity() {
      this.fullMealQuantity--
   }
   @action.bound
   incrementHalfMealQuantity() {
      this.halfMealQuantity++
   }
   @action.bound
   decrementHalfMealQuantity() {
      this.halfMealQuantity--
   }
}

export { MealItem }
