import React, { Component } from 'react';
import {Container,Div,Cards} from './styledComponents';
import {DatePickerComponent} from '../../../Common/components/DatePickerComponent';
import {MealPreferenceCard} from '../../common/MealPreferenceCard';

class UserDayMenu extends Component {
    render() {
        return (
            <Container>
                <Div>
                    <DatePickerComponent/>
                </Div>
                <Cards>
                    <MealPreferenceCard/>
                    <MealPreferenceCard/>
                    <MealPreferenceCard/>
                </Cards>
            </Container>
        );
    }
}

export {UserDayMenu};