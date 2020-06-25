import getMealPreferenceInfo from '../../fixtures/getMealPreferenceInfo.json'
import { resolveWithTimeout } from "../../../Common/utils/TestUtils"
import { MealPreferenceService } from "./index.js"

class MealPreference implements MealPreferenceService{
   getMealPreferenceAPI(date, mealType) {
      return resolveWithTimeout(getMealPreferenceInfo)
   }
}

export { MealPreference }
