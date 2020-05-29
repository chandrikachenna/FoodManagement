import {observable,action} from "mobx"
import { API_INITIAL} from "@ib/api-constants";
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise'
import {setAccessToken,clearUserSession} from '../../utils/StorageUtils'

class AuthStore{
    @observable getUserSignInAPIStatus;
    @observable getUserSignInAPIError;
    @observable Access_token
    authAPIService;
    constructor(authAPIService){
        this.authAPIService=authAPIService;
        this.init();
    }
    @action.bound
    init(){
        this.getUserSignInAPIStatus=API_INITIAL;
        this.getUserSignInAPIError=null;
    }
    @action.bound
    setGetUserSignInAPIStatus(apiStatus){
        this.getUserSignInAPIStatus=apiStatus;
    }
    @action.bound
    setGetUserSignInAPIError(error){
        this.getUserSignInAPIError=error
    }
    @action.bound
    setUserSignInAPIResponse(SignInAPIResponse){ 
        this.Access_token=SignInAPIResponse[0].access_token;
        setAccessToken(this.Access_token);
    }
    @action.bound
    userSignIn(onSuccess,onFailure){
        const signInPromise=this.authAPIService.signInAPI();
        return bindPromiseWithOnSuccess(signInPromise)
        .to(
            this.setGetUserSignInAPIStatus,
            response=>{this.setUserSignInAPIResponse(response);onSuccess()}
        )
        .catch(error=>{
            this.setGetUserSignInAPIError(error);
            onFailure()
        });
    }
    @action.bound
    userSignOut(){
        clearUserSession();
    }
}
export default AuthStore;