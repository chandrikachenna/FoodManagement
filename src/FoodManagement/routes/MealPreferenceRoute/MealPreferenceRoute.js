import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { observer, inject } from "mobx-react";

import {MealPreferencePage} from '../../components/MealPreferencePage';


@inject('authStore','mealInfoStore')
@observer
class MealPreferenceRoute extends Component {
    componentDidMount=()=>{
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
    render() {
        const selectedMealTypeInfo={...this.props.mealInfoStore.selectedMealTypeInfo}
        return( 
            <MealPreferencePage 
                onClickSignOut={this.onClickSignOut}
                selectedMealTypeInfo={selectedMealTypeInfo}
                onClickGoHome={this.onClickGoHome}
            />
        );
    }
}

export default withRouter(MealPreferenceRoute);