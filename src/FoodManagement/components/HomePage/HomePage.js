import React, { Component } from 'react';
import {HomePageContainer,Div} from './styledComponents';
import {Mealcards} from '../Mealcards'
import {Navbar} from '../../common/Navbar';
import {Carousel} from '../../common/Carousel';
import {DatePickerComponent} from '../../../Common/components/DatePickerComponent';

class HomePage extends Component {
    render() {
        return (
            <HomePageContainer>
                <Navbar />
                <Carousel/>
                <Div>
                    <DatePickerComponent />
                </Div>
                <Mealcards />
            </HomePageContainer>
        );
    }
}

export {HomePage};