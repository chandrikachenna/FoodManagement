import React, { Component } from 'react'
import { HomePageContainer, Body } from './styledComponents'
import { Navbar } from '../common/Navbar'
import strings from '../../../Common/i18n/strings.json'
import LoadingWrapperWithLoader from '../../../FoodManagement/components/common/LoadingWrapperWithFailure'
import { observer } from 'mobx-react'



interface HomePageProps {
   getHeadCountsInfoAPIError:Error|null
   getHeadCountsInfoAPIStatus:number
   doNetworkCalls:()=>void
   renderSuccessUI:Function
   onClickSignOut:()=>void
   onClickGoHome:()=>void
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
