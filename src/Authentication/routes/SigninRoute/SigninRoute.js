import React, { Component } from 'react';
import {SignInPage} from '../../components/SignInPage';
import { observer, inject } from "mobx-react";
import { observable } from "mobx";
import { withRouter } from "react-router-dom";
import strings from '../../../Common/i18n/strings.json'

const {enterUsernameMsg,enterPasswordMsg,networkErrorMsg,loadingMsg}=strings.authentication;

@inject('authStore')
@observer
class SigninRoute extends Component {
    @observable username;
    @observable password;
    @observable errorMessage;   
    onChangeUsername=(event)=>{
        this.username=event.target.value;
    }
    onChangePassword=(event)=>{
        this.password=event.target.value;
    }
    onSuccesSignIn=()=>{
        const {history}=this.props;
        history.replace('/food-management/home');
    }
    onFailureSignIn=()=>{
        const { getUserSignInAPIError: apiError } = this.props.authStore;
        if (apiError !== null && apiError !== undefined) {
            this.errorMessage = networkErrorMsg;
        }
    }
    onClickSignIn=()=>{
        if(this.username && this.password)
        {
            this.errorMessage=loadingMsg;
            this.props.authStore.userSignIn(this.onSuccesSignIn,this.onFailureSignIn);
        }
        else if(!this.username)
            this.errorMessage=enterUsernameMsg;
        else if(!this.password)
            this.errorMessage=enterPasswordMsg;
    }
    render() {
        return (
           <SignInPage 
                username={this.username}
                password={this.password}
                onChangeUsername={this.onChangeUsername}
                onChangePassword={this.onChangePassword}
                onClickSignIn={this.onClickSignIn}
                errorMessage={this.errorMessage}
                loginStatus={this.props.authStore.getUserSignInAPIStatus}
           />
        );
    }
}

export default withRouter(SigninRoute);