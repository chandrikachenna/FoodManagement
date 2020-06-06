import React, { Component } from 'react'
import { HomePageContainer, Body } from './styledComponents'
import { Navbar } from '../common/Navbar'
import strings from '../../../Common/i18n/strings.json'
import { TabBar } from '../common/TabBar'
import { ScheduleMeal } from '../../components/ScheduleMeal'
import { HeadCounts } from '../../components/HeadCounts'
import { FoodWastageLog } from '../../components/FoodWastageLog'
import { MealItem } from '../../components/common/MealItem'
import LoadingWrapperWithLoader from '../../../FoodManagement/common/LoadingWrapperWithFailure'
import { observer } from 'mobx-react'

@observer
class HomePage extends Component {
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
