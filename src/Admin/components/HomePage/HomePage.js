import React, { Component } from 'react'
import { HomePageContainer, Body } from './styledComponents'
import { Navbar } from '../common/Navbar'
import strings from '../../../Common/i18n/strings.json'
import { TabBar } from '../common/TabBar'
import { ScheduleMeal } from '../../components/ScheduleMeal'
import { HeadCounts } from '../../components/HeadCounts'
import { FoodWastageLog } from '../../components/FoodWastageLog'
import { MealItem } from '../../components/common/MealItem'

class HomePage extends Component {
   render() {
      const {
         scheduleMeal,
         headCount,
         mealFeedback,
         foodTrack,
         home
      } = strings.admin
      const { onClickSignOut, onClickGoHome } = this.props
      return (
         <HomePageContainer>
            <Navbar
               onClickSignOut={onClickSignOut}
               onClickGoHome={onClickGoHome}
               page={home}
            />
            <Body>
               <TabBar
                  renderedComponent1={ScheduleMeal}
                  renderedComponent2={HeadCounts}
                  renderedComponent3={FoodWastageLog}
               />
               <MealItem />
            </Body>
         </HomePageContainer>
      )
   }
}

export { HomePage }
