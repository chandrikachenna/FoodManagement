import getUpdateMealReviewInfoResponse from '../../fixtures/getUpdateMealReviewInfoResponse.json'

class UpdateMealReviewInfo {
   setMealReviewInfo(date, mealType) {
      return new Promise((resolve, reject) => {
         resolve(getUpdateMealReviewInfoResponse)
      })
   }
}

export { UpdateMealReviewInfo }
