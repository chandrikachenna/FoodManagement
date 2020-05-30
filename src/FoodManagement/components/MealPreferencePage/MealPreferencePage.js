import React, { Component } from 'react';
import {MealPreferencePageContainer} from './styledComponents';
import {Navbar} from '../../common/Navbar';
import {Carousel} from '../../common/Carousel';
import {MealPreferenceCard} from '../../common/MealPreferenceCard';

class MealPreferencePage extends Component {
    render() {
        const {onClickSignOut,selectedMealTypeInfo,onClickGoHome}=this.props;
        
        return (
            <MealPreferencePageContainer>
                <Navbar onClickSignOut={onClickSignOut} onClickGoHome={onClickGoHome}/>
                <Carousel/>
                <MealPreferenceCard selectedMealTypeInfo={selectedMealTypeInfo}/>
            </MealPreferencePageContainer>
        );
    }
}

export  {MealPreferencePage};