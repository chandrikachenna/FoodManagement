import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { HomePage } from '../../components/HomePage'
import { observer, inject } from 'mobx-react'
import { TabBar } from '../../components/common/TabBar'
import { ScheduleMeal } from '../../components/ScheduleMeal'
import { HeadCounts } from '../../components/HeadCounts'
import { FoodWastageLog } from '../../components/FoodWastageLog'

@inject('scheduleMealStore', 'headCountsStore', 'authStore')
@observer
class HomePageRoute extends Component {
   componentDidMount() {
      this.doNetworkCalls()
   }
   doNetworkCalls = () => {
      this.props.scheduleMealStore.getScheduleMealInfo()
      this.props.headCountsStore.getHeadCountsInfo()
   }
   onClickSignOut = () => {
      this.props.authStore.userSignOut()
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
            dataForComponent1={this.props.scheduleMealStore}
            dataForComponent2={this.props.headCountsStore}
         />
      )
   })
   render() {
      const {
         getHeadCountsInfoAPIStatus,
         getHeadCountsInfoAPIError
      } = this.props.headCountsStore
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
