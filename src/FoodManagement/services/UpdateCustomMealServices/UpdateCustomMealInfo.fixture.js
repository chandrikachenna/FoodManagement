import getUpdateCustomMealInfoResponse from '../../fixtures/getUpdateCustomMealInfoResponse.json'

class UpdateCustomMealInfo {
   setCustomMealsAPI(requestObject) {
      return new Promise((resolve, reject) => {
         resolve(getUpdateCustomMealInfoResponse)
      })
   }
}

export { UpdateCustomMealInfo }
