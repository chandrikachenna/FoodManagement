import React, { Component } from 'react'
import { MealPreferencePageContainer } from './styledComponents'
import { Navbar } from '../common/Navbar'
import LoadingWrapperWithLoader from '../common/LoadingWrapperWithFailure'

class MealPreferencePage extends Component {
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
         <MealPreferencePageContainer>
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
