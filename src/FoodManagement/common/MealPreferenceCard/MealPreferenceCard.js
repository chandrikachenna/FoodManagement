import React, { Component } from 'react';
import {Layout,Div} from './styledComponents';
import { withRouter } from "react-router-dom";
import {Logo} from '../../../Common/components/Logo';

class MealPreferenceCard extends Component {
    onClick=()=>{
        const {history}=this.props;
        history.push('/food-management/home');
    }
    render() {
        return (
            <Layout>
                <button onClick={this.onClick}>hey</button>
            </Layout>
        );
    }
}

export default withRouter(MealPreferenceCard)  ;