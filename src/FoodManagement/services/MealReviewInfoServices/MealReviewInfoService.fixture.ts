import getMealReviewInfo from '../../fixtures/getMealReviewInfo.json'
import { MealReviewService } from "./index.js"
import { resolveWithTimeout } from "../../../Common/utils/TestUtils"

class MealReviewInfo implements MealReviewService{
   getMealReviewInfo(date, mealType) {
      return resolveWithTimeout(getMealReviewInfo)
   }
}

export { MealReviewInfo }
