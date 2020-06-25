import getMealInfo from '../../fixtures/getMealInfo.json'
import { resolveWithTimeout } from "../../../Common/utils/TestUtils"

class MealsInfo {
   getMealsAPI(date) {
      return resolveWithTimeout(getMealInfo)
   }
}

export { MealsInfo }
