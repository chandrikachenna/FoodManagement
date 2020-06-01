import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { observer, inject } from "mobx-react";

import {MealPreferencePage} from '../../components/MealPreferencePage';
import {MealPreference} from '../../components/MealPreference';

@inject('authStore','mealInfoStore')
@observer
class MealPreferenceRoute extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount=()=>{
        this.doNetworkCalls()
    }
    doNetworkCalls=()=>{
        const {onClickEdit,selectedMealType}=this.props.mealInfoStore;
        onClickEdit(selectedMealType);
    }
    onClickSignOut=()=>{
        this.props.authStore.userSignOut();
        const {history}=this.props;
        history.replace({pathname:"sign-in"})
    }
    onClickGoHome=()=>{
        const {history}=this.props;
        history.push('/food-management/home')
    }
    renderSuccessUI=observer(()=>{
        const selectedMealTypeInfo={...this.props.mealInfoStore.selectedMealTypeInfo}
        return(
            <MealPreference 
                selectedMealTypeInfo={selectedMealTypeInfo}
            />
        );
    })
    render() {
        const selectedMealTypeInfo={...this.props.mealInfoStore.selectedMealTypeInfo}
        const {getMealItemsAPIStatus,getMealItemsAPIError}=selectedMealTypeInfo
        return( 
            <MealPreferencePage 
                onClickSignOut={this.onClickSignOut}  
                onClickGoHome={this.onClickGoHome}
                getMealItemsAPIStatus={getMealItemsAPIStatus}
                getMealItemsAPIError={getMealItemsAPIError}
                doNetworkCalls={this.doNetworkCalls}
                renderSuccessUI={this.renderSuccessUI}
            />
        );
    }
}

export default withRouter(MealPreferenceRoute);