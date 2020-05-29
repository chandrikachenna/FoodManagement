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
    render() {
        return (
            <HomePage 
                onClickSignOut={this.onClickSignOut}
                mealInfoList={this.props.mealInfoStore.mealInfo}
                onClickEdit={this.props.mealInfoStore.onClickEdit}
            />
        );
    }
}

export default withRouter(HomePageRoute);