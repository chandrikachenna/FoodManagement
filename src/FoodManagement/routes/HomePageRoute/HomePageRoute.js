import React, { Component } from 'react';
import {HomePage} from '../../components/HomePage';
import { withRouter } from "react-router-dom";
import { observer, inject } from "mobx-react";

@inject('mealInfoStore','authStore')
@observer
class HomePageRoute extends Component {
    constructor(props){
        super(props);
        this.doNetworkCalls()
    }
    onClickSignOut=()=>{
        this.props.authStore.userSignOut();
        const {history}=this.props;
        history.replace({pathname:"sign-in"})
    }
    doNetworkCalls=()=>{
        this.props.mealInfoStore.getMealInfo();
    }
    onClickGoHome=()=>{
        const {history}=this.props;
        this.doNetworkCalls();
        history.push('/food-management/home');
    }
    render() {
        return (
            <HomePage 
                onClickSignOut={this.onClickSignOut}
                mealInfoList={this.props.mealInfoStore.mealInfo}
                onClickEdit={this.props.mealInfoStore.onClickEdit}
                onClickGoHome={this.onClickGoHome}
            />
        );
    }
}

export default withRouter(HomePageRoute);