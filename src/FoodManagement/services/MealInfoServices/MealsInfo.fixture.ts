import getMealInfo from '../../fixtures/getMealInfo.json'

class MealsInfo {
   getMealsAPI(props:object) {
      return Promise.resolve(getMealInfo)
   }
}

export { MealsInfo }
