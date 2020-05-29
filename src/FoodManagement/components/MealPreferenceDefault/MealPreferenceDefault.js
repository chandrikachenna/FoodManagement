import React, { Component } from 'react';
import {Layout,Left,Right} from './styledComponents';
class MealPreferenceDefault extends Component {
    render() {
        return (
            <>
                <Layout>
                    <Left></Left>
                    <Right></Right>
                </Layout>
            </>
        );
    }
}

export {MealPreferenceDefault};