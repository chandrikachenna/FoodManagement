import getUpdateMealReviewInfoResponse from '../../fixtures/getUpdateMealReviewInfoResponse.json'
import { resolveWithTimeout } from "../../../Common/utils/TestUtils"
import { UpdateMealReviewService } from "./index.js"

class UpdateMealReviewInfo implements UpdateMealReviewService{
   setMealReviewInfo(date, mealType,requestedObject) {
      return resolveWithTimeout(getUpdateMealReviewInfoResponse)
   }
}

export { UpdateMealReviewInfo }
