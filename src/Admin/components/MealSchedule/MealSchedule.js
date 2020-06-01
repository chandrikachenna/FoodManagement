import React, { Component } from 'react';
import { observer } from "mobx-react";
import { observable } from "mobx";
import { withRouter } from "react-router-dom";

import {Layout,Header,Footer,InfoBox,Title,SelectionField,Wrap} from './styledComponents';

import {DatePicker} from '../../../Common/components/DatePicker';
import {TabBar} from '../../../Common/components/TabBar';
import {Button} from '../../../Common/components/Button';
import {COLORS} from '../../../Common/theme/Colors';
import strings from '../../../Common/i18n/strings.json';


@observer
class MealSchedule extends Component {
    @observable mealFormate='full_meal';
    onClick=()=>{
        const {history}=this.props;
        history.push('/food-management/home');
    }
    onClikFullMeal=()=>{
        this.mealFormate='full_meal';
    }
    onClikHalfMeal=()=>{
        this.mealFormate='half_meal';
    }
    onClikCustom=()=>{
        this.mealFormate='custom';
    }
    render() {
        const {back,save}=strings.foodManagement;
        const {scheduleMeal}=strings.admin;

        return (
            <Layout>
                <Header>
                    <Title>{scheduleMeal}</Title>
                </Header>
                <SelectionField>
                    <TabBar onClikFullMeal={this.onClikFullMeal} onClikHalfMeal={this.onClikHalfMeal} onClikCustom={this.onClikCustom}/>
                    <DatePicker/>
                </SelectionField>
                <InfoBox>
                    <Wrap>
                       
                    </Wrap>  
                </InfoBox>
                <Footer>  
                    <Button variant={COLORS.white} onClick={this.onClick} width={'71px'}
                            name={back} color={COLORS.black}
                    />
                    <Button variant={COLORS.jade} onClick={this.onClick} width={'71px'}
                            name={save} color={COLORS.white}
                    />   
                </Footer>
            </Layout>
        );
    }
}

export default withRouter(MealSchedule)  ;