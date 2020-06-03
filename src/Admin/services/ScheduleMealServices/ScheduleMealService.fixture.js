import getScheduleMealInfo from '../../fixtures/getScheduleMealInfo.json'

class ScheduleMealService {
   getScheduleMealInfo() {
      return new Promise((resolve, reject) => {
         resolve(getScheduleMealInfo)
      })
   }
}

export { ScheduleMealService }
