import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import {MealPreferencePage} from '../../components/MealPreferencePage';
import { observer, inject } from "mobx-react";

@inject('authStore')
@observer
class MealPreferenceRoute extends Component {
    onClickSignOut=()=>{
        this.props.authStore.userSignOut();
        const {history}=this.props;
        history.replace({pathname:"sign-in"})
    }
    render() {
        return (
            <MealPreferencePage 
                onClickSignOut={this.onClickSignOut}
            />
        );
    }
}

export default withRouter(MealPreferenceRoute);