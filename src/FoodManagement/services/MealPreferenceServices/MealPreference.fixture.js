import getMealPreferenceInfo from '../../fixtures/getMealPreferenceInfo.json'

class MealPreference {
   getMealPreferenceAPI() {
      return new Promise((resolve, reject) => {
         resolve(getMealPreferenceInfo)
      })
   }
}

export { MealPreference }
