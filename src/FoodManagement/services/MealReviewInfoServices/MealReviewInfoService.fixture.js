import getMealReviewInfo from '../../fixtures/getMealReviewInfo.json'

class MealReviewInfo {
   getMealReviewInfo(date, mealType) {
      return new Promise((resolve, reject) => {
         console.log('hello')
         resolve(getMealReviewInfo)
      })
   }
}

export { MealReviewInfo }
