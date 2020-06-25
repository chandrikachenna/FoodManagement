import { observable, action } from 'mobx'
import { API_INITIAL, APIStatus } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { HeadCountsService } from "../../services/HeadCountsServices/HeadCountsService.fixture"




class HeadCountsStore {
   @observable getHeadCountsInfoAPIStatus!:APIStatus
   @observable getHeadCountsInfoAPIError!:Error|null
   @observable headCountsInfo:object[]=[]
   headCountsInfoService : HeadCountsService
   constructor(headCountsInfoService) {
      this.headCountsInfoService = headCountsInfoService
      this.init()
   }
   @action.bound
   init() {
      this.headCountsInfo= []
      this.getHeadCountsInfoAPIStatus = API_INITIAL
      this.getHeadCountsInfoAPIError = null
   }
   @action.bound
   setHeadCountsInfoAPIStatus(apiStatus) {
      this.getHeadCountsInfoAPIStatus = apiStatus
   }
   @action.bound
   setHeadCountsInfoAPIError(apiError) {
      this.getHeadCountsInfoAPIError = apiError
   }
   @action.bound
   setHeadCountsInfoResponse(headCountsInfoResponse) {
      this.headCountsInfo = headCountsInfoResponse
   }
   @action.bound
   getHeadCountsInfo() {
      const headCountsInfoPromise = this.headCountsInfoService.getHeadCountsInfo()
      return bindPromiseWithOnSuccess(headCountsInfoPromise)
         .to(this.setHeadCountsInfoAPIStatus, this.setHeadCountsInfoResponse)
         .catch(this.setHeadCountsInfoAPIError)
   }
   @action.bound
   onChangeDate() {}
}
export { HeadCountsStore }
