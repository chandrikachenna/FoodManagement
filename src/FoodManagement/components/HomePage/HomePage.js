import React, { Component } from 'react';
import {HomePageContainer} from './styledComponents';
import {Navbar} from '../../common/Navbar';
import {MealPreferenceCard} from '../../common/MealPreferenceCard';

class HomePage extends Component {
    render() {
        return (
            <HomePageContainer>
                <Navbar />
                <MealPreferenceCard/>
            </HomePageContainer>
        );
    }
}

export {HomePage};