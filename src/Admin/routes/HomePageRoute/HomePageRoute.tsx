import React, { Component } from 'react'
import { withRouter,RouteComponentProps } from 'react-router-dom'
import { HomePage } from '../../components/HomePage'
import { observer, inject } from 'mobx-react'
import { TabBar } from '../../components/common/TabBar'
import { ScheduleMeal } from '../../components/ScheduleMeal'
import { HeadCounts } from '../../components/HeadCounts'
import { FoodWastageLog } from '../../components/FoodWastageLog'
import { ScheduleMealStore } from "../../stores/ScheduleMealStore"
import { HeadCountsStore } from "../../stores/HeadCountsStore"
import { AuthStore } from "../../../Authentication/stores/AuthStore"


interface HomePageRouteProps extends RouteComponentProps{
   
}
interface InjectedProps extends HomePageRouteProps{
   scheduleMealStore:ScheduleMealStore
   headCountsStore:HeadCountsStore
   authStore:AuthStore
}

@inject('scheduleMealStore', 'headCountsStore', 'authStore')
@observer
class HomePageRoute extends Component <HomePageRouteProps>{
   componentDidMount() {
      this.doNetworkCalls()
   }
   getInjectedProps=():InjectedProps=>this.props as InjectedProps
   doNetworkCalls = () => {
      this.getInjectedProps().scheduleMealStore.getScheduleMealInfo()
      this.getInjectedProps().headCountsStore.getHeadCountsInfo()
   }
   onClickSignOut = () => {
      this.getInjectedProps().authStore.userSignOut()
      const { history } = this.props
      history.push('/food-management/sign-in')
   }
   onClickGoHome = () => {
      const { history } = this.props
      history.push('/food-management/admin/home')
   }
   renderSuccessUI = observer(() => {
      return (
         <TabBar
            renderedComponent1={ScheduleMeal}
            renderedComponent2={HeadCounts}
            renderedComponent3={FoodWastageLog}
            dataForComponent1={this.getInjectedProps().scheduleMealStore}
            dataForComponent2={this.getInjectedProps().headCountsStore}
         />
      )
   })
   render() {
      const {
         getHeadCountsInfoAPIStatus,
         getHeadCountsInfoAPIError
      } = this.getInjectedProps().headCountsStore
      return (
         <HomePage
            onClickGoHome={this.onClickGoHome}
            onClickSignOut={this.onClickSignOut}
            getHeadCountsInfoAPIStatus={getHeadCountsInfoAPIStatus}
            getHeadCountsInfoAPIError={getHeadCountsInfoAPIError}
            doNetworkCalls={this.doNetworkCalls}
            renderSuccessUI={this.renderSuccessUI}
         />
      )
   }
}

export default withRouter(HomePageRoute)
