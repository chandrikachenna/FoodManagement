import {networkCallWithApisauce} from '../../../utils/APIUtils'
import { create } from "apisauce";
import {apiMethods} from '../../constants/APIConstants';
class AuthAPI{
    api;
    constructor(){
        this.api=create({
            baseURL:"https://127.0.0.1:8080/food_management/"
        })
    }
    signInAPI(requestObject){
        return networkCallWithApisauce(
            this.api,
            'sign_in/v1/',
            {requestObject},
            apiMethods.post
        )
    }
}

export default AuthAPI;