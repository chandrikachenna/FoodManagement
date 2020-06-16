import getUpdateMealReviewInfoResponse from '../../fixtures/getUpdateMealReviewInfoResponse.json'

class UpdateMealReviewInfoService {
   setMealReviewInfo(date, mealType) {
      return new Promise((resolve, reject) => {
         resolve(getUpdateMealReviewInfoResponse)
      })
   }
}

export { UpdateMealReviewInfoService }
