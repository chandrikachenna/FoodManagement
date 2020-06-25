import React, { Component } from 'react'
import { format } from 'date-fns'
import { withRouter,RouteComponentProps } from 'react-router-dom'
import { observer, inject } from 'mobx-react'

import { withHeader } from '../../../Common/hocs/withHeader'
import { HomePage } from '../../components/HomePage'
import { Mealcards } from '../../components/Mealcards'
import { MealInfoStore } from "../../stores/MealInfoStore"
import { API_INITIAL } from "@ib/api-constants"

interface HomePageRouteProps extends RouteComponentProps{
   onClickSignOut:()=>void,
   onClickGoHome:()=>void
}
interface InjectedProps extends HomePageRouteProps{
   mealInfoStore:MealInfoStore
}
@inject('mealInfoStore')
@observer
class HomePageRoute extends Component <HomePageRouteProps>{
   componentDidMount() {
      this.getInjectedProps().mealInfoStore.getMealInfoAPIStatus = API_INITIAL
      this.doNetworkCalls()
   }
   getInjectedProps=():InjectedProps=>this.props as InjectedProps
   doNetworkCalls = () => {
      setTimeout(() => {
         const date = format(
            new Date(this.getInjectedProps().mealInfoStore.timeCounter),
            'yyyy-MM-dd'
         )
         this.getInjectedProps().mealInfoStore.getMealInfo(date)
      }, 1000)
   }

   renderSuccessUI = observer(() => {
      return (
         <Mealcards
            mealInfoList={this.getInjectedProps().mealInfoStore.mealInfo}
            timeCounter={this.getInjectedProps().mealInfoStore.timeCounter}
            mealInfoStore={this.getInjectedProps().mealInfoStore}
         />
      )
   })

   render() {
      const {
         getMealInfoAPIStatus,
         getMealInfoAPIError,
         timeCounter
      } = this.getInjectedProps().mealInfoStore
      return (
         <HomePage
            onClickSignOut={this.props.onClickSignOut}
            mealInfoList={this.getInjectedProps().mealInfoStore.mealInfo}
            onClickEdit={this.getInjectedProps().mealInfoStore.onClickEdit}
            mealInfoStore={this.getInjectedProps().mealInfoStore}
            onClickGoHome={this.props.onClickGoHome}
            doNetworkCalls={this.doNetworkCalls}
            renderSuccessUI={this.renderSuccessUI}
            getMealInfoAPIStatus={getMealInfoAPIStatus}
            getMealInfoAPIError={getMealInfoAPIError}
         />
      )
   }
}

export default withRouter(withHeader(HomePageRoute))
