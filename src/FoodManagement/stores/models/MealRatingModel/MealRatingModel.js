import { observable, action } from 'mobx'

class MealRatingModel {
   @observable qualityRating
   @observable tasteRating
   @observable name

   constructor(itemInfo) {
      const { quality_rating, taste_rating, item_name } = itemInfo
      this.qualityRating = quality_rating
      this.tasteRating = taste_rating
      this.name = item_name
   }
   @action.bound
   onChangeQualityRating(rating) {
      this.qualityRating = rating
   }
   @action.bound
   onChangeTasteRating(rating) {
      this.tasteRating = rating
   }
}

export { MealRatingModel }
