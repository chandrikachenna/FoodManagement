import getMealInfo from '../../fixtures/getMealInfo.json'

class MealsInfo {
   getMealsAPI() {
      return Promise.resolve(getMealInfo)
   }
}

export { MealsInfo }
