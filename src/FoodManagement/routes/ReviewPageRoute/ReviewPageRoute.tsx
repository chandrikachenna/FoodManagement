import React, { Component } from 'react'
import { withRouter,RouteComponentProps } from 'react-router-dom'
import { ReviewPage } from '../../components/ReviewPage'
import { observer, inject } from 'mobx-react'
import { withHeader } from '../../../Common/hocs/withHeader'
import { MealInfoStore } from "../../stores/MealInfoStore"

interface ReviewPageRouteProps extends RouteComponentProps{
   
   onClickSignOut:()=>void,
   onClickGoHome:()=>void
}
interface InjectedProps extends ReviewPageRouteProps{
   mealInfoStore:MealInfoStore
}
@inject('mealInfoStore')
@observer
class ReviewPageRoute extends Component <ReviewPageRouteProps>{
   componentDidMount = () => {
      this.doNetworkCalls()
   }
   getInjectedProps=():InjectedProps=>this.props as InjectedProps

   doNetworkCalls = () => {
      const { goForReview, selectedMealType } = this.getInjectedProps().mealInfoStore
      goForReview(selectedMealType)
   }
   render() {
      return (
         <ReviewPage
            onClickGoHome={this.props.onClickGoHome}
            onClickSignOut={this.props.onClickSignOut}
            mealInfoStore={this.getInjectedProps().mealInfoStore}
            doNetworkCalls={this.doNetworkCalls}
         />
      )
   }
}

export default withRouter(withHeader(ReviewPageRoute))
