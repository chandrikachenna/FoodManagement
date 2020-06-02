import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import {HeadCountsPage} from '../../components/HeadCountsPage';
import { observer, inject } from "mobx-react";

@inject('authStore','headCountsStore')
@observer
class HeadCountsRoute extends Component {
    componentDidMount=()=>{
        this.props.headCountsStore.getHeadCountsInfo();
    }
    onClickSignOut=()=>{
        this.props.authStore.userSignOut();
        const {history}=this.props;
        history.push('/food-management/sign-in');
    }
    onClickGoHome=()=>{
        const {history}=this.props;
        history.push('/food-management/admin/home');
    }
    render() {
        return (
            <HeadCountsPage
                onClickGoHome={this.onClickGoHome}
                onClickSignOut={this.onClickSignOut}
            />
        );
    }
}

export default withRouter(HeadCountsRoute);