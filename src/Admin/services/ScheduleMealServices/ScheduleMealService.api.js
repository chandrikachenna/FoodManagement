import { networkCallWithApisauce } from '../../../Common/utils/APIUtils'
import { create } from 'apisauce'
import { apiMethods } from '../../constants/APIConstants'

class ScheduleMealService {
   api
   constructor() {
      this.api = create({
         baseURL: ''
      })
   }
   ScheduleMealService() {
      return networkCallWithApisauce(this.api, ``, {}, apiMethods.get)
   }
}

export { ScheduleMealService }
