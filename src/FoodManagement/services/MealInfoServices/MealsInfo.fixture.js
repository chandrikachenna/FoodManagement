import getMealInfo from '../../fixtures/getMealInfo.json'

class MealsInfo {
   getMealsAPI() {
      return new Promise((resolve, reject) => {
         resolve(getMealInfo)
      })
   }
}

export { MealsInfo }
