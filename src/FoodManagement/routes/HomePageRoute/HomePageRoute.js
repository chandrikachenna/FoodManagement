import React, { Component } from 'react';
import {HomePage} from '../../components/HomePage';
import { withRouter } from "react-router-dom";
import { observer, inject } from "mobx-react";

@inject('mealInfoStore')
@observer
class HomePageRoute extends Component {
    constructor(props){
        super(props);
        this.doNetworkCalls()
    }
    doNetworkCalls(){
        this.props.mealInfoStore.getMealInfo();
    }
    render() {
        const list=this.props.mealInfoStore.mealInfo;
        console.log(list)
        return (
            <HomePage />
        );
    }
}

export default withRouter(HomePageRoute);