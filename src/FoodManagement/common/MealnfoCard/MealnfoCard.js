import React, { Component } from 'react';
import {CardLayout,Header,ButtonTextLabel,TitleBox,FoodType,FoodTimigs,
    FoodItemsContainer,EditPreferenceBox,Left,Right,FoodItem,Label} from './styledComponents';
import './MealnfoCard.css';
import {Button} from '../../../Common/components/Button';
import strings from '../../../Common/i18n/strings.json';
import {IconHolder} from '../../../Common/components/IconHolder';
import {Menubar} from '../../../Common/components/Menubar';
import { withRouter } from "react-router-dom";
import {TextLabel} from '../../../Common/components/TextLabel';

class MealInfoCard extends Component {
    onClick=()=>{
        const {history}=this.props;
        this.props.onClickEdit(this.props.info.meal_type);
        history.push('/food-management/set-meal-preference');
    }
    render() {
        const {editPreference}=strings.foodManagement
        const {meal_type,meal_items, meal_format,open_time,close_time,meal_icon}=this.props.info;
        return (
            <CardLayout>
                <Header>
                    <IconHolder svg={meal_icon}/>
                    <TitleBox>
                        <FoodType>{meal_type}</FoodType>
                        <FoodTimigs>{open_time}{` - ${close_time}`}</FoodTimigs>
                    </TitleBox>
                    <Label>
                        <Menubar />
                        <TextLabel text={meal_format}/>
                    </Label>
                    
                </Header>
                <FoodItemsContainer>
                    <Left>
                        {
                            meal_items.map((item,index)=>
                                index<3 && <FoodItem>{item.meal_item}</FoodItem>
                            )
                        }
                    </Left>
                    <Right>
                        {
                            meal_items.map((item,index)=>
                                index>=3 && <FoodItem>{item.meal_item}</FoodItem>
                            )
                        }   
                    </Right>
                </FoodItemsContainer>
                <EditPreferenceBox></EditPreferenceBox>
                <Button buttonName={editPreference} className={`button-styling`} 
                    onClickFunction={this.onClick} textLabel={ButtonTextLabel} />
            </CardLayout>
        );
    }
}

export default withRouter(MealInfoCard);