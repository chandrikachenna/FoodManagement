import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { ReviewPage } from '../../components/ReviewPage'
import { observer, inject } from 'mobx-react'
import { withHeader } from '../../../Common/hocs/withHeader'
import { MealInfoStore } from "../../stores/MealInfoStore"

interface ReviewPageRouteProps{
   mealInfoStore:MealInfoStore,
   onClickSignOut:()=>void,
   onClickGoHome:()=>void
}
@inject('mealInfoStore')
@observer
class ReviewPageRoute extends Component <ReviewPageRouteProps>{
   componentDidMount = () => {
      this.doNetworkCalls()
   }
   doNetworkCalls = () => {
      const { goForReview, selectedMealType } = this.props.mealInfoStore
      goForReview(selectedMealType)
   }
   render() {
      return (
         <ReviewPage
            onClickGoHome={this.props.onClickGoHome}
            onClickSignOut={this.props.onClickSignOut}
            mealInfoStore={this.props.mealInfoStore}
            doNetworkCalls={this.doNetworkCalls}
         />
      )
   }
}

export default withRouter(withHeader(ReviewPageRoute))
