import React, { Component } from 'react';
import {Layout,Header,Footer,InfoBox,Title,SelectionField,ImageHolder} from './styledComponents';
import { withRouter } from "react-router-dom";
import {ButtonComponent} from '../../../Common/components/ButtonComponent';
import strings from '../../../Common/i18n/strings.json';
import {DatePickerComponent} from '../../../Common/components/DatePickerComponent';
import {TabBar} from '../../../Common/components/TabBar';
import {Counter} from '../../../Common/components/Counter';
import FoodPreferenceImage from '../../../Common/images/foodPreference.png';

class MealPreferenceCard extends Component {
    onClick=()=>{
        const {history}=this.props;
        history.push('/food-management/home');
    }
    render() {
        const {skipMeal,back,save}=strings.foodManagement
        const {mealPreferenceInfo}=this.props;
        if(this.props.mealPreferenceInfo){
            console.log(mealPreferenceInfo.mealType)
        }
        return (
            <Layout>
                <Header>
                    <Title>{}</Title>
                    <ButtonComponent onClick={this.onClick} text={skipMeal}/>
                </Header>
                <SelectionField>
                    {/* <TabBar /> props*/}
                    <DatePickerComponent/>
                </SelectionField>
                <InfoBox>
                   {/* <Counter/> */}
                   <ImageHolder src={FoodPreferenceImage}/>
                </InfoBox>
                <Footer>
                    <ButtonComponent onClick={this.onClick} text={back}/>
                    <ButtonComponent onClick={this.onClick} text={save}/>
                </Footer>
            </Layout>
        );
    }
}

export default withRouter(MealPreferenceCard)  ;