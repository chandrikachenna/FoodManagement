import React, { Component } from 'react';
import {CardLayout,Header,ButtonTextLabel,TitleBox,FoodType,FoodTimigs,
    FoodItemsContainer,EditPreferenceBox,Left,Right,FoodItem,Label} from './styledComponents';
import './MealnfoCard.css'
import {Button} from '../../../Common/components/Button';
import strings from '../../../Common/i18n/strings.json';
import {IconHolder} from '../../../Common/components/IconHolder';
import {Menubar} from '../../../Common/components/Menubar';
import { withRouter } from "react-router-dom";
import {TextLabel} from '../../../Common/components/TextLabel';

class MealInfoCard extends Component {
    onClick=()=>{
        console.log('hi');
        const {history}=this.props;
        history.push('/food-management/set-meal-preference')
    }
    render() {
        const {editPreference}=strings.foodManagement
        const {svg}=this.props;
        return (
            <CardLayout>
                <Header>
                    <IconHolder svg={svg}/>
                    <TitleBox>
                        <FoodType>{`mealType`}</FoodType>
                        <FoodTimigs>{`timing`}</FoodTimigs>
                    </TitleBox>
                    <Label>
                        <Menubar />
                        <TextLabel text={'mealCourse'}/>
                    </Label>
                    
                </Header>
                <FoodItemsContainer>
                    <Left>
                        <FoodItem>Idly</FoodItem>
                        <FoodItem>Chutney</FoodItem>
                    </Left>
                    <Right>
                        <FoodItem>Upma</FoodItem>
                        <FoodItem>Chapathi</FoodItem>
                    </Right>
                </FoodItemsContainer>
                <EditPreferenceBox></EditPreferenceBox>
                <Button buttonName={editPreference} className={`button-styling`} 
                    onClickFunction={this.onClick} textLabel={ButtonTextLabel}/>
                
            </CardLayout>
        );
    }
}

export default withRouter(MealInfoCard);