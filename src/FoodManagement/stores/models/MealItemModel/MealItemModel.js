
import { observable, action } from "mobx";

class MealItemModel{
   @observable mealItemInfo;
   @observable quantity;
   constructor(mealItemInfo){
       this.mealItemInfo=mealItemInfo.item;
       this.quantity=mealItemInfo.quantity.number;
   }
   @action.bound
   onIncrement(){
        this.quantity++;
   }
   @action.bound
   onDecrement(){
        this.quantity--;
   }
}

export {MealItemModel}