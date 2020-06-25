import getUpdateCustomMealInfoResponse from '../../fixtures/getUpdateCustomMealInfoResponse.json'
import { resolveWithTimeout } from "../../../Common/utils/TestUtils"
import { UpdateCustomMealService } from "./index.js"

class UpdateCustomMealInfo implements UpdateCustomMealService{
   setCustomMealsAPI(requestObject) {
      return resolveWithTimeout(getUpdateCustomMealInfoResponse)
   }
}

export { UpdateCustomMealInfo }
