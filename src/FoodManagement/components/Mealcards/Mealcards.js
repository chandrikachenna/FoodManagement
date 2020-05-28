import React, { Component } from 'react';
import {CardsContainer} from './styledComponents';
import {MealInfoCard} from '../../common/MealnfoCard';

class Mealcards extends Component {
    render() {
        return (
                <CardsContainer>
                    <MealInfoCard/>
                    <MealInfoCard/>
                    <MealInfoCard/>
                </CardsContainer>
        );
    }
}

export {Mealcards};