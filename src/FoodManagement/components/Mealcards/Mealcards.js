import React, { Component } from 'react';
import {CardsContainer} from './styledComponents';
import {MealInfoCard} from '../../common/MealnfoCard';
import BreakFastIcon from '../../../Common/icons/breakfast_icon.svg';
import LunchIcon from '../../../Common/icons/lunch_icon.svg';
import DinnerIcon from '../../../Common/icons/dinner_icon.svg';

const mealTypeIcons ={'break_fast':BreakFastIcon,'lunch':LunchIcon,'dinner':DinnerIcon}

class Mealcards extends Component {
    render() {
        const {mealInfoList}=this.props;
         Object.entries(mealInfoList[0]).forEach(([key, value]) => {
            value.meal_icon=mealTypeIcons[key];
         });
         const list=Object.entries(mealInfoList[0]).map(([key, value]) => value)
        return (
                <CardsContainer>
                    {
                      list.map(info => 
                        <MealInfoCard info={info} />)  
                    }
                </CardsContainer>
        );
    }
}

export {Mealcards};