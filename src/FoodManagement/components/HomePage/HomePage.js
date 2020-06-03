import React, { Component } from 'react'
import { HomePageContainer } from './styledComponents'
import { Navbar } from '../../common/Navbar'
import LoadingWrapperWithLoader from '../../common/LoadingWrapperWithFailure'
import { TextArea } from '../../../Common/components/TextArea'

class HomePage extends Component {
   render() {
      const {
         onClickSignOut,
         onClickGoHome,
         doNetworkCalls,
         renderSuccessUI,
         getMealInfoAPIStatus,
         getMealInfoAPIError
      } = this.props
      return (
         <HomePageContainer>
            <Navbar
               onClickSignOut={onClickSignOut}
               onClickGoHome={onClickGoHome}
            />
            <TextArea />
            <LoadingWrapperWithLoader
               apiStatus={getMealInfoAPIStatus}
               apiError={getMealInfoAPIError}
               onRetryClick={doNetworkCalls}
               renderSuccessUI={renderSuccessUI}
            />
         </HomePageContainer>
      )
   }
}

export { HomePage }
