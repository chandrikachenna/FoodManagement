import React, { Component } from 'react'
import { HomePageContainer, Body } from './styledComponents'
import { Navbar } from '../common/Navbar'
import strings from '../../../Common/i18n/strings.json'
import { TabBar } from '../common/TabBar'
import { ScheduleMeal } from '../ScheduleMeal'
import { HeadCounts } from '../HeadCounts'
import { FoodWastageLog } from '../FoodWastageLog'
import { MealItem } from '../common/MealItem'
import LoadingWrapperWithLoader from '../../../FoodManagement/components/common/LoadingWrapperWithFailure'
import { observer } from 'mobx-react'
import { HeadCountsStore } from "../../stores/HeadCountsStore"

interface HeadCountsAPIsTypes{
   getHeadCountsInfoAPIError:null|number|string
   getHeadCountsInfoAPIStatus:number
}
interface NavigationFunction{
   onClickSignOut:()=>void
   onClickGoHome:()=>void
}
interface HomePageProps extends HeadCountsAPIsTypes,NavigationFunction{
   doNetworkCalls:()=>void
   renderSuccessUI:Function
}


@observer
class HomePage extends Component <HomePageProps>{
   render() {
      const { home } = strings.admin
      const {
         onClickSignOut,
         onClickGoHome,
         getHeadCountsInfoAPIStatus,
         getHeadCountsInfoAPIError,
         doNetworkCalls,
         renderSuccessUI
      } = this.props
      return (
         <HomePageContainer>
            <Navbar
               onClickSignOut={onClickSignOut}
               onClickGoHome={onClickGoHome}
               page={home}
            />
            <Body>
               <LoadingWrapperWithLoader
                  apiStatus={getHeadCountsInfoAPIStatus}
                  apiError={getHeadCountsInfoAPIError}
                  onRetryClick={doNetworkCalls}
                  renderSuccessUI={renderSuccessUI}
               />
            </Body>
         </HomePageContainer>
      )
   }
}

export { HomePage }
