import React, { Component } from 'react';
import {SignInPage} from '../../components/SignInPage';
import { observer } from "mobx-react";
import { observable } from "mobx";
import { withRouter } from "react-router-dom";


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
        history.push("food-management/home");
    }
    render() {
        return (
           <SignInPage 
                // username={this.username}
                // password={this.password}
                // onChangeUsername={this.onChangeUsername}
                // onChangePassword={this.onChangePassword}
                // onClickSignIn={this.onClickSignIn}
           />
        );
    }
}

export default withRouter(SigninRoute);