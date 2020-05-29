import { observable, action } from 'mobx';

class CounterModel {
  @observable counter= 0
  @action.bound
   onIncrement() {
      this.counter++
   }

   @action.bound
   onDecrement() {
      this.counter--;
   }
   @action.bound
   onChangeCount(value) {
         this.counter = value;
   }  
}

export {CounterModel}