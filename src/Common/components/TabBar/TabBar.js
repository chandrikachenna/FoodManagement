import React, { Component } from 'react';
import {Layout,Button,Text} from './styledComponents';
import { observer } from "mobx-react";
import { observable } from "mobx";

@observer
class TabBar extends Component {
    // @observable selectedBtn=this.props.mealFormat;
    @observable selectedBtn='FullMeal';
    onclickFullMeal=()=>{
        this.selectedBtn='FullMeal';
        this.props.onclickFullMeal()
    }
    onclickHalfMeal=()=>{
        this.selectedBtn='HalfMeal';
        this.props.onclickHalfMeal()
    }
    onclickCustom=()=>{
        this.selectedBtn='CustomMeal';
        this.props.onclickCustom()
    }
    render() {
        const {fullMeal,HalfMeal,Custom}=this.props;
        return (
            <Layout>
                <Button onClick={this.onclickFullMeal} styled={{color:this.selectedBtn.match('FullMeal')&&'blue'}}>
                    <Text>{fullMeal}</Text></Button>
                <Button onClick={this.onclickHalfMeal} styled={{color:this.selectedBtn.match('HalfMeal')&&'blue'}}>
                    <Text>{HalfMeal}</Text></Button>
                <Button onClick={this.onclickCustom} styled={{color:this.selectedBtn.match('CustomMeal')&&'blue'}}>
                    <Text>{Custom}</Text></Button>
            </Layout>
        );
    }
}

export {TabBar} ;