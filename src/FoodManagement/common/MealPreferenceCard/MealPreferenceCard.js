import React, { Component } from 'react';
import { observer } from "mobx-react";
import { observable } from "mobx";
import { withRouter } from "react-router-dom";

import {Layout,Header,Footer,InfoBox,Title,SelectionField,ImageHolder,Wrap} from './styledComponents';

import {MealPreferenceCustom} from '../../components/MealPreferenceCustom';
import {MealPreferenceDefault} from '../../components/MealPreferenceDefault';

import {DatePicker} from '../../../Common/components/DatePicker';
import {TabBar} from '../../../Common/components/TabBar';
import FoodPreferenceImage from '../../../Common/images/foodPreference.png';
import {Button} from '../../../Common/components/Button';
import {COLORS} from '../../../Common/theme/Colors';
import strings from '../../../Common/i18n/strings.json';


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
        // if(selectedMealTypeInfo.getMealItemsAPIStatus===200){
        //     Object.entries(selectedMealTypeInfo.mealItems).map(([mealFormate, mealItemsList]) => {
        //         console.log(mealFormate,mealItemsList);
                
        //     })
        // }
        return (
            <Layout>
                {selectedMealTypeInfo.getMealItemsAPIStatus===200 &&
                <>
                    <Header>
                        <Title>{selectedMealTypeInfo.mealItems.mealType}</Title>
                        <Button variant={COLORS.white} onClick={this.onClikFullMeal} width={'102px'}
                                name={skipMeal} color={COLORS.black}
                        />
                    </Header>
                    <SelectionField>
                        <TabBar onClikFullMeal={this.onClikFullMeal} onClikHalfMeal={this.onClikHalfMeal} onClikCustom={this.onClikCustom}/>
                        <DatePicker/>
                    </SelectionField>
                    <InfoBox>
                        <Wrap>
                            { this.mealFormate.match('full_meal') && <MealPreferenceDefault info={selectedMealTypeInfo.mealItems.full_meal}/>}
                            { this.mealFormate.match('half_meal') && <MealPreferenceDefault  info={selectedMealTypeInfo.mealItems.half_meal}/>}
                            { this.mealFormate.match('custom') && <MealPreferenceCustom  info={selectedMealTypeInfo.mealItems.custom} />}
                        </Wrap>  
                    <ImageHolder src={FoodPreferenceImage}/>
                    </InfoBox>
                    <Footer>  
                        <Button variant={COLORS.white} onClick={this.onClick} width={'71px'}
                                name={back} color={COLORS.black}
                        />
                        <Button variant={COLORS.white} onClick={this.onClick} width={'71px'}
                                name={save} color={COLORS.black}
                        />   
                    </Footer>
                </>
            }
            </Layout>
        );
    }
}

export default withRouter(MealPreferenceCard)  ;