import getUpdateMealInfoResponse from '../../fixtures/getUpdateMealInfoResponse.json'
import { resolveWithTimeout } from "../../../Common/utils/TestUtils"
import { UpdateMealService } from "./index.js"

class UpdateMealInfo implements UpdateMealService{
   setMealsAPI(requestObject) {
      return resolveWithTimeout(getUpdateMealInfoResponse)
   }
}

export { UpdateMealInfo }
