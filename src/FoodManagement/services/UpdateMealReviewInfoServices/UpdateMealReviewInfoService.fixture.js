import getUpdateMealReviewInfoResponse from '../../fixtures/getUpdateMealReviewInfoResponse.json'

class UpdateMealReviewInfoService {
   getMealReviewInfo(date, mealType) {
      return new Promise((resolve, reject) => {
         resolve(getUpdateMealReviewInfoResponse)
      })
   }
}

export { UpdateMealReviewInfoService }
