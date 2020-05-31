import React, { Component } from 'react';
import {MealPreferencePageContainer} from './styledComponents';
import {Navbar} from '../../common/Navbar';
import {Carousel} from '../../common/Carousel';
import {MealPreferenceCard} from '../../common/MealPreferenceCard';
import {ReviewCard} from '../ReviewCard';

class MealPreferencePage extends Component {
    render() {
        const {onClickSignOut,selectedMealTypeInfo,onClickGoHome}=this.props;
        
        return (
            <MealPreferencePageContainer>
                <Navbar onClickSignOut={onClickSignOut} onClickGoHome={onClickGoHome}/>
                <Carousel/>
                <ReviewCard/>
                {/* <MealPreferenceCard selectedMealTypeInfo={selectedMealTypeInfo}/> */}
            </MealPreferencePageContainer>
        );
    }
}

export  {MealPreferencePage};