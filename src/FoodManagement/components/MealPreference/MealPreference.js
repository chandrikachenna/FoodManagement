import React, { Component } from 'react';
import {Carousel} from '../../common/Carousel';
import {MealPreferenceCard} from '../../common/MealPreferenceCard';
import {ReviewCard} from '../ReviewCard';

class MealPreference extends Component {
    render() {
        const {selectedMealTypeInfo}=this.props;
        return (
            <>
                <Carousel/>
                <ReviewCard/>
                <MealPreferenceCard selectedMealTypeInfo={selectedMealTypeInfo}/>
            </>
        );
    }
}

export {MealPreference};