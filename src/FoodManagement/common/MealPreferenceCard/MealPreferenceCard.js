import React, { Component } from 'react';
import {Layout,Header,Footer,InfoBox,Title,SelectionField,ImageHolder,Wrap} from './styledComponents';
import { withRouter } from "react-router-dom";
import {ButtonComponent} from '../../../Common/components/ButtonComponent';
import strings from '../../../Common/i18n/strings.json';
import {DatePickerComponent} from '../../../Common/components/DatePickerComponent';
import {TabBar} from '../../../Common/components/TabBar';
import {Counter} from '../../../Common/components/Counter';
import FoodPreferenceImage from '../../../Common/images/foodPreference.png';
import { observer } from "mobx-react";
import { observable } from "mobx";

import {MealPreferenceCustom} from '../../components/MealPreferenceCustom';
import {MealPreferenceDefault} from '../../components/MealPreferenceDefault';


@observer
class MealPreferenceCard extends Component {
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
        const {skipMeal,back,save}=strings.foodManagement;
        const {selectedMealTypeInfo}=this.props;
        return (
            <Layout>
                {selectedMealTypeInfo.getMealItemsAPIStatus===200 &&
                <>
                    <Header>
                        <Title>{selectedMealTypeInfo.mealItems.mealType}</Title>
                        <ButtonComponent onClick={selectedMealTypeInfo.onClickSkipMeal} text={skipMeal}/>
                    </Header>
                    <SelectionField>
                        <TabBar onClikFullMeal={this.onClikFullMeal} onClikHalfMeal={this.onClikHalfMeal} onClikCustom={this.onClikCustom}/>
                        <DatePickerComponent/>
                    </SelectionField>
                    <InfoBox>
                    <Wrap>
                        {this.mealFormate.match('full_meal') && <MealPreferenceDefault info={selectedMealTypeInfo.mealItems.full_meal}/>}
                        { this.mealFormate.match('half_meal') && <MealPreferenceDefault  info={selectedMealTypeInfo.mealItems.half_meal}/>}
                        { this.mealFormate.match('custom') && <MealPreferenceCustom  info={selectedMealTypeInfo.mealItems.custom} />}
                        </Wrap>  
                    <ImageHolder src={FoodPreferenceImage}/>
                    </InfoBox>
                    <Footer>
                        <ButtonComponent onClick={this.onClick} text={back}/>
                        <ButtonComponent onClick={this.onClick} text={save}/>
                    </Footer>
                </>
            }
            </Layout>
        );
    }
}

export default withRouter(MealPreferenceCard)  ;