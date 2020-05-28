import React, { Component } from 'react';
import {HomePageContainer,Div} from './styledComponents';
import {Navbar} from '../../common/Navbar';
import {Carousel} from '../../common/Carousel';
import {DatePickerComponent} from '../../../Common/components/DatePickerComponent';
import {MealPreferenceCard} from '../../common/MealPreferenceCard';

import {UserDayMenu} from '../UserDayMenu'
class HomePage extends Component {
    render() {
        return (
            <HomePageContainer>
                <Navbar />
                <Carousel/>
                {/* <Div>
                    <DatePickerComponent />
                </Div>
                <MealPreferenceCard/> */}
                <UserDayMenu/>
            </HomePageContainer>
        );
    }
}

export {HomePage};