import getMealReviewInfo from '../../../fixtures/getMealReviewInfo.json'

import { MealRatingModel } from '.'

describe('should test MealRatingModel', () => {
   let mealRatingModel

   beforeEach(() => {
      const mealRatingInfo = getMealReviewInfo.items[0]
      mealRatingModel = new MealRatingModel(mealRatingInfo)
   })

   it('should test onChangeQualityRating', () => {
      const mockReview = 'Review'
      mealRatingModel.onChangeQualityRating(mockReview)
      expect(mealRatingModel.qualityRating).toBe(mockReview)
   })
   it('should test onChangeTasteRating', () => {
      const mockReview = 'Review'
      mealRatingModel.onChangeTasteRating(mockReview)
      expect(mealRatingModel.tasteRating).toBe(mockReview)
   })
})
