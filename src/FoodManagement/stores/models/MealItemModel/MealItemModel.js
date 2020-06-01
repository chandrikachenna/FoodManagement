
import { observable, action } from "mobx";

class MealItemModel{
   
   @observable quantity;
   constructor(mealItemInfo){
       this.quantity=mealItemInfo.quantity.number;
      // console.log(mealItemInfo);
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