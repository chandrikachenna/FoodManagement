import { observable } from "mobx";

class MealItem{
    id;
    @observable name;
    @observable category;
    @observable quantity;
    @observable baseUnit;
    constructor(itemInfo){
        this.id=Math.random();
        this.name=itemInfo.name;
        this.category=itemInfo.category;
        this.baseUnit=itemInfo.baseUnit || null;
        this.quantity=itemInfo.quantity || 0;
    }
}

export {MealItem}