import getUpdateMealInfoResponse from '../../fixtures/getUpdateMealInfoResponse.json'

class UpdateMealInfo {
   setMealsAPI(requestObject) {
      return new Promise((resolve, reject) => {
         resolve(getUpdateMealInfoResponse)
      })
   }
}

export { UpdateMealInfo }
