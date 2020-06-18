import {networkCallWithApisauce,getUserDisplayableErrorMessage,isNetworkError} from './APIUtils';
import { create } from "apisauce";
import {apiMethods} from '../constants/APIConstants';
import { toJS } from "mobx";
import { stringify } from "querystring";

describe('should test APIUtils',()=>{
    const mockApi = create({
        baseURL: 'https://5ea1a14db9f5ca00166c1f27.mockapi.io/api/'
     })
    
    it('should test networkCallWithApisauce success state',async()=>{
        const mockEndpoint='v1/signin/'
        const mockResponse =Promise.resolve({})

        let response=networkCallWithApisauce(mockApi,mockEndpoint,{},apiMethods.get)
        await response
        expect(response).toStrictEqual(mockResponse)
    })
    it('should test networkCallWithApisauce fetching state',async()=>{
        const mockEndpoint='v1/signin/'
        const mockResponse =new Promise(()=>{})

        let response=networkCallWithApisauce(mockApi,mockEndpoint,{},apiMethods.get)
        expect(response).toStrictEqual(mockResponse)
    })

    it('should test networkCallWithApisauce failure state',async()=>{
        const mockEndpoint='v1/ignin/'

        let promiseResponse
        await networkCallWithApisauce(mockApi,mockEndpoint,{},apiMethods.get)
        .then(response=>{
            promiseResponse=response
        }).catch(error=>{
            promiseResponse=error
        })
    })

    it('should test getUserDisplayableErrorMessage plain',()=>{
        const mockError=`We're having some trouble completing your request. Please try again.`
        const errorMessage='error'
        const response=getUserDisplayableErrorMessage(errorMessage)
        expect(response).toBe(mockError);
    })
    
    it('should test getUserDisplayableErrorMessage parseMessage data null',()=>{
        const mockError=`We're having some trouble completing your request. Please try again.`
        const errorMessage=JSON.stringify({data:null})
        const response=getUserDisplayableErrorMessage(errorMessage)
        expect(response).toBe(mockError);
    })
    it('should test getUserDisplayableErrorMessage parseMessage with no data',()=>{
        const mockError=`We're having some trouble completing your request. Please try again.`
        const errorMessage=JSON.stringify({})
        const response=getUserDisplayableErrorMessage(errorMessage)
        expect(response).toBe(mockError);
        
    })
    it('should test getUserDisplayableErrorMessage parseMessage data.response',()=>{
        const mockErrorMessage='errorDescription'
        const errorMessage=JSON.stringify({data:{
                message:'Endpoint request timed out',
                response:JSON.stringify({
                    title:'errorTitle',
                    description:'errorDescription',
                    res_status:'resStatus'
                })
            }
        })
        const response=getUserDisplayableErrorMessage(errorMessage)
        expect(response).toBe(mockErrorMessage)
    })
    it('should test getUserDisplayableErrorMessage parseMessage data.message',()=>{
        const mockErrorMessage='response'
        const errorMessage=JSON.stringify({data:{
                message:'Endpoint request timed out',
                response:'response'
            }
        })
        const response=getUserDisplayableErrorMessage(errorMessage)
        expect(response).toBe(mockErrorMessage)
    })
    it('should test getUserDisplayableErrorMessage parseMessage data.response error',()=>{
        const mockErrorMessage={title:"errorTitle"}
        const errorMessage=JSON.stringify({data:{
                message:'Endpoint request timed out',
                response:JSON.stringify({
                        title:'errorTitle', 
                    })
            }
        })
        const response=getUserDisplayableErrorMessage(errorMessage)
        expect(JSON.parse(response)).toStrictEqual(mockErrorMessage)
    })
    it('should test getUserDisplayableErrorMessage parseMessage http_status_code',()=>{
        const mockErrorMessage='Please check your internet connection'
        const errorMessage=JSON.stringify({data:{
                message:'Endpoint request timed out',
                response:JSON.stringify({
                    title:'errorTitle',
                    description:'errorDescription'
                }),
                res_status:'resStatus',
                http_status_code:503,
                problem:'NETWORK_ERROR'
            }
        })
        const response=getUserDisplayableErrorMessage(errorMessage)
        expect(response).toBe(mockErrorMessage)
    })
    it('should test isNetworkError',()=>{
        const errorMessage=JSON.stringify({problem:'NETWORK_ERROR'})
        const response=isNetworkError(errorMessage)
        expect(response).toBe(true)
    })
})