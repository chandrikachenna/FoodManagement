import getUpdateMealReviewInfoResponse from '../../fixtures/getUpdateMealReviewInfoResponse.json'

class UpdateMealReviewInfo {
   setMealReviewInfo(date, mealType,requestedObject) {
      return new Promise((resolve, reject) => {
         resolve(getUpdateMealReviewInfoResponse)
      })
   }
}

export { UpdateMealReviewInfo }
