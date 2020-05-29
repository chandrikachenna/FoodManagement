import React, { Component } from 'react';
import {HomePageContainer,Div,ButtonTextLabel} from './styledComponents';
import {Mealcards} from '../Mealcards'
import {Navbar} from '../../common/Navbar';
import {Carousel} from '../../common/Carousel';
import {DatePickerComponent} from '../../../Common/components/DatePickerComponent';

class HomePage extends Component {
    render() {
        const {onClickSignOut,mealInfoList}=this.props;
        return (
            <HomePageContainer>
                <Navbar onClickSignOut={onClickSignOut}/>
                <Carousel/>
                <Div>
                    <DatePickerComponent />
                </Div>
                <Mealcards mealInfoList={mealInfoList} />
            </HomePageContainer>
        );
    }
}

export {HomePage};