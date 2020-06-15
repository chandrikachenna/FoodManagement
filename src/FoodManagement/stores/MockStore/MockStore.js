import { observable, action } from 'mobx'
import { API_INITIAL } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'

class MockStore{
    @observable getMockAPIStatus
    @observable getMockAPIError
    @observable mockService
    @observable mockInfo
    constructor(mockService){
        this.mockService=mockService;
        this.init();
    }
    @action.bound
    init(){
        this.getMockAPIError=null;
        this.getMockAPIStatus=API_INITIAL;
        this.mockInfo=[]
    }
    @action.bound
    getMockInfo(){
        const mockInfoPromise=this.mockService.getMockInfo();
        return bindPromiseWithOnSuccess(mockInfoPromise)
         .to(this.setMockAPIStatus, this.setMockAPIResponse)
         .catch(this.setMockAPIError)
    }
    @action.bound
    setMockAPIStatus(apiStatus){
        this.getMockAPIStatus=apiStatus
    }
    @action.bound
    setMockAPIError(apiError){
        this.getMockAPIError=apiError
    }
    @action.bound
    setMockAPIResponse(mockAPIResponse){
        this.mockInfo=mockAPIResponse;
    }
}

export {MockStore}