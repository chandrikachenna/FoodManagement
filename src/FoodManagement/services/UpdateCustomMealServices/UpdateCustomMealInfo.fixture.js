import getUpdateCustomMealInfoResponse from '../../fixtures/getUpdateCustomMealInfoResponse.json'

class UpdateCustomMealInfo {
   getMealReviewInfo(date, mealType) {
      return new Promise((resolve, reject) => {
         resolve(getUpdateCustomMealInfoResponse)
      })
   }
}

export { UpdateCustomMealInfo }
