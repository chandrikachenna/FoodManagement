import React, { Component } from 'react';
import {HomePageContainer,WelcomeCard,WelcomeCardContainer,Image,CardInfo,Title,Link,Links,Text} from './styledComponents';
import {Navbar} from '../../common/Navbar';
import { Carousel } from "../../common/Carousel";
import FoodPreferenceImage from '../../../Common/images/adminFoodPreference.png'
import strings from '../../../Common/i18n/strings.json';
import { compareAsc, format,formatDistance } from 'date-fns';


class HomePage extends Component {
    render() {
        const {scheduleMeal,headCount,mealFeedback,foodTrack}=strings.admin;
        const {onClickSignOut,onClickGoHome,onClickScheduleMeal}=this.props;

        console.log(format(new Date(2014, 1, 11), 'yyyy-MM-dd'));
        console.log(formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1)));
        console.log(
            formatDistance(
                new Date(2020, 6, 2, 10, 30, 10),
                new Date(2020, 6, 2, 10, 0, 0),
                { addSuffix: true }
              ) 
        )
        console.log(
            formatDistance(
                new Date(2020, 6, 2),
                new Date(2020, 6, 2),
                { addSuffix: true }
              ) 
        )
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