import React, { Component } from 'react';
import {HomePageContainer} from './styledComponents';
import {Navbar} from '../../common/Navbar';
import {Carousel} from '../../common/Carousel';
import React, { Component } from 'react';

class MealPreferencePage extends Component {
    render() {
        const {onClickSignOut}=this.props;
        return (
            <HomePageContainer>
                <Navbar onClickSignOut={onClickSignOut}/>
                <Carousel/>
            </HomePageContainer>
        );
    }
}

export  {MealPreferencePage};