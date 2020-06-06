import React, { Component } from 'react'
import { HomePageContainer } from './styledComponents'
import { Navbar } from '../common/Navbar'
import { ReviewCard } from '../ReviewCard'
import { Carousel } from '../common/Carousel'
import LoadingWrapperWithLoader from '../common/LoadingWrapperWithFailure'
import { observer } from 'mobx-react'

@observer
class ReviewPage extends Component {
   renderSuccessUI = observer(() => {
      return (
         <>
            <Carousel />
            <ReviewCard mealInfoStore={this.props.mealInfoStore} />
         </>
      )
   })
   render() {
      const {
         onClickSignOut,
         onClickGoHome,
         mealInfoStore,
         doNetworkCalls
      } = this.props
      const selectedMealTypeReview = {
         ...mealInfoStore.selectedMealTypeReview
      }
      const {
         getMealReviewAPIStatus,
         getMealReviewAPIError
      } = selectedMealTypeReview
      return (
         <HomePageContainer>
            <Navbar
               onClickSignOut={onClickSignOut}
               onClickGoHome={onClickGoHome}
            />
            <LoadingWrapperWithLoader
               apiStatus={getMealReviewAPIStatus}
               apiError={getMealReviewAPIError}
               onRetryClick={doNetworkCalls}
               renderSuccessUI={this.renderSuccessUI}
            />
         </HomePageContainer>
      )
   }
}

export { ReviewPage }
