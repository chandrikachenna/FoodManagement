import getMealReviewInfo from '../../fixtures/getMealReviewInfo.json'

class MealReviewInfo {
   getMealReviewInfo(date,mealType) {
      console.log('service')
      return new Promise((resolve, reject) => {
         resolve(getMealReviewInfo)
      })
   }
}

export { MealReviewInfo }
