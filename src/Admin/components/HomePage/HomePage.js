import React, { Component } from 'react';
import {HomePageContainer,WelcomeCard,WelcomeCardContainer,Image,CardInfo,Title,Link,Links,Text} from './styledComponents';
import {Navbar} from '../../common/Navbar';
import { Carousel } from "../../common/Carousel";
import FoodPreferenceImage from '../../../Common/images/adminFoodPreference.png'
import strings from '../../../Common/i18n/strings.json';

class HomePage extends Component {
    render() {
        const {scheduleMeal,headCount,mealFeedback,foodTrack}=strings.admin;
        const {onClickSignOut,onClickGoHome,onClickScheduleMeal}=this.props;
        return (
            <HomePageContainer>
               <Navbar onClickSignOut={onClickSignOut} onClickGoHome={onClickGoHome}/>
                <Carousel/>
                <WelcomeCardContainer>
                        <WelcomeCard>
                            <CardInfo>
                            <Title>Welcome</Title>
                                <Links>
                                    <Text>
                                        {/* <Link onClick={onClickScheduleMeal}>{scheduleMeal}</Link> */}
                                        <Link href={'food-management/admin/schedule-menu'}>{scheduleMeal}</Link>
                                    </Text>
                                    <Text>
                                         <Link href={'food-management/admin/headCounts'}>{headCount}</Link>
                                    </Text>
                                    <Text>
                                         <Link>{mealFeedback}</Link>
                                    </Text>
                                    <Text>
                                        <Link>{foodTrack}</Link>
                                    </Text>
                                </Links>
                            </CardInfo>
                            <Image src={FoodPreferenceImage}/>
                        </WelcomeCard>
                </WelcomeCardContainer>
            </HomePageContainer>
        );
    }
}

export {HomePage};