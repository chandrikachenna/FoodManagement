import React, { Component } from 'react';
import {CardsContainer} from './styledComponents';
import {MealInfoCard} from '../../common/MealnfoCard';
import BreakFastIcon from '../../../Common/icons/breakfast_icon.svg';
import LunchIcon from '../../../Common/icons/lunch_icon.svg';
import DinnerIcon from '../../../Common/icons/dinner_icon.svg';


const mealTypeIcons =[BreakFastIcon,LunchIcon,DinnerIcon]

class Mealcards extends Component {
    render() {
        const {mealInfoList}=this.props;
        mealInfoList.map((item,index)=>
            item.meal_icon=mealTypeIcons[index]
        )
        return (
                <CardsContainer>
                    {
                      mealInfoList.map(info => 
                        <MealInfoCard info={info} />)  
                    }
                </CardsContainer>
        );
    }
}

export {Mealcards};