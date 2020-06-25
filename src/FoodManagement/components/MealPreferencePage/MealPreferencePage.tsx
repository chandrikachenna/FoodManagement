import React, { Component } from 'react'
import { MealPreferencePageContainer } from './styledComponents'
import { Navbar } from '../common/Navbar'
import LoadingWrapperWithLoader from '../common/LoadingWrapperWithFailure'
import { MealInfoStore } from "../../stores/MealInfoStore"
import { APIStatus } from "@ib/api-constants"

interface MealPreferencePageProps{
   onClickSignOut:()=>void,
   onClickGoHome:()=>void,
   doNetworkCalls:()=>void
   getMealItemsAPIError:Error|null
   getMealItemsAPIStatus:APIStatus
   renderSuccessUI:Function
}
class MealPreferencePage extends Component<MealPreferencePageProps> {
   render() {
      const {
         onClickSignOut,
         onClickGoHome,
         getMealItemsAPIError,
         getMealItemsAPIStatus,
         doNetworkCalls,
         renderSuccessUI
      } = this.props

      return (
         <MealPreferencePageContainer data-test-id='preference-page'>
            <Navbar
               onClickSignOut={onClickSignOut}
               onClickGoHome={onClickGoHome}
            />
            <LoadingWrapperWithLoader
               apiStatus={getMealItemsAPIStatus}
               apiError={getMealItemsAPIError}
               onRetryClick={doNetworkCalls}
               renderSuccessUI={renderSuccessUI}
            />
         </MealPreferencePageContainer>
      )
   }
}

export { MealPreferencePage }
