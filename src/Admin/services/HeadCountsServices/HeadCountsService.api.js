import { networkCallWithApisauce } from '../../../utils/APIUtils'
import { create } from 'apisauce'
import { apiMethods } from '../../constants/APIConstants'

class HeadCountsService {
   api
   constructor() {
      this.api = create({
         baseURL: ''
      })
   }
   getHeadCountsInfo() {
      return networkCallWithApisauce(
         this.api,
         ``,
         {},
         apiMethods.get
      )
   }
}

export { HeadCountsService }
