import getUpdateMealInfoResponse from '../../fixtures/getUpdateMealInfoResponse.json'

class UpdateMealInfo {
   getMealReviewInfo(date, mealType) {
      return new Promise((resolve, reject) => {
         resolve(getUpdateMealInfoResponse)
      })
   }
}

export { UpdateMealInfo }
