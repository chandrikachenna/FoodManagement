import React, { Component } from 'react';
import {HomePageContainer,WelcomeCard,WelcomeCardContainer} from './styledComponents';
import {Navbar} from '../../common/Navbar';
import { Carousel } from "../../common/Carousel";


class HomePage extends Component {
    render() {
        const {onClickSignOut,onClickGoHome}=this.props;
        return (
            <HomePageContainer>
               <Navbar onClickSignOut={onClickSignOut} onClickGoHome={onClickGoHome}/>
                <Carousel/>
                <WelcomeCardContainer>
                        <WelcomeCard>

                        </WelcomeCard>
                </WelcomeCardContainer>
            </HomePageContainer>
        );
    }
}

export {HomePage};