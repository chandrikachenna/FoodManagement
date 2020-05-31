import { action } from "@storybook/addon-actions";

class MealItemModel{
    @observer quantitiy;
    constructor(){
        
    }
    @action.bound
    onIncrement(){
        this.quantitiy++;
    }
    @action.bound
    onDecrement(){
        this.quantitiy--;
    }
}

export {MealItemModel}