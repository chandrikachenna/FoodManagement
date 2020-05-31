import React, { Component } from 'react';
import {HomePage} from '../../components/HomePage';
import { withRouter } from "react-router-dom";
import { observer, inject } from "mobx-react";
import {MealInfo} from '../../components/MealInfo';

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
    renderSuccessUI=observer(()=>{
        return(
            <MealInfo 
                mealInfoList={this.props.mealInfoStore.mealInfo}
                onClickEdit={this.props.mealInfoStore.onClickEdit}
            />
           
        );
    })
    render() {
        const {getMealInfoAPIStatus,getMealInfoAPIError}=this.props.mealInfoStore;
        return (
            <HomePage 
                onClickSignOut={this.onClickSignOut}
                mealInfoList={this.props.mealInfoStore.mealInfo}
                onClickEdit={this.props.mealInfoStore.onClickEdit}
                onClickGoHome={this.onClickGoHome}
                doNetworkCalls={this.doNetworkCalls}
                renderSuccessUI={this.renderSuccessUI}
                getMealInfoAPIStatus={getMealInfoAPIStatus}
                getMealInfoAPIError={getMealInfoAPIError}
            />
        );
    }
}

export default withRouter(HomePageRoute);