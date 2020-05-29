import React, { Component } from 'react';
import {CardsContainer} from './styledComponents';
import {MealInfoCard} from '../../common/MealnfoCard';
import BreakFastIcon from '../../../Common/icons/breakfast_icon.svg';
import LunchIcon from '../../../Common/icons/lunch_icon.svg';
import DinnerIcon from '../../../Common/icons/dinner_icon.svg';

const mealTypeIcons ={'break_fast':BreakFastIcon,'lunch':LunchIcon,'dinner':DinnerIcon}

class Mealcards extends Component {
    render() {
        const {mealInfoList,onClickEdit}=this.props;
        let list;
        if(mealInfoList.length){
            Object.entries(mealInfoList[0]).forEach(([key, value]) => {
                value.meal_icon=mealTypeIcons[key];
             });
             list=Object.entries(mealInfoList[0]).map(([key, value]) => value)
        }
        return (
                <CardsContainer>
                    {
                     list && list.map(info => 
                        <MealInfoCard info={info} onClickEdit={onClickEdit}/>)  
                    }
                </CardsContainer>
        );
    }
}

export {Mealcards};