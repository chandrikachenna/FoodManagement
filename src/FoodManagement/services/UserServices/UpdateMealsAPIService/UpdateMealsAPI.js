import {networkCallWithApisauce} from '../../utils/APIUtils'
import { create } from "apisauce";
import {apiMethods} from '../../constants/APIConstants';

class UpdateMealsAPI{
    api;
    constructor(){
        this.api=create({
            baseURL:'https://9ba0cd3ggi.execute-api.ap-south-1.amazonaws.com/'
        })
    }
    getProductsAPI(requestObject){
        return networkCallWithApisauce(
            this.api,
            endPoint,
            requestObject,
            apiMethods.post
        )
    }
}

export {UpdateMealsAPI};