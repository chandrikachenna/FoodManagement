import React, { Component } from 'react';
import {HomePageContainer} from './styledComponents';
import {Navbar} from '../../common/Navbar';
import {MealSchedule} from '../MealSchedule';

class MealSchedulePage extends Component {
    render() {
        const {onClickSignOut,onClickGoHome}=this.props;
        return (
            <HomePageContainer>
               <Navbar onClickSignOut={onClickSignOut} onClickGoHome={onClickGoHome}/>
                <MealSchedule/>
            </HomePageContainer>
        );
    }
}

export {MealSchedulePage};